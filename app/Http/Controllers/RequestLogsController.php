<?php

namespace App\Http\Controllers;

use App\RequestLogs;
use Illuminate\Http\Request;

class RequestLogsController extends Controller
{
    public function index()
    {
        // show all
        $requestLogs = RequestLogs::all();     
        return response()->json($requestLogs, 200);

    }

    public function store(Request $request)
    {
        // create user

        return $request->name;
        //$save = RequestLogs::create($request->all());
        //return response()->json($save, 200);
    }

}
