

var state = {
    cates:[],
    articles:[]
}

var mutations = {
    'getCateList': function(state, cates) {
        state.cates = cates;
    },
    'getArticleList': function(state, articles) {
        state.articles = articles;
    },
    'searchArticles': function(state, articles) {
        state.articles = articles;
    }
}

module.exports = {
    state: state,
    mutations: mutations
}