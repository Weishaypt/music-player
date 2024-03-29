<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Music Player</title>

  <!-- Scripts -->
  <script src="{{ asset('public/js/assets.js') }}" defer></script>
  <script type="module" src="{{ asset('public/js/app.js') }}" defer></script>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ asset('public/css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
</div>
</body>
</html>
