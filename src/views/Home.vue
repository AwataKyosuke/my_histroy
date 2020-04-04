<template>
  <div class="home">
    <h2 class="page-title">このブログについて</h2>
    <p>自分の自己紹介、今までの業務経歴、今後の目標、メモがわり的なコラムを投稿できるようなブログを作りたいなーと</p>

    <div class="box">

      <div class="item">
        <h3 class="item-title"><router-link to="/">記事タイトル</router-link></h3>
        <p>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="item-date-icon" />
          <span class="item-date">2020/04/20</span>

          <font-awesome-icon :icon="['fas', 'folder-open']" class="item-categories-icon" />
          <span class="item-categories">カテゴリ</span>

          <font-awesome-icon :icon="['fas', 'tags']" class="item-tags-icon" />
          <span class="item-tags">タグ</span></p>
      </div>

      <div class="item">
        <h3 class="item-title"><router-link to="/">記事タイトル</router-link></h3>
        <p>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="item-date-icon" />
          <span class="item-date">2020/04/20</span>

          <font-awesome-icon :icon="['fas', 'folder-open']" class="item-categories-icon" />
          <span class="item-categories">カテゴリ</span>

          <font-awesome-icon :icon="['fas', 'tags']" class="item-tags-icon" />
          <span class="item-tags">タグ</span></p>
      </div>

    </div>
  </div>
</template>

<style scoped>

.page-title {
  padding-left: 0.5em;
  font-size: 1.5em;
  color: #333;
  border-left: 4px solid #00b5ad;
}

.box {
  box-sizing: border-box;
  width: 100%;
  padding: 1% 5%;
  margin: 0 auto;
  border: 0.5px solid #e9eaea;
  border-radius: 3px;
  transition: 0.3s;
}

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
