<template>

  <div>

    <SectionHeader :title="article.title" />

    <div>
      <p>{{ article.body }}</p>
    </div>
    
    <SectionHeader title="コメント" />

    <a @click="back" class="back">戻る</a>

  </div>

</template>

<script>
import SectionHeader from '@/components/atoms/SectionHeader'

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
    back(){
      this.$router.go(-1)
    }
  },

  components: {
    SectionHeader,
  },

  mounted: function(){
    this.$store.commit('changeTitle', '備忘録')
    document.title = this.$store.state.title
    }
  }
</script>

<style scoped>

.back {
  padding: 0em 0em;
  margin: 0 1em;
  font-size: 20px;
  color: darkgray;
  text-align: center;
  text-decoration: none;
}

.back:hover {
  cursor : pointer;
  color: #58b4ff;
}

</style>
