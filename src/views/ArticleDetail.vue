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
      article: this.$store.getters.getArticle(Number(this.$route.params.id))
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

    clicked(){
      ''
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
  margin: 1% 1% 1% 3%;
}

.article-body-box {
  margin: 0 4%;
  font-size: 90%;
}

</style>
