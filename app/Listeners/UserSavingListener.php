<?php

namespace App\Listeners;
//use App\Events\UserSaving as UserSavingEvent;
use App\Events\UserSaving;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserSavingListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserSaving  $event
     * @return void
     */
    public function handle(UserSaving $event)
    {
        app('log')->info($event->user);
    }
}
