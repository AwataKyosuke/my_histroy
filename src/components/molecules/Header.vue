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

        <div class="button-box">
          <Button :text="'新規投稿'" @clicked="newPost" v-show="loggedIn && !(getPageName === 'NewArticle')" class="button" />
          <Button :text="'編集'" @clicked="editPost" v-show="loggedIn && loginUserArticle && (getPageName === 'Article')" class="button" />
          <Button :text="'削除'" @clicked="deletePost" v-show="loggedIn && loginUserArticle && (getPageName === 'EditArticle')" class="button" />
          <Button :text="'ログアウト'" @clicked="logout" v-show="loggedIn" class="button" />

          <Button :text="'ログイン'" @clicked="openLoginModal" v-show="!loggedIn" class="button" />
          <Button :text="'新規登録'" @clicked="openCreateModal" v-show="!loggedIn" class="button" />
        </div>

      </div>

    </header>

    <modal name="login-modal" :draggable="false" :resizable="false">
      <div class="modal-header">
        <p>ログイン</p>
      </div>
      <div class="modal-body">
        <div class="login-input-box">
          <p class="label">メールアドレス</p>
          <input v-model="email" type="text" placeholder="メールアドレス" class="input">
          <p class="label">パスワード</p>
          <input v-model="password" type="password" placeholder="パスワード" class="input">
        </div>
        <p class="error" v-show="msg">{{ msg }}</p>
        <div class="button-box">
          <Button :text="'ログイン'" @clicked="login" class="button" />
        </div>
      </div>
    </modal>

    <modal name="create-modal" :draggable="false" :resizable="false">
      <div class="modal-header">
        <p>新規登録</p>
      </div>
      <div class="modal-body">
        <div class="create-input-box">
          <p class="label">名前</p>
          <input v-model="name" type="text" placeholder="名前" class="input">
          <p class="label">メールアドレス</p>
          <input v-model="email" type="text" placeholder="メールアドレス" class="input">
          <p class="label">パスワード</p>
          <input v-model="password" type="password" placeholder="パスワード" class="input">
        </div>
        <p class="error" v-show="msg">{{ msg }}</p>
        <div class="button-box">
          <Button :text="'新規登録'" @clicked="create" class="button" />
        </div>
      </div>
    </modal>

  </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {

  data(){
    return {
      name: '',
      email: '',
      password: '',
      msg: ''
    }
  },

  components:{
    Button,
  },

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },

    loginUserArticle() {
      const article = this.$store.getters.getArticle(this.$route.params['id'])
      if (article == null) {
        return false
      }
      return article.userId === this.$store.state.loggedInUserId
    },

    getPageName(){
      return this.$route.name
    },
  },

  methods: {

    newPost(){
      this.$router.push({ name: 'NewArticle' })
    },

    editPost(){
      this.$router.push({ name: 'EditArticle', params: { id: this.$route.params['id'] }})
    },

    deletePost(){
      if(confirm('記事を削除します。よろしいですか？')) {
        this.$store.commit('deleteArticle', this.$route.params['id'])
        this.$router.push({ name: 'Home' })
      }
    },

    openLoginModal() {
      this.clear()
      this.$modal.show('login-modal');
    },

    openCreateModal() {
      this.clear()
      this.$modal.show('create-modal')
    },

    login() {
      if (!this.email.length > 0) {
        this.msg = 'メールアドレスを入力してください。'
        return
      }

      if (!this.password.length > 0) {
        this.msg = 'パスワードを入力してください。'
        return
      }

      const userInfo = {
        email: this.email,
        password: this.password
      }

      const user = this.$store.getters.getUser(userInfo)

      if (!user) {
        this.msg = 'メールアドレスもしくはパスワードが間違っています。'
        return
      }

      this.$store.commit('login', user.id)

      this.msg = ''
      this.$modal.hide('login-modal');
    },

    logout(){
      if(confirm('ログアウトします。よろしいですか？')) {
        this.$store.commit('logout')
        this.$router.push({ name: 'Home' })
      }
    },

    create(){

      if (!this.name.length > 0){
        this.msg = '名前を入力してください。'
        return
      }

      if (!this.email.length > 0) {
        this.msg = 'メールアドレスを入力してください。'
        return
      }

      if (!this.password.length > 0) {
        this.msg = 'パスワードを入力してください。'
        return
      }

      const userInfo = {
        id: this.$store.getters.maxUserId + 1,
        email: this.email,
        password: this.password,
        name: this.name,
      }

      this.$store.commit('addUser', userInfo)
      this.$store.commit('login', userInfo.id)

      this.msg = ''
      this.$modal.hide('create-modal');
    },

    clear() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.msg = ''
    },

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

.button-box {
  align-self: center;
}

.button {
  margin: 0 0 0 0.5vw;
}

.modal-header {
  padding: 5px 25px;
}

.modal-header {
  border-bottom: 1px solid #ddd;
}

.modal-body {
  padding: 5px 25px;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.login-input-box {
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin: 2.5vh 0 0 0;
}

.create-input-box {
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin: 1vh 0 0 0;
}

.label {
  display: inline-flex;
  width: 50%;
  height: 2vh;
  margin: 0 auto;
  font-size: 0.9vw;
}

.input {
  display: inline-flex;
  box-sizing: border-box;
  width: 50%;
  height: 3vh;
  padding: 0 0.5vw;
  margin: 0 auto 0.5vh auto;
  font-size: 0.7vw;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 0.5vw;
  outline: 0;
  transition: 0.3s;
  -webkit-appearance: none;
}

.button-box {
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  margin: 1vh 0 0 0;
}

.button {
  display: inline-flex;
}

.error {
  font-size: 0.9vw;
  color: red;
  margin: 0 auto;
}

</style>
