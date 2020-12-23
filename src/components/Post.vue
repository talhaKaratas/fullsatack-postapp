<template>
  <div class="post">
    <div class="post__header">
      <div class="postHeader__left">
        <h3>{{ postInfo.name }}</h3>
      </div>
      <div class="postHeader__right">
        <p>{{ postInfo.date }}</p>
      </div>
    </div>
    <div class="post__content">
      <p>
        {{ postInfo.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['postInfo']
}
</script>

<style></style>
