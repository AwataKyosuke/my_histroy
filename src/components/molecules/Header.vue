<template>
  <div id="nav">

    <header class="header">

      <div class="header-inner">

        <div class="header-title">
          <div class="logo-box">
            <router-link :to="{name: 'Home'}" class="home-link">
              <img src="@/assets/namekuji.png" class="logo" />
            </router-link>
          </div>
          クソザコナメクジエンジニアの備忘録
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
  height: 40px;
  width: 40px;
  margin: 0 1% 0 0;
}

.logo {
  height: 40px;
  width: 40px;
}

.header-title {
  display: flex;
  align-items: flex-end;
  width: 375px;
  font-weight: bold;
  background: linear-gradient(transparent 75%, #ffb5ad 75%);
}

</style>
