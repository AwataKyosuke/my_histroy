<template>
  <div class="article-attribute-box">
    <div class="tag-category-box">
      <a v-for="tag in article.tagId" :key="tag.id" class="tag-category">{{ getTagName(tag) }}</a>
      <a v-for="category in article.categoryId" :key="category.id" class="tag-category">{{ getCategoryName(category) }}</a>
    </div>
    <div class="user-post-date-box">
      <span class="user-name">投稿者 {{ getUser(article.userId) }}</span>
      <span class="post-date">投稿日 {{ article.date }}</span>
    </div>
  </div>
</template>

<script>
export default {

  props: [ 'article' ],

  methods: {

    getTagName(tagId){
      return this.$store.state.tags.filter((x => x.id === tagId))[0].name
    },

    getCategoryName(categoryId){
      return this.$store.state.categories.filter((x => x.id === categoryId))[0].name
    },

    getUser(userId){
      return this.$store.state.users.filter((x => x.id === userId))[0].name
    },

  },

}
</script>

<style scoped>

.article-attribute-box {
  padding: 0.5vw;
  margin: 0 2vw 0 1vw;
}

.tag-category {
  display: inline-block;
  padding: 0.3vh 0.5vw;
  margin-right: 0.7vw;
  font-size: 0.5vw;
  color: #555;
  text-decoration: none;
  user-select: none;
  border: 1px solid #aaa;
}

.user-post-date-box {
  color: #555;
  font-size: 0.7vw;
  text-align: right;
}

.user-name {
  margin: 0% 1vw;
}


</style>
