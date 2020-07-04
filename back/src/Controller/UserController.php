<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{

    private $em;
    private $passwordEncoder;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->em = $em;
        $this->passwordEncoder = $passwordEncoder;
    }
    /**
     * @Route("/register", name="register_user")
     */
    public function register(Request $request)
    {
        // Initialization of the entity
        $user = new User;

        // Creation of the validation form
        $form = $this->createForm(RegisterType::class, $user);
        $form->submit($request->request->all());

        // Attributing values ​​to the entity
        $user->setFirstname($request->request->get('firstname'));
        $user->setLastname($request->request->get('lastname'));
        $user->setBirthday(new DateTime($request->request->get('birthday')));
        $user->setCity($request->request->get('city'));
        $user->setEmail($request->request->get('email'));
        $user->setAvatar(null);
        $user->setCreatedAt(new DateTime());
        $user->setRoles(['ROLE_USER']);
        
        // Hash password
        $user->setPassword($this->passwordEncoder->encodePassword($user, $request->request->get('password')));

        //$avatar = $request->files->get('avatar');

        // If the form is sent and it is valid
        if ($form->isSubmitted() && $form->isValid()) {

            /*if ($avatar) {
                
                $originalFileName = pathinfo($avatar->getClientOriginalName(), PATHINFO_FILENAME);
                $safeFilename = $slugger->slug($originalFileName);
                
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
            }*/
            // I save in user database
            $this->em->persist($user);
            $this->em->flush();


            // I send the answer in json
            return new JsonResponse(['registred' => true], Response::HTTP_CREATED);

        } else {
            // If the form was not good, I send a 403 error
            return new JsonResponse(['registred' => false], Response::HTTP_FORBIDDEN);
        }
    }

 
}
