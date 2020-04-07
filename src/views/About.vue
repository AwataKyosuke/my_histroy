<template>

  <div>

    <SectionHeader title="自己紹介" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

export default {
  components: {
    SectionHeader
  },

  mounted: function(){
    this.$store.commit('changeTitle', '自己紹介')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>
</style>
