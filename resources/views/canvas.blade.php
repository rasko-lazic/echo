@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">

                    <div id="canvas"></div>

                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="/js/canvas.js"></script>
@endsection
