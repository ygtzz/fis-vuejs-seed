var Vue = require('vue');
var service = require("mock/service.js");
var marked = require("marked");

module.exports = Vue.extend({
    template: __inline('article.html'),
    data: function(){
        return {
            'article' : {
                'content' : ''
            }
        }
    },
    route:{
        data:function(){                        
            this.getArticleDetail(this.$route.params['article_id']);
        }
    },
    methods : {
        getArticleDetail : function(id){
            var self = this;
            var article = service.getArticleDetail(id,function(article){
                self.$data.article = article;
            })
        }
    },
    filters: {
        marked: marked
    }
});