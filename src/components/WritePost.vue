<template>
  <div class="write__post">
    <div class="writePost__header">
      <h1>Post Yaz</h1>
    </div>
    <div class="writePost__content">
      <textarea v-model="content"></textarea>
    </div>
    <div class="writePost__footer">
      <button class="btn btn-post" @click="sendPost">Kaydet</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WritePost',
  data() {
    return {
      content: ''
    }
  },

  methods: {
    sendPost() {
      axios
        .post(
          'http://localhost:3000/api/post/write',
          { content: this.content },
          {
            headers: {
              auth_token: this.$store.state.login.token
            }
          }
        )
        .then((res) => {
          console.log(res)
          this.$store.dispatch('fetchMyPosts', this.$store.state.login.token)
        })
    }
  }
}
</script>

<style></style>
