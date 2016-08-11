import {getCateList,getArticleList,searchArticles} from '../mutation-types';

var state = {
    cates:[],
    articles:[]
}

var mutations = {};
mutations[getCateList] = function(state, cates) {
    state.cates = cates;
}
mutations[getArticleList] = function(state, articles) {
    state.articles = articles;
}
mutations[searchArticles] = function(state, articles) {
    state.articles = articles;
}

export default {
    state: state,
    mutations: mutations
}