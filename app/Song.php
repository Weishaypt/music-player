<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Song extends Model
{
    protected $appends = ['url'];
    protected $hidden = ['path'];

    public function getUrlAttribute()
    {
        return 'http://localhost:8000/api/storage/' . $this->path . '?token=' . Auth::user()->api_token;
    }

    public function access()
    {
        return $this->hasMany('App\SongAccess');
    }
}
