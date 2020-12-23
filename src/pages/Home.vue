<template>
  <div class="home">
    <Header />
    <div class="post__container">
      <Post v-for="post in getPosts" :key="post._id" :postInfo="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'
import Post from '../components/Post'
export default {
  name: 'Home',
  components: {
    Header,
    Post
  },
  created() {
    this.$store.dispatch('fetchPosts', this.$store.state.login.token)
    this.$store.dispatch('fetchMyPosts', this.$store.state.login.token)
  },
  computed: {
    ...mapGetters(['getPosts'])
  }
}
</script>

<style></style>
