var Vue = require('vue');
var marked = require("marked");
var actions = require('vuex/actions');

module.exports = Vue.extend({
    template: __inline('article.html'),
    vuex: {
        getters: {
            article: function(state){
                return state.article.article;
            },
            articleId: function(state){
                return state.route.params['article_id'];
            }
        },
        actions:{
            fGetArticleDetail: actions.fGetArticleDetail
        }
    },
    compiled: function () {
        this.fGetArticleDetail(this.articleId);
    },
    filters: {
        marked: marked
    }
});