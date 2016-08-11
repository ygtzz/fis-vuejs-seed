import Vue from 'vue';
import marked from "marked";
import actions from 'vuex/actions';

export default Vue.extend({
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
    route:{
        data:function(){
            this.fGetArticleDetail(this.articleId); 
        }
    },
    filters: {
        marked: marked
    }
});