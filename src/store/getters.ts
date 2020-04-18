/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  filterKeyword: (state: { filterKeyword: string }) => state.filterKeyword,
  getArticle: (state: { articles: any }) => (id: number) => { return state.articles.find((x: { id: number }) => x.id === id) },
  maxCommentId: (state: { comments: any }) => state.comments.length
}
