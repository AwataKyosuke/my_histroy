<template>
  <div>
    <div class="item" v-for="article in articles" :key="article.id">
      <h3 class="item-title"><router-link to="/">{{ article.title }}</router-link></h3>
      <p>
        <font-awesome-icon :icon="['fas', 'calendar-alt']" class="item-date-icon" />
        <span class="item-date">{{ article.date }}</span>

        <font-awesome-icon :icon="['fas', 'folder-open']" class="item-categories-icon" />
        <span class="item-categories" v-for="category in article.categories" :key="category.id">{{ category.name }}</span>

        <font-awesome-icon :icon="['fas', 'tags']" class="item-tags-icon" />
        <span class="item-tags" v-for="tag in article.tags" :key="tag.id">{{ tag.name }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      articles: [
        {
          title: 'SPAを作ってみた',
          date: '2020/04/01',
          categories: [ { name: 'Web開発' } ],
          tags: [ { name: 'Vue.js' } ]
        },
        {
          title: 'AWSにデプロイしてみた',
          date: '2020/04/02',
          categories: [ { name: 'クラウドサービス' } ],
          tags: [ { name: 'AWS' } ]
        }
      ]
    }
  }
}
</script>

<style scoped>

.item {
  border-bottom: 0.5px solid #e9eaea;
  padding-top: 3%;
}

.item-title {
  padding: 0;
  margin: 0;
}

.item-title a {
  color: black;
  text-decoration: none;
}

.item-date {
  color: darkgrey;
}

.item-date-icon {
  padding: 0 5px 1.1px 0;
  color: darkgray;
}

.item-categories {
  color: darkgray;
}

.item-categories-icon {
  padding: 0 5px 0px 0;
  color: darkgray;
  margin-left: 10%;
}

.item-tags {
  color: darkgray;
}

.item-tags-icon {
  padding: 0 5px 0px 0;
  color: darkgray;
  margin-left: 10%;
}

</style>
