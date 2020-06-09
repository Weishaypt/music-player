<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SongAccess extends Model
{
    protected $table = 'songs_access';

    public function song()
    {
        return $this->belongsTo('App\Song');
    }
}
