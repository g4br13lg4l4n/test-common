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
        $save = RequestLogs::create($request->all());
        return response()->json($save, 200);
    }
/*
    public function show(RequestLogs $requestLogs)
    {
        //
    }

    public function edit(RequestLogs $requestLogs)
    {
        //
    }

    public function update(Request $request, RequestLogs $requestLogs)
    {
        //
    }

    public function destroy(RequestLogs $requestLogs)
    {
        //
    }
*/
}
