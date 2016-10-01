<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class UserController extends Controller
{
    public function token($userId)
    {
        $user = User::findOrFail($userId);
        $token = $user->createToken('testToken')->accessToken;

        return $token;
    }

    public function developers()
    {
        $devs[] = User::findOrFail(1);
        $devs[] = User::findOrFail(1);

        return $devs;
    }
}
