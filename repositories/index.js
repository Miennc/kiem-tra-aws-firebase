import ArticleRepo from "./ArticleRepo";


export default ($axios) => ({
  article: ArticleRepo($axios),

})
