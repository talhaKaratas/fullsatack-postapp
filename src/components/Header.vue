<template>
  <div class="header">
    <div class="header__left">
      <ul class="header__nav">
        <router-link
          tag="li"
          to="/"
          class="headerNav__item"
          exact-active-class="active"
          >Anasayfa</router-link
        >
        <router-link
          tag="li"
          to="/profile"
          class="headerNav__item"
          active-class="active"
          >Profile</router-link
        >
      </ul>
    </div>
    <div class="header__right">
      <!-- <h3>Talha</h3> -->
      <p><strong @click="logOut">Çıkış</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logOut() {
      localStorage.removeItem('access-token')
      this.$store.commit('removeToken')
    }
  }
}
</script>

<style></style>
