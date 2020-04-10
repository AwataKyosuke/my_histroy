<template>
  <li>
    <router-link to="" @click.native="selected" class="own-tag" v-bind:class="{ select: tag.selected }">{{ tag.name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'Tag',

  props: [ 'tag' ],

  methods:{
    selected(){
      this.$store.commit('tagSelected', this.tag.name)
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

.own-tag {
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
