
var Vue = require("vue");

module.exports = Vue.component("c-category", {
    template: __inline('category.html'),
    props:['show-loading','type','cates'],
    ready: function(){
        var self = this;
    },
    methods: {
        
    }
});