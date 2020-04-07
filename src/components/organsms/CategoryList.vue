<template>
  <ul>
    <Category v-for="category in categories" :key="category.id" v-bind:category="category" />
  </ul>
</template>

<script>
import Category from '@/components/molecules/Category'

export default {
  name: 'CategoryList',

  components:{
    Category
  },

  props: [ 'categories' ]
}
</script>

<style scoped>

.search-box ul {
  width: 100%;
  overflow:hidden;zoom:1;
}


</style>
