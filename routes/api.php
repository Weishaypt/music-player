<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/signup', 'Auth\RegisterController@register');
Route::post('/signin', 'Auth\LoginController@login');
Route::get('/storage/songs/{path}', 'SongController@getFile');
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/logout', 'Auth\LoginController@logout');
    Route::group(['prefix' => 'songs'], function () {
        Route::get('/', 'SongController@index');
        Route::patch('/{song}', 'SongController@update');
        Route::get('/{song}', 'SongController@get');
        Route::post('/', 'SongController@create');
    });
});
