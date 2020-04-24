/* eslint-disable @typescript-eslint/no-explicit-any */
export default {

  getArticle(state: any) {
    return function (id: number) {
      return state.articles.find((x: { id: number }) => x.id === id)
    }
  },

  filteredArticles(state: any) {
    return function (param: any) {
      const keyword = param['keyword']
      const tagId = param['tagId']
      const categoryId = param['categoryId']

      // 検索条件が何も入力されていなければ、全ての記事を戻す
      if (categoryId.length === 0 && tagId.length === 0 && keyword.length === 0) {
        return state.articles
      }

      // フィルタリング後の記事一覧
      let filtered = state.articles

      // カテゴリによる絞り込み
      if (categoryId.length > 0) {
        filtered = filtered.filter((targetArticle: { categoryId: [] }) => 
          targetArticle.categoryId.filter((articleCategory: any) => 
            categoryId.includes(articleCategory)
          ).length > 0
        )
      }

      // タグによる絞り込み
      if (tagId.length > 0) {
        filtered = filtered.filter((targetArticle: { tagId: [] }) =>
          targetArticle.tagId.filter(articleTag =>
            tagId.includes(articleTag)
          ).length > 0
        )
      }

      // キーワードによる絞り込み
      if (keyword.length > 0) {
        filtered = filtered.filter((targetArticle: { title: string }) =>
          targetArticle.title.indexOf(keyword) >= 0
        )
      }

      return filtered
    }
  },

  maxUserId(state: any) {
    return state.users.length
  },

  maxCommentId(state: any) {
    return state.comments.length
  },

  maxCategoryId(state: any) {
    return state.categories.length
  },

  maxTagId(state: any) {
    return state.comments.length
  },

  maxArticleId(state: any) {
    return state.articles.length
  },

  loggedIn(state: any) {
    return state.loggedInUserId !== null
  },

  getUser(state: any) {
    return function (userInfo: any) {
      return state.users.find((x: { email: string; password: string }) => x.email === userInfo.email && x.password === userInfo.password)
    }
  },

  getNowDate() {
    const date = new Date();
    return `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
  }
}
