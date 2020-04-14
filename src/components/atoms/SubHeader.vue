<template>
  <h4 class="sub-header">{{ text }}</h4>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.sub-header {
  margin: 1% 0%;
  padding-left: 0.5em;
  color: #333;
  border-left: 4px solid #00b5ad;
}
</style>
