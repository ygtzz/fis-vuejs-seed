
var Vue = require("vue");
var service = require("mock/service.js");
var datetime = require('filter/datetime.js');
var actions = require('vuex/actions');

module.exports = Vue.component("c-list", {
    template: __inline('list.html'),
    vuex: {
        getters: {
            cates: function(state){
                return state.trend.cates;
            },
            articles: function(state){
                return state.trend.articles;
            },
            type: function(state){
                return state.route.params['type'];
            },
            cate: function(state){
                return state.route.params['cate'];
            }
        },
        actions:{
            fGetCateList: actions.fGetCateList,
            fGetArticleList: actions.fGetArticleList,
            fSearchArticles: actions.fSearchArticles
        }
    },
    compiled: function () {
        var type = this.type,
            cate = this.cate;
        this.fGetCateList(type,cate);
        this.fGetArticleList(type,cate);
    },
    filters : {
        datetime : datetime
    }
});