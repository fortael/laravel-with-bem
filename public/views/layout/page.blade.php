<!DOCTYPE html>
<html lang="ru" class="ua_js_no">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>

    @yield('css')
</head>
<body class="app">
    <div class="app__content">
        <article>
            @yield('content')
        </article>
    </div>

    @yield('js')
</body>
</html>