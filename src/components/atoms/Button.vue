<template>
  <a @click="clicked" class="button">{{ text }}</a>
</template>

<script>
export default {
  props: [ 'text' ],

  methods:{
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>

.button {
  display: inline-block;
  padding: 0.4em 1.6em;
  font-size: 0.8em;
  color: #00b5ad;
  text-decoration: none;
  user-select: none;
  border: 1px #00b5ad solid;
  border-radius: 3px;
  transition: 0.4s ease;
}

.button:hover {
  color: #fff;
  background: #00b5ad;
}

</style>
