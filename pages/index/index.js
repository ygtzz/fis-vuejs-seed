/**
 * Boot up the Vue instance and wire up the router.
 */

var Vue = require('vue');
var VueSync = require('vuex-router-sync');
var store = require('vuex/store');
var router = require('route/router');
var footer = require('footer/footer.js');

var App = Vue.extend({
    store: store
});

VueSync.sync(store, router);

router.redirect({
    '/': '/hot/now',
    '*': '/error/notfound'
});

router.start(App, '#app');