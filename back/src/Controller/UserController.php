<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use App\Repository\UserRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class UserController extends AbstractController
{
    private $em;
    private $passwordEncoder;
    private $JWTManager;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder, JWTTokenManagerInterface $JWTManager)
    {
        $this->em = $em;
        $this->passwordEncoder = $passwordEncoder;
        $this->JWTManager = $JWTManager;
    }

    /**
     * @Route("/api/v1/register", name="register_user", METHODS={"POST"})
     */
    public function register(Request $request, UserRepository $userRepository)
    {

        //I check if the email exists in the database
        $emailInDb = $userRepository->findByEmail($request->request->get('email'));
        // If not, I process the form
        if ($emailInDb === null) {
            if ($request->request->get("confirm_password") === $request->request->get("password")) {
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
                    return new JsonResponse([
                        'registred' => true,
                        'user' => [
                            'id' => $user->getId(),
                            'email' => $user->getEmail(),
                            'firstname' => $user->getFirstname(),
                            'lastname' => $user->getLastname(),
                            'role' => $user->getRoles(),
                            'birthday' => $user->getBirthday()->format('Y-m-d'),
                            'city' => $user->getCity(),
                        ]
                    ], Response::HTTP_CREATED);
                } else {
                    // If the form was not good, I send a 403 error
                    return new JsonResponse(['registred' => false, 'error' => ['validated' => false]], Response::HTTP_FORBIDDEN);
                }
            } else {
                // If the two passwords do not match, I send a 403 error
                return new JsonResponse(['registred' => false, 'error' => ['password' => false]], Response::HTTP_FORBIDDEN);
            }
        } else {
            // If an email is already exist in the database, I send a 403 error
            return new JsonResponse(['registred' => false, 'error' => ['email' => false]], Response::HTTP_FORBIDDEN);
        }
    }

    /**
     * @Route("/api/v1/login", name="login_user", METHODS={"POST"})
     */
    public function login(Request $request, UserRepository $userRepository)
    {
        $jsonData = json_decode($request->getContent(), true);

        // Find user by email. If user exists we store the user in the $user variable.
        $user = $userRepository->findByEmail($jsonData['email']);

        // If the user exists, we check the password and return a new JSON object with the credentials
        // If the user does not exist, a new JSON error message is returned to the user
        if ($user !== null) {
            if ($this->passwordEncoder->isPasswordValid($user, $jsonData['password'])) {

                // Generate the token
                $token = $this->JWTManager->create($user);

                // Return all the datas with the token in a JSON response
                return new JsonResponse([
                    'logged' => true,
                    'user' => [
                        'id' => $user->getId(),
                        'email' => $user->getEmail(),
                        'firstname' => $user->getFirstname(),
                        'lastname' => $user->getLastname(),
                        'role' => $user->getRoles(),
                        'birthday' => $user->getBirthday()->format('Y-m-d'),
                        'city' => $user->getCity(),
                        'token' => $token
                    ]
                ], Response::HTTP_OK);
            } else {
                // If the passwords do not match, we return a JSON error
                return new JsonResponse(['logged' => false, 'error' => ['password' => false]], Response::HTTP_FORBIDDEN);
            }
        } else {
            // The email does not exist, we return a JSON error
            return new JsonResponse(['logged' => false, 'error' => ['email' => false]], Response::HTTP_FORBIDDEN);
        }
    }
}
