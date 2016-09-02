<!DOCTYPE html>
<html class="ua_js_no" lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Hello</title>

    <link rel="stylesheet" href="/public/assets/bootstrap/bootstrap.css">
    @yield('css')
</head>
<body class="page page_divided">
    <div class="page__content">
        <article>
            @yield('content')
        </article>
    </div>
    <script src="/public/assets/bootstrap/bootstrap.js" type="text/javascript"></script>
    @yield('js')
</body>
</html>