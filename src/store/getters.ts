/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  filterKeyword: (state: { filterKeyword: string }) => state.filterKeyword,
  getArticle: (state: { articles: any }) => (id: number) => { return state.articles.find((x: { id: number }) => x.id === id) },
  maxCommentId: (state: { comments: any }) => state.comments.length,
  maxCategoryId: (state: { categories: any }) => state.categories.length,
  maxTagId: (state: { tags: any }) => state.tags.length,
  maxArticleId: (state: { articles: any }) => state.articles.length,
}
