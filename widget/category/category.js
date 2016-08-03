
var Vue = require("vue");

module.exports = Vue.component("c-category", {
    template: __inline('category.html'),
    vuex: {
        getters: {
            type: function(state){
                return state.route.params['type'];
            },
            cates: function(state){
                return state.trend.cates;
            }
        }
    }
});