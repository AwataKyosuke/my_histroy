/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  filterKeyword: state => state.filterKeyword,
  getArticle: state => id => { return state.articles.find(x => x.id === id) }

}
