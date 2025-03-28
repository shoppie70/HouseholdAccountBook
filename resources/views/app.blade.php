<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="manifest" href="https://home.sho-tsukamoto.jp/pwa/manifest.json">
    <meta name="theme-color" content="#ffedd5">

    <!-- OGP -->
    <meta property="og:title" content="家計簿入力アプリ"/>
    <meta property="og:description" content="家計簿の支出データの追加が簡単にできるWebアプリです。"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://home.sho-tsukamoto.jp/"/>
    <meta property="og:image" content="https://home.sho-tsukamoto.jp/pwa/ogp.jpg"/>
    <meta property="og:locale" content="ja_JP"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="家計簿入力アプリ"/>
    <meta name="twitter:description" content="家計簿の支出データの追加が簡単にできるWebアプリです。"/>
    <meta name="twitter:image" content="https://home.sho-tsukamoto.jp/pwa/ogp.jpg"/>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
<script>
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/sw.js")
                .then((registration) => {
                    console.log("ServiceWorker registered: ", registration);
                })
                .catch((registrationError) => {
                    console.log("ServiceWorker registration failed: ", registrationError);
                });
        });
    }
</script>
</html>
