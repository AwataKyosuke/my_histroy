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

.title-input {
  width: 100%;
}

.tag-category-box {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5% 0;
}

.tag-input {
  width: 49.8%;
}

.category-input {
  width: 49.8%;
}

.title-box {
  margin: 0 0 0.5% 0;
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
