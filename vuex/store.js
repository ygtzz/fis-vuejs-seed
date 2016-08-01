var Vue = require('vue');
var Vuex = require('vuex');
var trend = require('modules/trend.js');
var article = require('modules/article.js');

require('actions');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    modules:{
        trend,
        article
    }
});