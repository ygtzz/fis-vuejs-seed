
var Vue = require("vue");
var service = require("mock/service.js");
var datetime = require('filter/datetime.js');

module.exports = Vue.component("c-list", {
    template: __inline('list.html'),
    vuex: {
        getters: {
            cates: function(state){
                return state.trend.cates;
            },
            articles: function(state){
                return state.trend.articles;
            }
        }
    },
    filters : {
        datetime : datetime
    }
});