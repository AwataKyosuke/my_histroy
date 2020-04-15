<template>
  <ul>
    <Tag v-for="tag in tags" :key="tag.id" v-bind:tag="tag" />
  </ul>
</template>

<script>
import Tag from '@/components/molecules/Tag'

export default {
  name: 'TagList',

  components: {
    Tag
  },

  props:[ 'tags' ]
}
</script>

<style scoped>

ul {
  margin: 0;
  width: 100%;
  overflow:hidden;zoom:1;
}

</style>
