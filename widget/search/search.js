
var Vue = require("vue");
var actions = require('vuex/actions');

module.exports = Vue.component("c-search", {
    template: __inline('./search.html'),
    data: function(){
    	return {
    		search:''
    	};
    },
	vuex: {
        actions:{
            fSearchArticles: actions.fSearchArticles
        }
    },
    watch:{
    	'search': function(val,oldVal) {
			console.log('search ' + val);
    		this.fSearchArticles(val);
    	}
    }
});