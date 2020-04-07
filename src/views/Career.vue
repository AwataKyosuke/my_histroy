<template>

  <div>

    <SectionHeader title="キャリアパス" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

export default {
  components: {
    SectionHeader
  },

  mounted: function(){
    this.$store.commit('changeTitle', 'キャリアパス')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>
</style>
