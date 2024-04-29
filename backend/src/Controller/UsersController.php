<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

class UsersController extends AbstractController
{
    #[Route('/users', name: 'create_user', methods: ['POST'])]
    public function createUser(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $entityManager = $doctrine->getManager();

        $data = json_decode($request->getContent(), true);
        $user = new Users();
        $user->setName($data['name']);

        $entityManager->persist($user);
        $entityManager->flush();

        $response = $this->json([
            'message' => 'Usuário criado com sucesso!',
            'user' => [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'nis' => $user->getIns(),
            ],
        ], Response::HTTP_CREATED);

        return $response;
}

    #[Route('/users', name: 'list_users', methods: ['GET'])]
    public function listUsers(ManagerRegistry $doctrine): JsonResponse
    {
        $userRepository = $doctrine->getRepository(Users::class);
        $users = $userRepository->findAll();

        $usersArray = [];
        foreach ($users as $user) {
            $usersArray[] = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'nis' => $user->getIns(),
            ];
        }

        return $this->json($usersArray);
    }

    #[Route('/users/search/{nis}', name: 'search_user_by_nis', methods: ['GET'])]
    public function searchUserByNis(string $nis, ManagerRegistry $doctrine): JsonResponse
    {
        $userRepository = $doctrine->getRepository(Users::class);
        $user = $userRepository->findOneBy(['ins' => $nis]);

        if ($user === null) {
            return $this->json([
                'message' => 'Nenhum usuário encontrado com este NIS.'
            ], Response::HTTP_NOT_FOUND);
        }

        return $this->json([
            'id' => $user->getId(),
            'name' => $user->getName(),
            'nis' => $user->getIns(),
        ]);
    }
}
