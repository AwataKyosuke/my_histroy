<template>
  <div id="nav">

    <header class="header">

      <div class="header-inner">

        <div class="logo-and-title-box">
          <router-link :to="{name: 'Home'}" class="logo-box">
            <img src="@/assets/namekuji.png" class="logo" />
          </router-link>
          <p class="title">クソザコナメクジエンジニアの備忘録</p>
        </div>

        <div class="new-article-button-box">
          <Button :text="'備忘録を投稿する'" @clicked="newPost" />
        </div>

      </div>

    </header>

  </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {

  components:{
    Button,
  },

  methods: {
    newPost(){
      this.$router.push({ name: 'NewArticle' })
    }
  },

};
</script>

<style scoped>

.header {
  box-sizing: border-box;
  width: 100%;
  margin: 1% 0 1% 0;
}

.header-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 0.8em;
  font-size: 1.2em;
}

.logo-box {
  display: block;
  width: 1.8vw;
  margin: 0 1% 0 0;
}

.title {
  font-size: 1.2vw;
  margin: 0;
}

.logo {
  vertical-align: bottom;
  height: 100%;
  width: 100%;
}

.logo-and-title-box {
  display: flex;
  align-items: flex-end;
  width: 23vw;
  font-weight: bold;
  background: linear-gradient(transparent 75%, #ffb5ad 75%);
}

.new-article-button-box {
  align-self: center;
}

</style>
