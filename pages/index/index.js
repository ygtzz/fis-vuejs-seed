
/**
 * Boot up the Vue instance and wire up the router.
 */

var Vue = require('vue');
var VueRouter = require('vue-router');
var footer = require('footer/footer.js');
var Trend = require('pages/trend/trend.js');
var Article = require('pages/article/article.js');
var Notfound = require('pages/error/notfound.js');

var App = Vue.extend({});

Vue.use(VueRouter);
var router = new VueRouter();
router.map({
    '/p/:article_id':{
        name:'article',
        component: Article
    },
    'error/notfound':{
        component: Notfound
    },
    '/:type/:cate':{
        component: Trend
    }
});

router.redirect({
    '/':'/hot/now',
    '*':'/error/notfound'
});

router.start(App,'#app');




