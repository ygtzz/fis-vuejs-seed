var types = require('mutation-types.js');
var sGetCateType = types['getCateList'];
var sGetArticleListType = types['getArticleList'];
var sSearchType = types['searchArticles'];

var state = {
    cates:[],
    articles:[]
}

var mutations = {};
mutations[sGetCateType] = function(state, cates) {
    state.cates = cates;
}
mutations[sGetArticleListType] = function(state, articles) {
    state.articles = articles;
}
mutations[sSearchType] = function(state, articles) {
    state.articles = articles;
}

module.exports = {
    state: state,
    mutations: mutations
}