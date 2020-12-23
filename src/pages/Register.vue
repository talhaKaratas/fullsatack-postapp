<template>
  <div class="register">
    <div class="enter__card">
      <div class="enterCard__title">
        <h1>Kayıt Ol</h1>
      </div>
      <div class="enterCard__body">
        <form class="enter__form">
          <div class="from__group">
            <label for="registerName">Ad: </label>
            <input type="text" id="registerName" v-model="user.name" />
          </div>
          <div class="from__group">
            <label for="registerEmail">Eposta: </label>
            <input type="email" id="registerEmail" v-model="user.email" />
          </div>
          <div class="from__group">
            <label for="registerPassword">Şifre: </label>
            <input
              type="password"
              id="registerPassword"
              v-model="user.password"
            />
          </div>
          <div class="error__message" v-if="getErrorMessage">
            <p>{{ getErrorMessage }}</p>
          </div>
          <button class="btn btn-primary" @click.prevent="register">
            Kayıt Ol
          </button>
        </form>
      </div>
      <div class="enterCard__footer">
        <p>
          Zaten bir hesabınız var mı?
          <strong @click="$router.push('/Login')">Giriş Yapın</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      axios
        .post(' http://localhost:3000/api/user/register', this.user)
        .then(() => {
          this.$store
            .dispatch('login', {
              email: this.user.email,
              password: this.user.password
            })
            .then(() => {
              this.$router.push('/')
            })
        })
        .catch((error) => {
          this.$store.commit('setErrorMessage', error.response.data.message)
        })
    }
  },

  computed: {
    ...mapGetters(['getErrorMessage'])
  }
}
</script>

<style></style>
