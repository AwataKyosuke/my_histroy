/* eslint-disable @typescript-eslint/no-explicit-any */
export default {

  addComment(state: any, addObj: any)
  {
    state.comments.push(addObj);
  },

  addCategory(state: any, addObj: any) {
    state.categories.push(addObj);
  },

  addTag(state: any, addObj: any) {
    state.tags.push(addObj);
  },

  addArticle(state: any, addObj: any) {
    state.articles.push(addObj);
  },

  addUser(state: any, addObj: any) {
    state.users.push(addObj);
  },

  login(state: any, id: number) {
    state.loggedInUserId = id
  },

  logout(state: any) {
    state.loggedInUserId = null
  },

  selectedTag(state: any, ids: number[]) {
    state.categories.filter((x: { id: number }) => ids.includes(x.id)).forEach((x: { selected: boolean }) => x.selected = true)
  },

  selectedCategory(state: any, ids: number[]) {
    state.tags.filter((x: { id: number }) => ids.includes(x.id)).forEach((x: { selected: boolean }) => x.selected = true)
  },

  clear(state: any) {
    state.tags.forEach((x: { selected: boolean }) => x.selected = false)
    state.categories.forEach((x: { selected: boolean }) => x.selected = false)
  },

  deleteArticle(state: any, id: number) {
    const articles = state.articles.filter((x: { id: number }) => x.id !== id)
    state.articles = articles
  },

  updateArticle(state: any, editObj: any) {
    const target = state.articles.find(x => x.id === editObj.id)
    target.categoryId = editObj.categoryId
    target.tagId = editObj.tagId
    target.title = editObj.title
    target.body = editObj.body
    target.date = editObj.date
  }

}
