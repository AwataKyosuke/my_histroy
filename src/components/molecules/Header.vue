<template>
  <div id="nav">
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <router-link @click.native="selectedChange(0)" :to="{name: 'Home'}"><img src="@/assets/namekuji.png" /></router-link>
        </div>
        <h3 class="header-title">クソザコナメクジエンジニアの備忘録</h3>
      </div>
    </header>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.header {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.logo img {
  margin-top: 30%;
  width: 40px;
}

.header-title {
  margin: 0 3%;
  font-weight: bold;
  background: linear-gradient(transparent 75%, #ffb5ad 75%);
}

@media screen and (max-width: 480px) {
  .header-nav-list {
    display: none;
  }

  .header-nav {
    margin: 0 0 0 auto;
  }

  .header-ham {
    display: block;
  }
}
</style>
