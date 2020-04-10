<template>

  <div>

    <SectionHeader title="ようこそ" />
    <p>製作中です！乞うご期待！</p>

    <SectionHeader title="最新コラム" />

    <ArticleList v-bind:articles="articles" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import ArticleList from '@/components/organsms/ArticleList'

export default {

  data(){
    return{
      articles: this.$store.state.filteredArticles
    }
  },

  components: {
    SectionHeader,
    ArticleList
  },

  mounted: function(){
    this.$store.commit('changeTitle', 'ホーム')
    document.title = this.$store.state.title  
    }
  }
</script>

<style scoped>
</style>
