/**
 * Boot up the Vue instance and wire up the router.
 */

var Vue = require('vue');
var VueSync = require('vuex-router-sync');
var VueRouter = require('vue-router');
var store = require('vuex/store');
var footer = require('footer/footer.js');
var Trend = require('pages/trend/trend.js');
var Article = require('pages/article/article.js');
var Notfound = require('pages/error/notfound.js');



var App = Vue.extend({
    store: store
});

Vue.use(VueRouter);
var router = new VueRouter();

VueSync.sync(store, router);

router.map({
    '/p/:article_id': {
        name: 'article',
        component: Article
    },
    'error/notfound': {
        component: Notfound
    },
    '/:type/:cate': {
        component: Trend
    }
});

router.redirect({
    '/': '/hot/now',
    '*': '/error/notfound'
});

router.start(App, '#app');