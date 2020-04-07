<template>

  <div>

    <SectionHeader title="業務経歴" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

export default {
  components: {
    SectionHeader
  },

  mounted: function(){
    this.$store.commit('changeTitle', '業務経歴')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>
</style>
