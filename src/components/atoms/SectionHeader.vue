<template>
  <p class="section-header">{{ title }}</p>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.section-header {
  padding-left: 0.7vw;
  margin: 0.5vh;
  font-size: 1vw;
  font-weight: bold;
  color: #333;
  border-left: 0.3vw solid #00b5ad;
}
</style>
