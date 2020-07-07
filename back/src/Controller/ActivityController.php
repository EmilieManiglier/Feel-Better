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
    public function suggestion()
    {
        $tokenService = $this->jwtDecodeService->tokenDecode("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTQxMjE3MzgsImV4cCI6MTU5NDEyNTMzOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicXVlbnRpbi5iYXJyYXVkQGdtYWlsLmNvbSJ9.P0XZASjRX_OInfgU7gSRLJrt7hMbkqQ1-hZtuOkDd2QDnnyYLM4HBfC33l21_9BsbZbZFHCZOQtPjqX_T6Tb00rmhXkJudaCZbVYkM3bVWfegilsmdRIZu6zAfDSuMRYFO4dCjuHF3zPcJB7c_GpxBPI8iKAlXtkJiPZqOfPWjsWQz_iQQCDA9ctMk9fe-1holP1bhw9EpJdmhOyyi-QVA54Bh75yZ3QuLQdBTrqE01yvRwhCOdarxMBhVb5JYum2cq8PRsIoEC2QdYKGgIFaLW-ctZyaz2DRQpTQoDnn4p0xVrwrmYwCBd2gLbl3xKjjUL2bKLfZ-mCUteGZyGEH3bUyiq4htCONMYg4yQekwB-NbnNpIi3uYjnSqNG5chbYxm4t7OpsZ1cAOm86sf84R4VyqIdRqsppxoT2y6HO2ZAzfd87txtjisr1y6BAf-61eyprYOQOv1s0-j49ges_1jWhCfjOBbiF0Avf12z0LFcRSXk2W6_zfHiRPc7SMNnk2u9ovZNzutprNKYexc92POX4oPW7SumjbO_kUz8K2bptAknobl68W0E6KpM2Brlu1GJp-buRtREOFil2AoObsIb_2SeDENQJwqW3mb9WFzvC9dGduuwpCrO8AiXYIMuywBa76nroGMRMl0r5fYzfZq-AfxbBJohwIDVsHhV1lY");
        $user = $this->userRepository->findByEmail($tokenService->username);

        $userMoodDateAll = $user->getUserMoodDates()->getValues();
        $userMoodDate = $userMoodDateAll[count($userMoodDateAll) - 1];

        $userBudget = $userMoodDate->getBudget();
        $mood = $userMoodDate->getMoods()->getValues();
        //dd($mood[count($mood) - 1]);
        $ideasAll = $this->ideaRepository->findAllByMood($mood[count($mood) - 1]->getId());
        $randomIdea = array_rand($ideasAll, 5);
        $tableIdea = [];
        foreach ($randomIdea as $key => $value) {
            $tableIdea[]['name'] = $ideasAll[$value]->getName();
            $tableIdea[]['picture'] = $ideasAll[$value]->getPicture();
        }

        return new JsonResponse(['suggestion' => true, 'ideas' => [$tableIdea]], Response::HTTP_FORBIDDEN);
    }
}
