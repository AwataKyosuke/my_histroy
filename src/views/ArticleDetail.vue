<template>

  <div>

    <SectionHeader :title="article.title" />
    <ArticleAttributeBox :article="article" />
    <div class="article-body-box">
      <div id="preview-field" v-html="convertMarkdown" />
    </div>

    <SectionHeader title="コメント" />
    <CommentViewBox v-for="comment in getComments(article.id)" :key="comment.id" :comment="comment" />
    <p v-show="!hasComment" class="login-require">コメントはありません。</p>

    <SectionHeader title="コメントを投稿する" class="comment-header" />
    <CommentPostBox @clicked="clicked" v-show="loggedIn" />
    <p v-show="!loggedIn" class="login-require">コメントを投稿するにはログインする必要があります。</p>

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import ArticleAttributeBox from '@/components/organsms/ArticleAttributeBox'
import CommentViewBox from '@/components/organsms/CommentViewBox'
import CommentPostBox from '@/components/organsms/CommentPostBox'
import marked from 'marked';

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

  computed: {
    loggedIn(){
      return this.$store.getters.loggedIn
    },

    hasComment(){
      return this.$store.getters.getComments(this.article.id).length > 0
    },

    convertMarkdown: function() {
      return marked(this.article.body);
    }
  },

  methods: {

    getComments(articleId){
      return this.$store.state.comments.filter((x => x.articleId === articleId))
    },

    back(){
      this.$router.go(-1)
    },

    clicked(value){
      if(confirm('コメントを送信します。よろしいですか？')) {
        const addObj = { 
          id: this.newCommentId, 
          articleId: this.article.id, 
          userId: this.$store.state.loggedInUserId, 
          body: value, 
          date: this.$store.getters.getNowDate 
        }
        this.$store.commit('addComment', addObj)
        this.newCommentId += 1
      }
    },
  },

  components: {
    SectionHeader,

    ArticleAttributeBox,
    CommentViewBox,
    CommentPostBox
  },
}

</script>

<style scoped>

.article-body-box {
  margin: 0 2vw 3vh 0;
  font-size: 1vw;
}

.login-require {
  font-size: 1vw;
  margin: 1vw;
}

</style>
