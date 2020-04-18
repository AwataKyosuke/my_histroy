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
  padding: 0.5vh 1.5vw;
  font-size: 0.8vw;
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: #00b5ad;
  border: 1px #00b5ad solid;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  transition: 0.2s ease;
}

.button:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

</style>
