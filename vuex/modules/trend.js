

var state = {
    cates:[],
    articles:[],
    search:''
}

var mutations = {
    'getCateList': function(state, cates) {
        state.cates = cates;
    },
    'getArticleList': function(state, articles) {
        state.articles = articles;
    },
    'searchArticles': function(state, articles) {
        state.article = articles;
    }
}

module.exports = {
    state: state,
    mutations: mutations
}