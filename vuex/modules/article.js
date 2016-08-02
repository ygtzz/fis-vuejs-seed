var state = {
    article: { 'content': '' }
}

var mutations = {
    'getArticleDetail': function(state, article) {
        state.article = article;
    }
}

module.exports = {
    state: state,
    mutations: mutations
}