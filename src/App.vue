<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('initAuth')
  }
}
</script>

<style>
@import './assets/style.css';
</style>
