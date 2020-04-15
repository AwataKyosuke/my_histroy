<template>
  <div>
    <div class="title-box">
      <input type="text" class="title-input" placeholder="タイトル" />
    </div>
    <div class="tag-category-box">
      <input type="text" class="tag-input" placeholder="タグ" />
      <input type="text" class="category-input" placeholder="カテゴリ" />
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
    Button
  },

  methods: {
    back(){
      this.$router.go(-1)
    }
  },

  mounted: function(){
    this.$store.commit('changeTitle', '新規投稿')
    document.title = this.$store.state.title
  }
}
</script>

<style scoped>

input {
  box-sizing: border-box;
  height: 30px;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
}

textarea {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
  resize: none;
}

.title-input {
  width: 100%;
}

.tag-input {
  width: 50%;
}

.category-input {
  width: 50%;
}

.title-box {
  margin: 0 0 0.5% 0;
}

.tag-category-box {
  margin: 0 0 0.5% 0;
}

.body-box {
  height: 700px;
  margin: 0 0 0.5% 0;
}

.button-box {
  display: flex;
  justify-content: space-between;
}

</style>
