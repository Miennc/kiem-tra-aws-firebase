export default ($axios) => ({
  getArticle(payload) {
    return $axios.get(`?q=${payload}&from=2022-03-18&sortBy=publishedAt&apiKey=358a0f2f34bd446987cf461bc88e0176`)
  },
  getProducts() {
    return $axios.get('products')
  }
})
