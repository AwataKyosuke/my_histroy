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

    <AddCategory :categories="categories" v-show="categoriesOpen" />

    <AddTag :tags="tags" v-show="tagsOpen" />

    <div class="body-box">
      <textarea type="text" class="body-input" placeholder="本文" v-model="body" ></textarea>
    </div>

    <div class="button-box">
      <Button :text="'戻る'" @clicked="back" />
      <Button :text="'投稿'" @clicked="addArticle" />
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
      selected: null,
      categories: this.$store.state.categories,
      tags: this.$store.state.tags,
      categoriesOpen: false,
      tagsOpen: false,
      title: '',
      body: '',
    }
  },

  methods: {
    back(){
      this.$router.go(-1)
    },

    addArticle() {
      this.$store.commit('addArticle',
        {
          id: this.$store.getters.maxArticleId + 1,
          categoryId: this.categories.filter(x => x.selected === true).map(x => x.id),
          tagId: this.tags.filter(x => x.selected === true).map(x => x.id),
          userId: 5,
          title: this.title,
          body: this.body,
          date: '2020/4/18'
        }
      )
    },

    openCategory(){
      this.categoriesOpen = !this.categoriesOpen
    },

    openTag(){
      this.tagsOpen = !this.tagsOpen
    }
  },
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
  justify-content: space-between;
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
