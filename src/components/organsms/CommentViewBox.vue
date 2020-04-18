<template>
  <div class="comment-view-box">
    <p class="comment-text">{{ comment.body }}</p>
    <span class="user-name">投稿者 {{ getUser(comment.userId) }}</span>
    <span class="post-date">投稿日 {{ comment.date }}</span>
  </div>
</template>

<script>
export default {

  props: [ 'comment' ],

  methods: {

    getUser(userId){
      return this.$store.state.users.filter((x => x.id === userId))[0].name
    },

  },
}
</script>

<style scoped>

.comment-view-box {
  border-bottom: 0.5px solid #e9eaea;
  padding: 0.5vw;
  margin: 0 2vw;
  color: #555;
  font-size: 0.7vw;
  text-align: right;
}

.comment-text {
  text-align: left;
  font-size: 0.75vw;
  margin: 0;
}

.user-name {
  margin: 0% 1vw;
}

</style>
