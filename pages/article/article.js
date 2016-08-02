var Vue = require('vue');
var marked = require("marked");
var actions = require('vuex/actions');

module.exports = Vue.extend({
    template: __inline('article.html'),
    vuex: {
        getters: {
            article: function(state){
                console.log(state.article);
                return state.article;
            }
        },
        actions:{
            fGetArticleDetail: actions.fGetArticleDetail
        }
    },
    route: {
        data: function() {
            var id = this.$route.params['article_id'];
            console.log('route id ' + id);
            var stateId = this.store.state.route.params['article_id'];
            console.log('state id ' + stateId);
            this.fGetArticleDetail(id);
        }
    },
    filters: {
        marked: marked
    }
});