<?php

namespace App\Controller;

use App\Entity\UserMoodDate;
use App\Repository\IdeaRepository;
use App\Repository\MoodRepository;
use App\Repository\UserRepository;
use App\Service\JwtDecodeService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ActivityController extends AbstractController
{

    private $jwtDecodeService;
    private $userRepository;
    private $ideaRepository;
    private $moodRepository;
    private $em;

    public function __construct(JwtDecodeService $jwtDecodeService, UserRepository $userRepository, IdeaRepository $ideaRepository, MoodRepository $moodRepository, EntityManagerInterface $em)
    {
        $this->jwtDecodeService = $jwtDecodeService;
        $this->userRepository = $userRepository;
        $this->ideaRepository = $ideaRepository;
        $this->moodRepository = $moodRepository;
        $this->em = $em;
    }

    /**
     * @Route("/api/v1/suggestion", name="suggestion_activity")
     */
    public function suggestion(Request $request)
    {
        $jsonData = json_decode($request->getContent(), true);
        $tokenService = $this->jwtDecodeService->tokenDecode($jsonData['token']);
        $user = $this->userRepository->findByEmail($tokenService['username']);

        $userMoodDateAll = $user->getUserMoodDates()->getValues();
        $userMoodDate = $userMoodDateAll[count($userMoodDateAll) - 1];

        $userBudget = $userMoodDate->getBudget();
        $mood = $userMoodDate->getMoods()->getValues();

        $ideasAll = $this->ideaRepository->findAllByMood($mood[count($mood) - 1]->getId(), $userBudget);
        $nbActivitiesForResult = 5;

        for ($i = 0; $i <= count($ideasAll) && $i <= 5; $i++) {
            $nbActivitiesForResult = $i;
        }

        $randomIdea = array_rand($ideasAll, $nbActivitiesForResult);
        $tableIdea = [];

        foreach ($randomIdea as $keyIdea => $idea) {
            $tableIdea[$keyIdea] = [
                "name" => $ideasAll[$idea]->getName(),
                "picture" => $ideasAll[$idea]->getPicture(),
                "estimation" => $ideasAll[$idea]->getEstimation(),
                "category" => []

            ];
            foreach ($ideasAll[$idea]->getCategories()->getValues() as $keyCategory => $category) {

                $tableCategories = $category->getNameFr();
                array_push($tableIdea[$keyIdea]['category'], $tableCategories);
            }
        }



        return new JsonResponse(['suggestion' => true, 'ideas' => $tableIdea], Response::HTTP_OK);
    }


    /**
     * @Route("/api/v1/setmood", name="set_mood")
     */
    public function setMood(Request $request)
    {
        $jsonData = json_decode($request->getContent(), true);

        $tokenService = $this->jwtDecodeService->tokenDecode($jsonData['token']);

        $userEntity = $this->userRepository->findByEmail($tokenService['username']);
        $moodEntity = $this->moodRepository->findByNameEn($jsonData['mood']);
        $date = new DateTime();
        $userMoodDate = new UserMoodDate;
        $userMoodDate->addUser($userEntity);
        $userMoodDate->addMood($moodEntity);
        $userMoodDate->setBudget($jsonData['estimation']);
        $userMoodDate->setMoodDate($date);

        $this->em->persist($userMoodDate);
        $this->em->flush();

        return new JsonResponse(['setMood' => true, 'timestamp' => $date->getTimestamp()], Response::HTTP_CREATED);
    }
}
