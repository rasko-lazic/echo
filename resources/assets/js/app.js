
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

Vue.http.headers.common['X-CSRF-TOKEN'] = Laravel.csrfToken;

import * as example from './components/Example.vue';
import * as picker from './components/Picker.vue';
import * as notification from './components/Notification.vue';
import * as clients from './components/passport/Clients.vue';
import * as auth from './components/passport/AuthorizedClients.vue';
import * as personal from './components/passport/PersonalAccessTokens.vue';

new Vue({
    el: '#app',

    components: {
        example,
        notification,
        picker,
        clients,
        auth,
        personal
    }
});