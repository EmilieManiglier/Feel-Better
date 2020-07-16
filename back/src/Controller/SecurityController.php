<?php

namespace App\Controller;

use App\Service\JwtDecodeService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{

    private $jwtDecodeService;
    private $session;

    public function __construct(JwtDecodeService $jwtDecodeService, SessionInterface $session)
    {
        $this->jwtDecodeService = $jwtDecodeService;
        $this->session = $session;
    }

    /**
     * @Route("/api/v1/islogged", name="is_logged")
     */
    public function isLogged(Request $request)
    {
        $jsonData = json_decode($request->getContent());


        if (empty($this->session->get('suggestion'))) {
            return new JsonResponse(['suggestionBool' => false], $this->jwtDecodeService->tokenVerifyUser($jsonData->token)->getStatusCode());
        } else {
            return new JsonResponse(['suggestionBool' => true, 'suggestion' => $this->session->get('suggestion')], $this->jwtDecodeService->tokenVerifyUser($jsonData->token)->getStatusCode());
        }
    }

    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        //if ($this->getUser()) {
        //    return $this->redirectToRoute('easyadmin');
        //}

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'controller_name' => 'login', 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout", methods={"GET"})
     */
    public function logout()
    {
        // controller can be blank: it will never be executed!
        throw new \Exception('Don\'t forget to activate logout in security.yaml');
    }
}
