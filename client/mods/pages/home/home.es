import Vue from 'vue';

export default Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('home.html')
});