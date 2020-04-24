<template>

  <div>

    <div class="search-box">

      <p class="search-title">カテゴリ</p>
      <CategoryList v-bind:categories="categories" @selected="categorySelected($event)" />

      <p class="search-title">タグ</p>
      <TagList v-bind:tags="tags" @selected="tagSelected($event)" />

      <p class="search-title">検索</p>
      <input type="text" class="search-input" placeholder="キーワードを入力" v-model="keyword" />

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
      articles: this.$store.state.articles,
      inputKeyword: '',
    }
  },

  components:{
    CategoryList,
    TagList,
    ArticleList,
  },

  computed: {
    validArticles: function () {
      const tagId = this.tags.filter(x => x.selected === true).map(x => x.id)
      const categoryId = this.categories.filter(x => x.selected === true).map(x => x.id)
      const param = {
        keyword: this.inputKeyword,
        tagId: tagId,
        categoryId: categoryId
      }
      return this.$store.getters.filteredArticles(param)
    },

    keyword: {
      get() {
        return this.inputKeyword
      },
      set (value) {
        this.inputKeyword = value
      }
    },
  },

  methods: {
    categorySelected(id){
      const status = this.categories.find(x => x.id === id)
      status.selected = !status.selected
    },

    tagSelected(id){
      const status = this.tags.find(x => x.id === id)
      status.selected = !status.selected
    }
  },

  mounted: function() {
    this.$store.commit('clear')
  }

}
</script>

<style scoped>

.search-box {
  box-sizing: border-box;
  width: 100%;
  padding: 1vh 2vw 2vh 2vw;
  margin: 0 0 1vh 0;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

.search-title {
  font-size: 0.9vw;
  font-weight: bold;
  margin: 0;
}

.search-input {
  box-sizing: border-box;
  width: 100%;
  height: 2.8vh;
  padding: 0 0.5vw;
  margin: 0;
  font-size: 0.7vw;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 0.5vw;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
}

.search-input:focus {
  border: 1px solid #00b5ad;
}

</style>
