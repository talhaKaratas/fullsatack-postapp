<template>
  <div class="profile">
    <Header />
    <WritePost />
    <div class="post__container">
      <Post v-for="post in getMyPosts" :key="post._id" :postInfo="post" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import WritePost from '../components/WritePost'
import Post from '../components/Post'
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {
    Header,
    WritePost,
    Post
  },
  computed: {
    ...mapGetters(['getMyPosts'])
  },

  created() {
    this.$store.dispatch('fetchMyPosts', this.$store.state.login.token)
  }
}
</script>

<style></style>
