<?php

namespace App\Http\Controllers;

use App\Song;
use App\SongAccess;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use function GuzzleHttp\Psr7\mimetype_from_filename;

class SongController extends Controller
{

    public function index (Request $request)
    {
        return Auth::user()->songs;
    }

    public function create (Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'song' => 'required|mimes:mp3,mpga'
        ]);
        $path = $request->file('song')->storePublicly('songs');
        $song = new Song();
        $song->user_id = Auth::id();
        $song->name = $request->name;
        $song->path = $path;
        $song->save();
        $songAccess = new SongAccess();
        $songAccess->song_id = $song->id;
        $songAccess->user_id = Auth::id();
        $songAccess->save();

        return new JsonResponse($song, 201);
    }

    public function update (Request $request, $song)
    {
        $song = Auth::user()->songs->where('id', $request->song)->first();
        if(empty($song)) return new Response('', 403);

        if(!empty($request->name)) $song->name = $request->name;

        $song->save();
        return new JsonResponse($song, 200);
    }

    public function getFile(Request $request, $path)
    {
        $user = User::where('api_token', $request->token)->first();
        $song = Song::where('path', 'songs/' . $path)->first();
        if(empty($song)) return new Response('', 404);
        $access = $user->songsAccess->where('song_id', $song->id)->first();
        if(empty($access)) return new Response('', 403);

        $file = Storage::get('songs/' . $path);
        $mime = mimetype_from_filename($path);
        return response($file)->header('Content-Type', $mime);
    }

    public function get (Request $request, $song)
    {
        $song = Auth::user()->songs->where('id', $request->song)->first();
        if(empty($song)) return new Response('', 403);
        return new JsonResponse($song, 200);
    }
}
