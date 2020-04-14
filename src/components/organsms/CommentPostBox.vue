<template>
  <div class="comment-post-box">
    <div class="comment-post-box-body">
      <textarea class="comment-post-box-input"></textarea>
    </div>
    <div class="comment-post-box-footer">
      <Button :text="'送信'" @clicked="submit" />
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
    submit(){
      this.$emit('clicked')
    }
  }

}
</script>

<style scoped>

.comment-post-box {
  border: 0.5px solid #e9eaea;
  padding: 1%;
  margin: 1% 3% 1% 3%;
}

.comment-post-box-body {
  width: 100%;
}

.comment-post-box-input {
  font-size: 100%;
  resize: none;
  width: 99.4%;
  border-radius: 1%;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: calc( 1em * 4 );
  line-height: 1;
}

.comment-post-box-footer {
  text-align: right;
}

</style>
