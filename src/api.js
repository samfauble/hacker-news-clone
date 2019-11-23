


//Consumes: sortType
//Output: Article data (JSON)
function fetchArticles ({sortType}) {
    const url =  `https://hacker-news.firebaseio.com/v0/${sortType}stories.json`
}

//Consumes: userId
//Output: Article data (JSON)
function fetchUserArticles ({userId}) {
    const url =  `https://hacker-news.firebaseio.com/v0/${userId}.json`

}


//Consumes: articleId
//Output: Article data (JSON)
function fetchArticleComments ({articleId}) {
    const url =  `https://hacker-news.firebaseio.com/v0/${articleId}.json`

}




export {fetchArticles, fetchUserArticles, fetchArticleComments}