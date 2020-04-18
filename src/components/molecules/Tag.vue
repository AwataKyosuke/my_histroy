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

li {
  float:left;
  list-style:none;
  margin-right: 1%;
}

.own-tag {
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
