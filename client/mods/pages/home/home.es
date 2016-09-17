import Vue from 'vue';
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'

import 'vux/dist/vux.css'

export default Vue.extend({
    inherit: true, //集成父元素所有属性
    template: __inline('home.html')
});