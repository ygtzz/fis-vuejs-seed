import Vue from 'vue';
import VueRouter from 'vue-router';
import Trend from 'pages/trend/trend';
import Article from 'pages/article/article';
import Notfound from 'pages/error/notfound';

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

export default router;
