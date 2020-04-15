<template>

  <div>

    <SectionHeader title="備忘録" />

    <div class="search-box">

      <h3 class="search-title">カテゴリ</h3>
      <CategoryList v-bind:categories="categories" />

      <h3 class="search-title">タグ</h3>
      <TagList v-bind:tags="tags" />

      <h3 class="search-title">検索</h3>
      <input type="text" class="search-input" placeholder="キーワードを入力" v-model="filterKeyword" />

      <div class="new-article-button-box">
        <Button :text="'備忘録を投稿する'" @clicked="newPost" />
      </div>

    </div>

    <ArticleList v-bind:articles="validArticles" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import CategoryList from '@/components/organsms/CategoryList'
import TagList from '@/components/organsms/TagList'
import ArticleList from '@/components/organsms/ArticleList'
import Button from '@/components/atoms/Button'

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
    SectionHeader,
    CategoryList,
    TagList,
    ArticleList,
    Button,
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

  methods: {
    newPost(){
      this.$router.push({ name: 'NewArticle' })
    }
  },

  mounted: function(){
    this.$store.commit('changeTitle', '備忘録')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>

.search-box {
  box-sizing: border-box;
  width: 100%;
  padding: 1% 5%;
  margin: 1% 0;
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

.new-article-button-box {
  margin: 1% 0 0 0;
  text-align: center;
}

</style>
