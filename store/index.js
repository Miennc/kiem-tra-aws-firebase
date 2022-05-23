export const state = () => ({
  counter: 0,
  articleData:[]
})

export const actions = {
  async getArticle({commit}){
    const data = await this.$repositories.article.getArticle();
    commit('setArticleData',data)
  }
}

export const mutations = {
  setArticleData(state,data){
    state.articleData = data
  }
}
