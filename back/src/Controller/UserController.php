<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class UserController extends AbstractController
{

    private $em;
    private $passwordEncoder;
    private $slugger;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder, SluggerInterface $slugger)
    {
        $this->em = $em;
        $this->passwordEncoder = $passwordEncoder;
        $this->slugger;
    }
    /**
     * @Route("/register", name="register_user")
     */
    public function register(Request $request)
    {
        $user = new User;

        
        $user->setFirstname($request->query->get('firstname'));
        $user->setLastname($request->query->get('lastname'));
        $user->setemail($request->query->get('email'));
        $user->setPassword($this->passwordEncoder->encodePassword($user, $request->query->get('password')));
        $user->setBirthday(new DateTime($request->query->get('birthday')));
        $user->setCity($request->query->get('city'));

        $user->setCreatedAt(new DateTime());
        $user->setRoles(['ROLE_USER']);

        $avatar = $request->files->get('avatar');

        $form = $this->createForm(RegisterType::class, $user);
        $form->handleRequest($request);
        $form->isSubmitted() == true;
        if ($form->isSubmitted() && $form->isValid()) {

            if ($avatar) {
                
                $originalFileName = pathinfo($avatar->getClientOriginalName(), PATHINFO_FILENAME);

                $safeFilename = $this->slugger->slug($originalFileName);
                $newFilename = $safeFilename.uniqid().'.'.$avatar->guessExtension();

                try {
                    $avatar->move(
                        $this->getParameter('avatar_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    return new JsonResponse(['error' => 'Picture could not be uploaded !']);
                }

                $user->setAvatar($newFilename);
            }

            $this->em->persist($user);
            $this->em->flush();

            $response = new JsonResponse;
            return $response->setStatusCode(Response::HTTP_CREATED);

        }
        $response = new JsonResponse;
        return $response->setStatusCode(Response::HTTP_OK);
    }

 
}
