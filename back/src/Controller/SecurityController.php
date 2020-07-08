<?php

namespace App\Controller;

use App\Service\JwtDecodeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{

    private $jwtDecodeService;

    public function __construct(JwtDecodeService $jwtDecodeService)
    {
        $this->jwtDecodeService = $jwtDecodeService;
    }

    /**
     * @Route("/api/v1/islogged", name="is_logged")
     */
    public function isLogged(Request $request)
    {
        $jsonData = json_decode($request->getContent(), true);
        return $this->jwtDecodeService->tokenVerifyUser($jsonData['token']);
    }
}
