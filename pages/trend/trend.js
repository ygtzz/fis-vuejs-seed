var Vue = require('vue');

require('category/category.js');
require('list/list.js');
require('search/search.js');


module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('trend.html'),
    events:{
    	'search-change':function(data){
    		this.$broadcast('search-change',data);
    	}
    }
});