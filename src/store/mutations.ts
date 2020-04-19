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
  }

}
