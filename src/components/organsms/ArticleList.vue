<template>
  <div class="box">
    <Item v-for="article in articles" :key="article.id" v-bind:article=article />
  </div>
</template>

<script>
import Item from '@/components/molecules/Article'

export default {
  name: 'ItemList',

  components: {
    Item
  },

  props: ['articles']
}
</script>

<style scoped>

.box {
  box-sizing: border-box;
  width: 100%;
  padding: 1% 5%;
  margin: 0 auto;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

</style>
