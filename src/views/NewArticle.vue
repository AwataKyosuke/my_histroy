<template>
  <div>
    <div class="title-box">
      <input type="text" class="title-input" placeholder="タイトル" />
    </div>
    <div class="tag-category-box">

    </div>
    <div class="body-box">
      <textarea type="text" class="body-input" placeholder="本文"></textarea>
    </div>
    <div class="button-box">
      <Button :text="'戻る'" @clicked="back" />
      <Button :text="'投稿'" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {
  components: {
    Button,
  },

  data() {
    return {
      selected: null,
    }
  },

  methods: {
    back(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

.vue-simple-suggest {
  width: 100%;
}

.input-wrapper {
  width: 100%;
}

input {
  box-sizing: border-box;
  height: 30px;
  font-size: 16px;
  color: #333;
  border: solid 1px #ccc;
}

textarea {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: #333;
  border: solid 1px #ccc;
  resize: none;
}

.tag-category-box {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5% 0;
}

.tag-input {
  width: 99%;
  padding: 0;
}

.category-input {
  width: 100%;
  padding: 0;
}

.title-box {
  margin: 0 0 0.5% 0;
}

.title-input {
  width: 100%;
}

.body-box {
  height: 750px;
  margin: 0 0 0.5% 0;
}

.button-box {
  display: flex;
  justify-content: space-between;
}

</style>
