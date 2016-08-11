import { getArticleDetail } from '../mutation-types';

var state = {
    article: { 'content': '' }
}

var mutations = {};
mutations[getArticleDetail] = function(state, article) {
    state.article = article;
}

export default {
    state: state,
    mutations: mutations
}