<template>
  <ul>
    <Tag v-for="tag in tags" :key="tag.id" v-bind:tag="tag" @selected="selected($event)" />
  </ul>
</template>

<script>
import Tag from '@/components/molecules/Tag'

export default {
  name: 'TagList',

  components: {
    Tag
  },

  props:[ 'tags' ],

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
