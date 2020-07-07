<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\JsonResponse;

class JwtDecodeService
{

    public function tokenDecode($token)
    {

        $tokenParts = explode('.', $token);

        $tokenPayload = base64_decode($tokenParts[1]);

        $jwtPayload = json_decode($tokenPayload);

        return $jwtPayload;
    }
}
