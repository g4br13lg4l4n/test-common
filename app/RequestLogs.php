<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestLogs extends Model
{
    protected $fillable = [
        'type_request', 'url_request', 'send_data', 'status_response', 'response',
    ];
}
