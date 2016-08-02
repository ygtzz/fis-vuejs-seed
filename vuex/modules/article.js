

var state = {
    article: { 'content': '' }
}

var mutations = {
    'getArticleDetail': function(state, article) {
        console.log('mutations ');
        console.log(JSON.stringify(article));
        state.article = article;
    }
}

module.exports = {
    state: state,
    mutations: mutations
}