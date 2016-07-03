var Vue = require('vue');
var service = require("mock/service.js");
var marked = require("marked");

module.exports = Vue.extend({
    template: __inline('article.html'),
    props:['type','cate','articleid'],
    data: function(){
        return {
            'article' : {
                'content' : ''
            }
        }
    },
    compiled : function(){
        this.getArticleDetail(this['articleid']);
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