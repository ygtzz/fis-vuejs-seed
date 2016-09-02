
import Vue from "vue";
import service from "mock/service";
import datetime from 'widget/filter/datetime';

export default Vue.component("c-list", {
    template: __inline('list.html'),
    vuex: {
        getters: {
            cates: function(state){
                return state.trend.cates;
            },
            articles: function(state){
                return state.trend.articles;
            }
        }
    },
    filters : {
        datetime : datetime
    }
});