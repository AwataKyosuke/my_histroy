/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  changeTitle(state: any, title: string ) {
    state.title = title
  },

  tagSelected(state: any, selectedTag: string) {
    const targetTag = state.tags.filter((tag: { name: string }) => tag.name === selectedTag)[0]
    targetTag.selected = !targetTag.selected
  },

  categorySelected(state: any, selectedCategory: string) {
    const targetCategory = state.categories.filter((category: { name: string }) => category.name === selectedCategory)[0]
    targetCategory.selected = !targetCategory.selected
  },

  filterKeyword(state: any, value: string) {
    state.filterKeyword = value
  },

  filteringArticle(state: any) {

    // 選択されているカテゴリを取得
    const selectedCategoryId = state.categories.filter((x: { selected: boolean }) => x.selected === true).map((category: { id: any }) => category.id)

    // 選択されているタグを取得
    const selectedTagId = state.tags.filter((x: { selected: boolean }) => x.selected === true).map((tag: { id: any }) => tag.id)

    // 入力されている文字列を取得
    const inputKeyword = state.filterKeyword

    // 検索条件が何も入力されていなければ、全ての記事を戻す
    if (selectedCategoryId.length === 0 && selectedTagId.length === 0 && inputKeyword.length === 0) {
      state.filteredArticles = state.articles
      return
    }

    // フィルタリング後の記事一覧
    let filtered = state.articles

      // カテゴリによる絞り込み
    if (selectedCategoryId.length > 0) {
      filtered = filtered.filter((targetArticle: { categories: [] }) => 
        targetArticle.categories.filter((articleCategory: any) => 
          selectedCategoryId.includes(articleCategory)
        ).length > 0
      )
    }

      // タグによる絞り込み
    if (selectedTagId.length > 0) {
      filtered = filtered.filter((targetArticle: { tags: [] }) =>
        targetArticle.tags.filter(articleTag =>
          selectedTagId.includes(articleTag)
        ).length > 0
      )
    }

      // キーワードによる絞り込み
    if (inputKeyword.length > 0) {
      filtered = filtered.filter((targetArticle: { title: string }) =>
        targetArticle.title.indexOf(inputKeyword) >= 0
      )
    }

    // 絞り込み結果を反映
    state.filteredArticles = filtered
  }
}
