import Vue from 'vue';
import Vuex from 'vuex';
import trend from 'modules/trend';
import article from 'modules/article';
import 'actions';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        trend,
        article
    }
});