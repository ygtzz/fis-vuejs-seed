
import Vue from 'vue';

export default Vue.extend({
    template: "<h1>页面找不到</h1> <a href='/'>返回首页</a>",
    props:['type','cate','articleid'],
    data : function() {
    	return {};
    }
});