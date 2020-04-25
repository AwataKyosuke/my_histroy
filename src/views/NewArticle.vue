<template>
  <div>

    <div class="title-box">
      <input type="text" class="title-input" placeholder="タイトル" v-model="title" />
    </div>

    <div class="add-box">
      <router-link to="" @click.native="openCategory" class="add-category">
        カテゴリを追加 
        <font-awesome-icon :icon="['fas', 'chevron-up']" v-show="categoriesOpen" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" v-show="!categoriesOpen" />
      </router-link>

      <router-link to="" @click.native="openTag" class="add-tag">
        タグを追加 
        <font-awesome-icon :icon="['fas', 'chevron-up']" v-show="tagsOpen" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" v-show="!tagsOpen" />
      </router-link>
    </div>

    <AddCategory :categories="categories" v-show="categoriesOpen" @selected="categorySelected($event)" />

    <AddTag :tags="tags" v-show="tagsOpen" @selected="tagSelected($event)" />

    <div class="body-box">
      <div class="body-input-box" id="input-field-wrapper">
        <textarea class="textarea" id="input-field" v-model="body" placeholder="マークダウン記法で入力可能です" />
      </div>
      <div class="body-preview" id="preview-field-wrapper">
        <div id="preview-field" v-html="convertMarkdown" />
      </div>
    </div>

    <p class="error">
      {{ message }}
    </p>

    <div class="button-box">
      <Button :text="'投稿'" @clicked="addArticle" />
    </div>

  </div>
</template>

<script>
import AddCategory from '@/components/organsms/AddCategory'
import AddTag from '@/components/organsms/AddTag'
import Button from '@/components/atoms/Button'
import marked from 'marked';

export default {

  components: {
    AddTag,
    AddCategory,
    Button,
  },

  data: function() {
    return {
      selected: null,
      categories: this.$store.state.categories,
      tags: this.$store.state.tags,
      categoriesOpen: false,
      tagsOpen: false,
      title: '',
      body: '',
      message: ''
    }
  },

  computed: {
    convertMarkdown: function() {
      return marked(this.body);
    }
  },

  methods: {

    addArticle() {
      if (this.title.length === 0) {
        this.message = 'タイトルを入力してください'
        return
      }

      if (this.body.length === 0) {
        this.message = '本文を入力してください'
        return
      }

      this.message = ''

      if(confirm('記事を投稿します。よろしいですか？')) {
        this.$store.commit('addArticle',
          {
            id: this.$store.getters.maxArticleId + 1,
            categoryId: this.categories.filter(x => x.selected === true).map(x => x.id),
            tagId: this.tags.filter(x => x.selected === true).map(x => x.id),
            userId: this.$store.state.loggedInUserId,
            title: this.title,
            body: this.body,
            date: this.$store.getters.getNowDate
          }
        )
        this.$router.push({ name: 'Home' })
        this.title = ''
        this.body = ''
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
    this.$store.commit('clear')
  }
}
</script>

<style scoped>

.body-box {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  height: 80vh;
  margin: 0 0 0.5vh 0;
}

.body-input-box {
  width: 50%;
}

.body-preview {
  overflow-wrap: break-word;
  overflow: scroll;
  width: 50%;
  border: solid 0.5px lightgray;
}

.title-box {
  margin: 0 0 0.3vh 0;
}

.title-input {
  box-sizing: border-box;
  height: 3vh;
  font-size: 0.8vw;
  color: #333;
  border: solid 1px #ccc;
  width: 100%;
}

a {
  display: block;
  color: black;
  text-decoration: none;
  font-size: 0.9vw;
  margin: 0;
}

.textarea {
  box-sizing: border-box;
  font-size: 0.8vw;
  width: 100%;
  height: 100%;
  color: #333;
  border: solid 1px #ccc;
  resize: none;
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

.button-box {
  display: flex;
  justify-content: center;
}

.error {
  text-align: center;
  padding: 0;
  margin: 0 0 0.5vh 0;
  font-size: 1vw;
  color: red;
}

</style>
