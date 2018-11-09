<?php

use Illuminate\Http\Request;
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


Route::resource('user', 'UserController', ['only' => ['store', 'index']]);
Route::resource('log', 'RequestLogsController', ['only' => ['store','index']]);

