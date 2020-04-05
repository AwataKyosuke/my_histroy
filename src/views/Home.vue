<template>
  <div class="home">
    <SectionHeader title="ようこそ" />

    <p></p>

    <SectionHeader title="最新コラム" />

    <ItemList />

  </div>
</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import ItemList from '@/components/organsms/ItemList'

export default {
  components: {
    SectionHeader,
    ItemList
  },

  mounted: function(){
    this.$store.commit('changeTitle', 'ホーム')
    document.title = this.$store.getters.getTitle
  }
}
</script>

<style scoped>
</style>
