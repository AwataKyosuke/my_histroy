<template>

  <div>

    <div class="search-box">

      <h3 class="search-title">カテゴリ</h3>
      <CategoryList v-bind:categories="categories" />

      <h3 class="search-title">タグ</h3>
      <TagList v-bind:tags="tags" />

      <h3 class="search-title">検索</h3>
      <input type="text" class="search-input" placeholder="キーワードを入力" v-model="filterKeyword" />

    </div>

    <ArticleList v-bind:articles="validArticles" />

  </div>

</template>

<script>
import CategoryList from '@/components/organsms/CategoryList'
import TagList from '@/components/organsms/TagList'
import ArticleList from '@/components/organsms/ArticleList'

export default {

  data () {
    return {
      categories: this.$store.state.categories,
      tags: this.$store.state.tags,
      articles: this.$store.getters.filterArticles,
      keyword: this.$store.state.keyword,
    }
  },

  components:{
    CategoryList,
    TagList,
    ArticleList,
  },

  computed: {
    validArticles: function () {
      return this.$store.state.filteredArticles
    },

    filterKeyword: {
      get() {
        return this.$store.getters.filterKeyword
      },
      set(value) {
        this.$store.commit('filterKeyword', value)
        this.$store.commit('filteringArticle')
      }
    },
  },

}
</script>

<style scoped>

.search-box {
  box-sizing: border-box;
  width: 100%;
  padding: 1% 5%;
  margin: 0 0 0.7% 0;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

.search-title {
  margin: 0.5% 0;
}

.search-input {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  margin: 0;
  font-size: 16px;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
}

.search-input:focus {
  border: 1px solid #00b5ad;
}

</style>
