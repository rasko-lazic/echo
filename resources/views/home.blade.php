@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">

                <div class="panel-heading">Group EchOat</div>

                <div class="panel-body">
                    <div class="row text-right">
                        <div class="col-md-3 text-left">
                            <span>{{ date('H:i:s d.m.Y') }}</span>
                            <span>{{ date('H:i:s d.m.Y') }}</span>
                            <span>{{ date('H:i:s d.m.Y') }}</span>
                            <span>{{ date('H:i:s d.m.Y') }}</span>
                        </div>
                        <div class="col-md-1" style="border-right: 1px solid black">

                        </div>
                        <div class="col-md-8">

                        </div>
                    </div>
                </div>

                <div class="panel-footer">
                    <input type="text" class="form-control" autofocus>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection
