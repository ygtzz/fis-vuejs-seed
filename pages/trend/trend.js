var Vue = require('vue');

require('category/category.js');
require('list/list.js');
require('search/search.js');


module.exports = Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('trend.html'),
    data:function(){
        return {
            type:'',
            cate:''
        }
    },
    route:{
        data: function(){
            var params = this.$route.params;
            this.type = params.type;
            this.cate = params.cate;
        }
    },
    watch : {
        cate : function(){
            console.log("cate change",this.cate);
            this.$broadcast('cate-change', {
                cate: this.cate,
                type: this.type
            });
        },
        type: function(){
            console.log("type change ", this.type);
            this.$broadcast('type-change', {
                cate: this.cate,
                type: this.type
            });
        }
    },
    events:{
    	'search-change':function(data){
    		this.$broadcast('search-change',data);
    	}
    }
});