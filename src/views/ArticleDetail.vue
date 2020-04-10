<template>

  <div>

    <SectionHeader title="それぞれのタイトルを入れる" />

    <router-link :to="{name: 'Articles'}" >一覧に戻る</router-link>

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

export default {

  components: {
    SectionHeader,
  },

  props:[ 'articleId' ],

  mounted: function(){
    this.$store.commit('changeTitle', '備忘録')
    document.title = this.$store.state.title
    }
  }
</script>

<style scoped>
</style>
