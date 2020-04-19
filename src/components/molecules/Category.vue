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
      this.$emit('selected', this.category.id)
    }
  }
}
</script>

<style scoped>

li {
  list-style:none;
  margin-right: 1%;
}

.own-category {
  font-size: 0.8vw;
  color: darkgray;
  text-decoration: none;
}

a:hover {
  color: #58b4ff;
}

.select {
  color: #58b4ff;
}

</style>
