<template>
  <div class="tag-box">
    <ul>
      <Tag v-for="tag in tags" :key="tag.id" v-bind:tag="tag" @selected="selected($event)" />
    </ul>
    <div class="padding-zone"></div>
    <div class="new"><input type="text" class="add-input" v-model="name"><Button :text="'追加'" @clicked="addTag" /></div>
  </div>
</template>

<script>
import Tag from '@/components/molecules/Tag'
import Button from '@/components/atoms/Button'

export default {

  data(){
    return {
      name: ''
    }
  },

  components: {
    Tag,
    Button,
  },

  props: [ 'tags' ],

  methods: {
    addTag() {
      this.$store.commit('addTag', { id: this.$store.getters.maxTagId + 1, name: this.name, selected: true })
    },

    selected(id) {
      this.$emit('selected', id)
    }
  }
}
</script>

<style scoped>

input {
  box-sizing: border-box;
  height: 3vh;
  font-size: 0.8vw;
  color: #333;
  border: solid 1px #ccc;
}

ul {
  margin: 0;
  padding: 0;
  display: -webkit-inline-flex;
  display: inline-flex;
}

li {
  margin: 0 0.5vw 0 0;
}

.tag-box {
  display: flex;
  align-items: center;
  margin: 0 0 0.2vw 0;
}

.padding-zone {
  flex-grow: 5;
}

.add-input {
  height: 1.7vw;
}

.button {
  height: 1vw;
  padding: 0.2vw 1vw 0.35vw 1vw;
  margin: 0 0 0 0.3vw;
}

</style>
