var Vue = require('vue');
var actions = require('vuex/actions');

require('category/category.js');
require('list/list.js');
require('search/search.js');


module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('trend.html'),
    vuex: {
        getters: {
            type: function(state){
                return state.route.params['type'];
            },
            cate: function(state){
                return state.route.params['cate'];
            }
        },
        actions:{
            fGetCateList: actions.fGetCateList,
            fGetArticleList: actions.fGetArticleList
        }
    },
    route:{
        data:function(){
            var type = this.type,
                cate = this.cate;
            this.fGetCateList(type,cate);
            this.fGetArticleList(type,cate);
        }
    }
});