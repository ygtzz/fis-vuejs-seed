var service = require("mock/service.js");

function fGetArticleDetail(store,id) {
    var article = service.getArticleDetail(id, function(article) {
        store.dispatch('getArticleDetail',article);
    })
}

module.exports = {
    fGetArticleDetail:fGetArticleDetail
}