var types = require('mutation-types.js');
var sGetArticleType = types['getArticleDetail'];

var state = {
    article: { 'content': '' }
}

var mutations = {};
mutations[sGetArticleType] = function(state, article) {
    state.article = article;
}

module.exports = {
    state: state,
    mutations: mutations
}