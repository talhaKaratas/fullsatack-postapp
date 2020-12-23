<template>
  <div class="login">
    <div class="enter__card">
      <div class="enterCard__title">
        <h1>Giriş Yap</h1>
      </div>
      <div class="enterCard__body">
        <form class="enter__form">
          <div class="from__group">
            <label for="loginEmail">Eposta: </label>
            <input type="email" id="loginEmail" v-model="user.email" />
          </div>
          <div class="from__group">
            <label for="loginPassword">Şifre: </label>
            <input type="password" id="loginPassword" v-model="user.password" />
          </div>
          <div class="error__message" v-if="getErrorMessage">
            <p>{{ getErrorMessage }}</p>
          </div>
          <button class="btn btn-success" @click.prevent="login">
            Giriş Yap
          </button>
        </form>
      </div>
      <div class="enterCard__footer">
        <p>
          Hesabınız yok mu?
          <strong @click="$router.push('/register')">Kayıt Olun</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user).then(() => {
        this.$router.push('/')
      })
    }
  },

  computed: {
    ...mapGetters(['getErrorMessage'])
  }
}
</script>

<style></style>
