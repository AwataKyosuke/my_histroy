<template>
  <li>
    <router-link to="" @click.native="selected" class="own-category" v-bind:class="{ select: category.selected }">{{ category.name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'Category',

  props: [ 'category' ],

  methods:{
    selected(){
      this.$store.commit('categorySelected', this.category.name)
      this.$store.commit('filteringArticle')
    }
  }
}
</script>

<style scoped>

.search-box ul li {
  float:left;
  list-style:none;
  margin-right: 1%;
}

.own-category {
  color: darkgray;
  text-decoration: none;
}

.search-box ul li a:hover {
  color: #58b4ff;
}

.select {
  color: #58b4ff;
}

</style>
