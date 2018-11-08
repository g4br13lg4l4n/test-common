<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function index()
    {
        // show all
        $usuarios = User::all();     

        return response()->json($usuarios, 200);
    }

    public function store(Request $request)
    {
        // create user
        $save = User::create($request->all());
        return response()->json($save, 200);
    }
}
