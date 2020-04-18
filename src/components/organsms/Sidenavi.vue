<template>
  <div class="sidenavi-box">
    <div class="flex-box">
      <div class="icon-box">
        <img src="@/assets/sidenavi_icon.png" class="icon" />
      </div>
      <div class="detail-box">
        <p class="item"><font-awesome-icon :icon="['fas', 'user-circle']" class="awesome-icon fa-lg" />Kyosuke</p>
        <p class="item"><font-awesome-icon :icon="['fas', 'map-marker-alt']" class="awesome-icon fa-lg" />東京都</p>
        <p class="item"><font-awesome-icon :icon="['fas', 'birthday-cake']" class="awesome-icon fa-lg" />23歳</p>
      </div>
    </div>
    <div class="about">
      <p><a href="https://portfolio.forkwell.com/@AwataKyosuke" target="_blank">ポートフォリオ by forkwell</a></p>
      <p>
        エンジニア歴2年目です。現在はC#で開発しています。
        最近は、サーバーレスアーキテクチャやドメイン駆動開発に興味があります。
      </p>
      <div class="contact">
        <a href="https://twitter.com/wooootack" class="twitter" target=”_blank”>
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-lg" />
        </a>
        <a href="https://github.com/AwataKyosuke" class="github" target=”_blank”>
          <font-awesome-icon :icon="['fab', 'github']" class="fa-lg" />
        </a>
        <a href="#" class="email">
          <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.flex-box {
  display: flex;
  height: 110px;
}

.sidenavi-box {
  box-sizing: border-box;
  width: 100%;
  padding: 5% 5% 0 5%;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

.awesome-icon {
  margin: 0 10% 0 0;
}

.about {
  font-size: 100%;
}

.icon {
  width: 100%;
  height: 100%;
}

.icon-box {
  width: 120px;
  margin: 0 10% 0 0;
}

.detail-box {
  width: 100px;
  height: 100px;
}

.item {
  font-size: 100%;
  padding: 0;
  margin: 10% 0 10% 0;
}

.contact {
  border-top: 0.5px solid #e9eaea;
  display: flex;
  justify-content: space-around;
}

.github {
  color: black;
  margin: 5%;
}

.twitter {
  color:#55acee;
  margin: 5%;
}

.email {
  color: black;
  margin: 5%;
}

</style>
