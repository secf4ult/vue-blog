<template>
  <div class="container">
    <h1>Page not find</h1>
    <h1>An error occured</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>

<style></style>
