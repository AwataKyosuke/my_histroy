<template>
  <div class="comment-post-box">
    <div class="comment-post-box-body">
      <textarea class="comment-post-box-input" v-model="inputComment" placeholder="コメントを入力してください"></textarea>
    </div>
    <div class="comment-post-box-footer">
      <p class="error">
        {{ message }}
      </p>
      <Button :text="'送信'" @clicked="submit" class="submit-button" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {

  data(){
    return{
      comment: '',
      message: ''
    }
  },

  components: {
    Button
  },

  computed: {
    inputComment: {
      get() {
        return this.comment
      },
      set(value) {
        this.comment = value
      }
    }
  },

  methods: {
    submit(){
      if (this.comment.length === 0){
        this.message = 'コメントを入力してください。'
        return
      }

      this.message = ''

      if(confirm('コメントを送信します。よろしいですか？')) {
        this.$emit('clicked', this.comment)
        this.comment = ''
      }
    }
  }

}
</script>

<style scoped>

.comment-post-box {
  border: 0.1px solid #e9eaea;
  padding: 0.5vw;
  margin: 0 2vw 0 2vw;
}

.comment-post-box-body {
  width: 100%;
}

.comment-post-box-input {
  box-sizing: border-box;
  margin: 0;
  font-size: 0.7vw;
  outline: 0;
  resize: none;
  width: 99.4%;
  border-radius: 1%;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: calc( 0.75vw * 6 );
  line-height: 1;
}

.comment-post-box-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error {
  padding: 0;
  margin: 0;
  font-size: 1vw;
  color: red;
}

</style>
