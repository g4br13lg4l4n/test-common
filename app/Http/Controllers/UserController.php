<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\RequestLogs;

class UserController extends Controller
{
    public function index()
    {
        $API_URL = 'http://178.128.70.168:8001/';
        // show all
        $client = new Client([
            'base_uri' => $API_URL, 
        ]);
        $response = $client->request('GET', 'api/v1/users');
        $clients = json_decode($response->getBody()->getContents());

        $log = new RequestLogs;
        $log->type_request = 'GET';
        $log->url_request = $API_URL.'api/v1/users';
        $log->send_data = 'NULL';
        $log->status_response = json_encode($clients->status);
        $log->response = json_encode($clients);
        $log->save();

        return response()->json($clients, 200);
    }

    public function store(Request $request)
    {   
        $API_URL = 'http://178.128.70.168:8001/';
        $client = new Client([
            'base_uri' => $API_URL,
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'profession' => $request->profession
        ];

        $save = $client->request('POST', 'api/v1/user', [
            'json' => $data 
        ]);

        $response = json_decode($save->getBody()->getContents());

        $log = new RequestLogs;
        $log->type_request = 'POST';
        $log->url_request = $API_URL.'api/v1/user';
        $log->send_data = json_encode($data);
        $log->status_response = json_encode($response->status);
        $log->response = json_encode($response);
        $log->save();

        return response()->json($response, 200);
    }
}
