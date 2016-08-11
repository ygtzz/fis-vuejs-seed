
import Vue from "vue";

export default Vue.component("c-category", {
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