@extends('layouts.app')

@section('content')
<div class="container" id="app">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">

                <div class="panel-heading text-center">Notifications</div>

                <div class="panel-body">
                    {{--<clients></clients>--}}
                    {{--<auth></auth>--}}
                    {{--<personal></personal>--}}
                    <picker></picker>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
