var service = require("mock/service.js");

function fGetArticleDetail(store) {
    var article = service.getArticleDetail(id, function(article) {
        store.dispatch('getArticleDetail');
    })
}

module.exports = {
    fGetArticleDetail:fGetArticleDetail
}