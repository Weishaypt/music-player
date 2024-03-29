<?php

namespace App\Http\Middleware;

use Closure;

class CORSMidlleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header( 'Access-Control-Allow-Origin', '*');
        $response->header( 'Access-Control-Allow-Methods', '*');
        $response->header( 'Access-Control-Allow-Credentials', '*');

        return $response;
    }
}
