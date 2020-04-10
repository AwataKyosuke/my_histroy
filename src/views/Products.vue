<template>

  <div>

    <SectionHeader title="成果物" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

export default {
  components: {
    SectionHeader
  },

  mounted: function(){
    this.$store.commit('changeTitle', '成果物')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>
</style>
