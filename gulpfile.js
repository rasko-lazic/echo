var elixir = require('laravel-elixir');

require('laravel-elixir-browserify-official');

elixir.config.js.browserify.transformers.push({
    name: 'vueify',
    options: {}
});

elixir.config.js.browserify.transformers.push({
    name: 'aliasify',
    options: {}
});

console.log(elixir.config.js.browserify);

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.browserify('app.js', 'public/js/app.js');
});
