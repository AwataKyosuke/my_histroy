<template>

  <div>

    <SectionHeader :title="article.title" />

    <div class="article-attribute-box">
      <div class="tag-category-box">
        <a v-for="tag in article.tagId" :key="tag.id" class="tag-category">{{ getTagName(tag) }}</a>
        <a v-for="category in article.categoryId" :key="category.id" class="tag-category">{{ getCategoryName(category) }}</a>
      </div>
      <div class="user-post-date-box">
        <span class="user-name">投稿者：{{ getUser(article.userId) }}</span>
        <span class="post-date">投稿日：{{ article.date }}</span>
      </div>
    </div>

    <div class="article-body-box">
      <p>{{ article.body }}</p>
    </div>

    <SectionHeader title="コメント" />

    <div v-for="comment in getComments(article.id)" :key="comment.id" class="comment-view-box">
      <p class="comment-text">{{ comment.body }}</p>
      <span class="user-name">投稿者：{{ getUser(comment.userId) }}</span>
      <span class="post-date">投稿日：{{ comment.date }}</span>
    </div>

    <SubHeader :text="'コメントを投稿する'" class="comment-header" />

    <div class="comment-post-box">
      <div class="comment-post-box-body">
        <textarea class="comment-post-box-input"></textarea>
      </div>
      <div class="comment-post-box-footer">
        <Button :text="'送信'" @clicked="submit" />
      </div>
    </div>

  <Button class="back-wrapper" @clicked="back" :text="'戻る'" />

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'
import SubHeader from '@/components/atoms/SubHeader'
import Button from '@/components/atoms/Button'

export default {

  data(){
    return {
      article: null
    }
  },

  created() {
    this.article = this.$store.getters.getArticle(this.$route.params.id)
  },

  methods: {

    getTagName(tagId){
      return this.$store.state.tags.filter((x => x.id === tagId))[0].name
    },

    getCategoryName(categoryId){
      return this.$store.state.categories.filter((x => x.id === categoryId))[0].name
    },

    getComments(articleId){
      return this.$store.state.comments.filter((x => x.articleId === articleId))
    },

    getUser(userId){
      return this.$store.state.users.filter((x => x.id === userId))[0].name
    },

    back(){
      this.$router.go(-1)
    },

    submit(){
      console.log('submit')
    }
  },

  components: {
    SectionHeader,
    SubHeader,
    Button
  },

  mounted: function(){
    this.$store.commit('changeTitle', '備忘録')
    document.title = this.$store.state.title
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

.back-wrapper {
  margin: 1% 1% 1% 3%;
}

.tag-category {
  display: inline-block;
  padding: 0.5% 1%;
  margin-right: 1%;
  font-size: 70%;
  color: #555;
  text-decoration: none;
  user-select: none;
  border: 1px solid #aaa;
}

.user-post-date-box {
  color: #555;
  font-size: 70%;
  text-align: right;
}

.comment-view-box {
  border-bottom: 0.5px solid #e9eaea;
  padding: 1%;
  margin: 0 3%;
  color: #555;
  font-size: 70%;
  text-align: right;
}

.user-name {
  margin: 0% 3%;
}

.comment-text {
  text-align: left;
  font-size: 120%;
  margin: 0;
}

.comment-header {
  margin: 5% 0% 0% 3%;
}

.article-body-box {
  margin: 2%;
  font-size: 90%;
}

</style>
