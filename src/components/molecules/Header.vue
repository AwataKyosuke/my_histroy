<template>
  <div id="nav">
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <router-link @click.native="selectedChange(0)" to="/"><img src="@/assets/namekuji.png" /></router-link>
        </div>
        <h3 class="header-title">クソザコナメクジエンジニアの備忘録</h3>
        <nav class="header-nav">
          <ul class="header-nav-list">
            <router-link class="header-nav-item" v-bind:class="{ select: getSelectedIndex === 0 }" @click.native="selectedChange(0)" to="/">ホーム</router-link>
            <router-link class="header-nav-item" v-bind:class="{ select: getSelectedIndex === 1 }" @click.native="selectedChange(1)" to="/about">自己紹介</router-link>
            <router-link class="header-nav-item" v-bind:class="{ select: getSelectedIndex === 2 }" @click.native="selectedChange(2)" to="/experience">業務経歴</router-link>
            <router-link class="header-nav-item" v-bind:class="{ select: getSelectedIndex === 3 }" @click.native="selectedChange(3)" to="/career">キャリアパス</router-link>
            <router-link class="header-nav-item" v-bind:class="{ select: getSelectedIndex === 4 }" @click.native="selectedChange(4)" to="/column">コラム</router-link>
          </ul>
        </nav>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0
    };
  },
  computed: {
    getSelectedIndex(){
      return this.selectedIndex
    },
  },
  methods: {
    selectedChange(val) {
      this.selectedIndex = val;
    }
  }
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

.header-nav {
  margin-left: auto;
}

.header-nav-list {
  margin-top: 8%;
  display: inline-block;
}

.header-nav-item {
  float: left;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  list-style: none;
}

.select {
  color: #444;
}

.header-nav-item:hover {
  background: #eee;
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
