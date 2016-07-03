
var Vue = require("vue");

module.exports = Vue.component("c-search", {
    template: __inline('./search.html'),
    data: function(){
    	return {
    		search:''
    	};
    },
    watch:{
    	'search': function(val,oldVal) {
    		this.$dispatch('search-change',val);
    	}
    }
});