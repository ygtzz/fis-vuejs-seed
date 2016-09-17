import Vue from "vue";
import Tabbar from 'mint-ui/lib/tabbar';
import 'mint-ui/lib/tabbar/style.css';

import TabItem from 'mint-ui/lib/tab-item';
import 'mint-ui/lib/tab-item/style.css';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default Vue.component("c-footer", {
    className: 'footer',
    template: __inline('./footer.html')
});