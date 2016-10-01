
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
 window.$ = window.jQuery = require('jquery');
 require('bootstrap-sass');

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

import Echo from "laravel-echo"

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'e58a702907296a5f2ebb'
});

Vue.http.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;

import * as example from './components/Example.vue';
import * as picker from './components/Picker.vue';
import * as notification from './components/Notification.vue';

new Vue({
    el: '#app',

    components: {
        example,
        notification,
        picker
    }
});