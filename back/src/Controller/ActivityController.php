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
        $tokenService = $this->jwtDecodeService->tokenDecode("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTQxOTEzMzQsImV4cCI6MTU5NDE5NDkzNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicXVlbnRpbi5iYXJyYXVkQGdtYWlsLmNvbSJ9.A58j6vBD19247LjpI0z1JKHRTLeATdC45hDy-GN47zT0y0Sf-0X9HTwNLBhKT4XW-IyNalxt9L_8h6w6qYNhIgvQ2o5O0LXbuC9EUhAxyAPkcDwKEJe9uLx4zkcGkphPYO4JXmVPO_KiB6f23ALC-Z_umluX15FC_dnx4LhM77IAQ1Zq2egNISQYnicdsvKM3_IFtZISxgKDSkUNx3ITexYlysosUwqEsBOFn6O8iPExWFcuFbToUwIdKY_EdwINJUNOO4zqX_jHWVA6FX-3Zb0lWhIQIgdJIbs1UfhNtfbcsfA1hkjThvg679LIHiFzFPaPFttmLi0Jf5FVLkWCbObwIhxQq2eWw7ITpnjAPjN-fI6lfgwjHD-oMD3OQLeg_1lHurr8Vpc7SJAcXIl492YH5r-GkqMFJf8Al8ZmkwGLfHP1ThsIQsS_TwL12G2eWC2V1N_s0kpr7QCcMDqnm0i1i-WRLBPkQb45bjqTeW32TtcPspRMQ0RdVqSxzfHYjwZc0UeE_f1zMAxLOv1mR2bO7oUJ7Jt_u69Vc__jEbXPra8Vr02YCibbaePdi2qTYXmsp8bVr2T73XkZ5Ki3-gUdy8iix6TeSU-Om8XmwgLtWHQ4LGEesnyOdgI7vnC78a8DW4lZN04XFQwWJ1HDF2V9i23KhMlQlvO-QYHhOkQ");
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
            $tableIdea[] = [
                    "name" => $ideasAll[$value]->getName(),
                    "picture" => $ideasAll[$value]->getPicture()
            ];
        }

        return new JsonResponse(['suggestion' => true, 'ideas' => $tableIdea], Response::HTTP_OK);
    }
}
