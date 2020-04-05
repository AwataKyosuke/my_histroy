<template>
  <div class="about">
    <SectionHeader title="コラム" />
    <div class="search-box">
      <h3 class="search-title">カテゴリ</h3>
      <ul>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
      </ul>
      <h3 class="search-title">タグ</h3>
      <ul>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
        <li><router-link to="">test1</router-link></li>
        <li><router-link to="">test2</router-link></li>
        <li><router-link to="">test3</router-link></li>
      </ul>
      <h3 class="search-title">検索</h3>
      <input type="text" class="search-input" placeholder="キーワードを入力" />
    </div>
    <ItemList />
  </div>
</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import ItemList from '@/components/organsms/ItemList'

export default {
  components:{
    SectionHeader,
    ItemList
  },

  mounted: function(){
    this.$store.commit('changeTitle', 'コラム')
    document.title = this.$store.getters.getTitle
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
