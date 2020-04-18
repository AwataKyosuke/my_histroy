<template>
  <div class="box">
    <Item v-for="article in articles" :key="article.id" v-bind:article=article />
  </div>
</template>

<script>
import Item from '@/components/molecules/ArticleTitle'

export default {
  name: 'ArticleList',

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
  padding: 1vh 2vw 1vh 2vw;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

</style>
