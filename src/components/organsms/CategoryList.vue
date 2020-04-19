<template>
  <ul>
    <Category v-for="category in categories" :key="category.id" v-bind:category="category" @selected="selected($event)" />
  </ul>
</template>

<script>
import Category from '@/components/molecules/Category'

export default {
  name: 'CategoryList',

  components:{
    Category
  },

  props: [ 'categories' ],

  methods: {
    selected(id) {
      this.$emit('selected', id)
    }
  }
}
</script>

<style scoped>

ul {
  margin: 0;
  width: 100%;
  display: flex;
}


</style>
