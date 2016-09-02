@extends('layout.page')

@section('content')

        @include('blocks-topic.user-profile.user-profile')

        @foreach($items as $one)
            {!! $item !!} <br>
        @endforeach
@stop

@section('css')
    <link rel="stylesheet" href="/public/views/bundles/welcome/welcome.css">
@stop

@section('js')
    <script src="/public/views/bundles/welcome/welcome.js" type="text/javascript"></script>
@stop