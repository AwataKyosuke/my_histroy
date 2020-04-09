/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  changeTitle(state: any, title: string ) {
    state.title = title
  },

  tagSelected(state: any, selectedTag: string) {
    const targetTag = state.tags.filter((tag: { name: string }) => tag.name === selectedTag)[0]
    targetTag.selected = !targetTag.selected
  },

  filterKeyword(state: any, value: string) {
    state.filterKeyword = value
  },

  filteringArticle(state: any) {

    // 入力されている文字列
    const inputKeyword = state.filterKeyword

    // フィルタリング後の記事一覧
    const filtered = [];

    // 記事の数だけループ
    for (const i in state.articles) {

      // 判定対象の記事
      const article = state.articles[i];

      // 選択されているタグが含まれているか
      let tagMatched = false

      // 入力されている文字列がタイトルに含まれているか
      let keywordMatched = false

      // articleが持っているタグの数だけループ
      for (const j in article.tags) {

        // 選択されているタグを取得
        const selectedTag = state.tags.filter((x: { selected: boolean }) => x.selected === true)
        if (selectedTag.length === 0) {
          tagMatched = true
          break;
        }

        // 記事の持つタグID
        const articleTagId = article.tags[j]

        // 記事の持つタグIDと一致するタグ
        const stateTag = state.tags.filter((x: { id: any }) => x.id === articleTagId)[0]

        // タグが選択されているか判定
        if (stateTag.selected) {
          tagMatched = true
        }
      }

      // 入力文字列がタイトルに含まれているか判定
      if (inputKeyword.length === 0 || article.title.indexOf(inputKeyword) >= 0) {
        keywordMatched = true
      }

      // TODO すべての条件がtrueの場合は追加する
      if (keywordMatched && tagMatched) {
        filtered.push(article);
      }
    }
    state.filteredArticles = filtered;
  }
}
