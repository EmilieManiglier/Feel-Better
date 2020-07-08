<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\UserMoodDate;
use App\Repository\IdeaRepository;
use App\Repository\UserMoodDateRepository;
use App\Repository\UserRepository;
use App\Service\JwtDecodeService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ActivityController extends AbstractController
{

    private $jwtDecodeService;
    private $userRepository;
    private $ideaRepository;

    public function __construct(JwtDecodeService $jwtDecodeService, UserRepository $userRepository, IdeaRepository $ideaRepository)
    {
        $this->jwtDecodeService = $jwtDecodeService;
        $this->userRepository = $userRepository;
        $this->ideaRepository = $ideaRepository;
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
        //dd($mood[count($mood) - 1]);
        $ideasAll = $this->ideaRepository->findAllByMood($mood[count($mood) - 1]->getId());
        $randomIdea = array_rand($ideasAll, 5);
        $tableIdea = [];
        foreach ($randomIdea as $key => $value) {
            $tableIdea[] = [
                "name" => $ideasAll[$value]->getName(),
                "picture" => $ideasAll[$value]->getPicture()
            ];
        }

        return new JsonResponse(['suggestion' => true, 'ideas' => $tableIdea], Response::HTTP_OK);
    }
}
