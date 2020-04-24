<template>
  <div>
    <div class="title-box">
      <input type="text" class="title-input" placeholder="タイトル" v-model="title" />
    </div>

    <div class="add-box">
      <router-link to="" @click.native="openCategory" class="add-category">
        カテゴリを編集 
        <font-awesome-icon :icon="['fas', 'chevron-up']" v-show="categoriesOpen" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" v-show="!categoriesOpen" />
      </router-link>

      <router-link to="" @click.native="openTag" class="add-tag">
        タグを編集 
        <font-awesome-icon :icon="['fas', 'chevron-up']" v-show="tagsOpen" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" v-show="!tagsOpen" />
      </router-link>
    </div>

    <AddCategory :categories="categories" v-show="categoriesOpen" @selected="categorySelected($event)" />

    <AddTag :tags="tags" v-show="tagsOpen" @selected="tagSelected($event)" />

    <div class="body-box">
      <textarea type="text" class="body-input" placeholder="本文" v-model="body" ></textarea>
    </div>

    <div class="button-box">
      <Button :text="'編集'" @clicked="updateArticle" />
    </div>

  </div>
</template>

<script>
import AddCategory from '@/components/organsms/AddCategory'
import AddTag from '@/components/organsms/AddTag'
import Button from '@/components/atoms/Button'

export default {
  components: {
    AddTag,
    AddCategory,
    Button,
  },

  data() {
    return {
      article: this.$store.getters.getArticle(Number(this.$route.params['id'])),
      categories: this.$store.state.categories,
      tags: this.$store.state.tags,
      categoriesOpen: false,
      tagsOpen: false,
      title: '',
      body: '',
    }
  },

  methods: {

    updateArticle() {
      if(confirm('記事を編集します。よろしいですか？')) {
        this.$store.commit('updateArticle',
          {
            id: this.$route.params['id'],
            categoryId: this.categories.filter(x => x.selected === true).map(x => x.id),
            tagId: this.tags.filter(x => x.selected === true).map(x => x.id),
            userId: this.$store.state.loggedInUserId,
            title: this.title,
            body: this.body,
            date: this.$store.getters.getNowDate
          }
        )
        this.$router.push({ name: 'Home' })
      }
    },

    openCategory(){
      this.categoriesOpen = !this.categoriesOpen
    },

    openTag(){
      this.tagsOpen = !this.tagsOpen
    },

    categorySelected(id){
      const status = this.categories.find(x => x.id === id)
      status.selected = !status.selected
    },

    tagSelected(id){
      const status = this.tags.find(x => x.id === id)
      status.selected = !status.selected
    }
  },

  mounted: function() {
    this.title = this.article.title
    this.body = this.article.body
    this.$store.commit('selectedTag', this.article.tagId)
    this.$store.commit('selectedCategory', this.article.categoryId)
  }
}
</script>

<style scoped>

input {
  box-sizing: border-box;
  height: 3vh;
  font-size: 0.8vw;
  color: #333;
  border: solid 1px #ccc;
}

textarea {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-size: 0.8vw;
  color: #333;
  border: solid 1px #ccc;
  resize: none;
}

a {
  display: block;
  color: black;
  text-decoration: none;
  font-size: 0.9vw;
  margin: 0;
}

.tag-category-box {
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5% 0;
}

.tag-input {
  width: 99%;
  padding: 0;
}

.category-input {
  width: 100%;
  padding: 0;
}

.title-box {
  margin: 0 0 0.3vh 0;
}

.title-input {
  width: 100%;
}

.body-box {
  height: 80vh;
  margin: 0 0 0.3vw 0;
}

.button-box {
  display: flex;
  justify-content: center;
}

.add-box {
  display: flex;
}

.add-category {
  margin: 0 1vw 0 0.2vw;
}

.add-tag {
  margin: 0 1vw 0 0.2vw;
}

</style>
