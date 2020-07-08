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
        $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTQxOTQyNjQsImV4cCI6MTU5NDE5Nzg2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicXVlbnRpbi5iYXJyYXVkQGdtYWlsLmNvbSJ9.qc4G4PtNYVN_vRM3OxJGGv3ODYBFPBsqhlThZE5J2YgLurLOIltOqK-h--PdDQXXrSjjD8vaw_ixY9Gdx4NOtSHo_BODP7cGO8p-wHag30C7be3IRbJU0ZhGzZhPK3BoC2_UUdk7zHJ3PP83p3WzEX52Qcc-eBniHl4On_lLDc2E1IGUUq8O7CaSfdNvQJ8peP5qGl_87ZOZpgTlKQkmhsYanwpc7u82SBccRwRWqKx5W-IxV6KUzNRrjCImOXgA0cS0CVkmQ3HRelr9UAQ00LjjWWkaNXGRwYA765H6DCE3rK4sma6Yedy-7Ik5h7d1IhsytNZgKbWUvw-ldY8l0DzDUX0C5JiejMD-yJrBqNPUBG92HjeHKzWXqk5WAmQ3XQJgqkKt1daQ51-tuemOwLluhaYK7Fk7o-lYoYF439txSx9y2j-ZsUCj36RM_vvQtdlCNB3BPOfvGAprM9isNSf8VwgCSl1CavD3Cw2rkCAqXr-TV8UaZ_YXt9WR9J3SZ1A3kBBmuozGmNoDnqx4rWdK-JUBDSPYLj0krNW-u2zaV-BqSF9A2Rcp64YtGQVOyG-VBujYkcCYs3DqwqY5UDwjqSXhQEYNkQrR5ZM4LLe2iEM-Tf47mxn43Ag1gtJ1B37SR3-SuECMBnJnJPbra0ylS2yM79ll0Yv-dN2o9vo";
        $tokenService = $this->jwtDecodeService->tokenDecode($token);

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
