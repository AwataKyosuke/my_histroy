<template>
  <div class="about">
    <div class="card-5">
      <h3>タイトル</h3>
      <p>説明</p>
      <div class="contact">
        <a href="https://twitter.com/wooootack" class="twitter" target=”_blank”>
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-lg" />
        </a>
        <a href="https://github.com/AwataKyosuke" class="github" target=”_blank”>
          <font-awesome-icon :icon="['fab', 'github']" class="fa-lg" />
        </a>
        <a href="/" class="email" target="_blank">
          <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card-5 {
  box-sizing: border-box;
  width: 100%;
  padding: 5% 5%;
  margin: 0 auto;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

.contact {
  border-top: 0.5px solid #e9eaea;
  padding-top: 3%;

  text-align: center;
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
