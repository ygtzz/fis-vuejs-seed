/**
 * Boot up the Vue instance and wire up the router.
 */

import Vue from 'vue';
import VueSync from 'vuex-router-sync';
import store from 'vuex/store';
import router from 'route/router';
import footer from 'footer/footer';

var App = Vue.extend({
    store: store
});

VueSync.sync(store, router);

router.redirect({
    '/': '/hot/now',
    '*': '/error/notfound'
});

router.start(App, '#app');