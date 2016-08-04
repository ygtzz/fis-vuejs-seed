var Vue = require('vue');
var VueRouter = require('vue-router');
var Trend = require('pages/trend/trend.js');
var Article = require('pages/article/article.js');
var Notfound = require('pages/error/notfound.js');

Vue.use(VueRouter);

var router = new VueRouter();

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

module.exports = router;
