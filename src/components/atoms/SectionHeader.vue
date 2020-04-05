<template>
  <h2 class="section-header">{{ title }}</h2>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.section-header {
  padding-left: 0.5em;
  font-size: 1.5em;
  color: #333;
  border-left: 4px solid #00b5ad;
}
</style>
