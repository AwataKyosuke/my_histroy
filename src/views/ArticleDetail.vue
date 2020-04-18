<template>

  <div>

    <SectionHeader :title="article.title" />
    <ArticleAttributeBox :article="article" />
    <div class="article-body-box">
      <p>{{ article.body }}</p>
    </div>

    <SectionHeader title="コメント" />
    <CommentViewBox v-for="comment in getComments(article.id)" :key="comment.id" :comment="comment" />

    <SubHeader :text="'コメントを投稿する'" class="comment-header" />
    <CommentPostBox @clicked="clicked" />

  <Button class="back-wrapper" @clicked="back" :text="'戻る'" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import SubHeader from '@/components/atoms/SubHeader'
import Button from '@/components/atoms/Button'
import ArticleAttributeBox from '@/components/organsms/ArticleAttributeBox'
import CommentViewBox from '@/components/organsms/CommentViewBox'
import CommentPostBox from '@/components/organsms/CommentPostBox'

export default {

  data(){
    return {
      article: this.$store.getters.getArticle(Number(this.$route.params.id)),
      newCommentId: this.$store.getters.maxCommentId + 1
    }
  },

  mounted: function() {
    document.title = this.article.title
  },

  methods: {

    getComments(articleId){
      return this.$store.state.comments.filter((x => x.articleId === articleId))
    },

    back(){
      this.$router.go(-1)
    },

    clicked(value){
      this.$store.commit('addComment', { id: this.newCommentId, articleId: this.article.id, userId: 5, body: value, date: '2020/4/18' })
      this.newCommentId += 1
    },
  },

  components: {
    SectionHeader,
    SubHeader,
    Button,
    ArticleAttributeBox,
    CommentViewBox,
    CommentPostBox
  },
}

</script>

<style scoped>

.back-wrapper {
  margin: 1vh 1vw 1vh 2vw;
}

.article-body-box {
  margin: 0 2vw;
  font-size: 0.8vw;
}

</style>
