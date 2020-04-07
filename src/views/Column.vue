<template>

  <div>

    <SectionHeader title="コラム" />

    <div class="search-box">

      <h3 class="search-title">カテゴリ</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link to="">{{ category.name }}</router-link>
        </li>
      </ul>

      <h3 class="search-title">タグ</h3>
      <ul>
        <li v-for="tag in tags" :key="tag.id">
          <router-link to="">{{ tag.name }}</router-link>
        </li>
      </ul>

      <h3 class="search-title">検索</h3>
      <input type="text" class="search-input" placeholder="キーワードを入力" v-model="keyword" />
      <p>{{ keyword }}</p>

    </div>

    <ItemList />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import ItemList from '@/components/organsms/ItemList'

export default {

  data () {
    return {

      categories: this.$store.state.categories,

      tags: this.$store.state.tags,

      keyword: this.$store.state.keyword

    }
  },

  components:{
    SectionHeader,
    ItemList
  },

  computed: {
    filterColumn: function(){
      const articles = [];

      this.articles

      return articles
    }
  },

  mounted: function(){
    this.$store.commit('changeTitle', 'コラム')
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

.search-box ul {
  width: 100%;
  overflow:hidden;zoom:1;
}

.search-box ul li {
  float:left;
  list-style:none;
  margin-right: 1%;
}

.search-box ul li a {
  color: darkgray;
  text-decoration: none;
}

.search-box ul li a:hover {
  color: #58b4ff;
}

.search-input {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  margin: 5px 0;
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
