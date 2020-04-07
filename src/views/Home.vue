<template>

  <div>

    <SectionHeader title="ようこそ" />

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
    document.title = this.$store.state.title  
    }
  }
</script>

<style scoped>
</style>
