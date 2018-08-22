<template>
  <div class="home page">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>HOME</h1>
    <p>Nullam nec nunc efficitur, aliquam elit at, rutrum lectus. Etiam sapien urna, cursus et aliquam et, iaculis vel odio. Nullam consectetur, orci sit amet bibendum rhoncus, ipsum odio commodo libero, a cursus velit nunc ullamcorper tellus. Etiam pretium pellentesque turpis, eu viverra justo rhoncus nec. Fusce posuere ex ut eros porta venenatis. Pellentesque nec turpis purus. Maecenas tempor faucibus ante at imperdiet. Pellentesque hendrerit sit amet dui eget ornare. Vestibulum nec nulla facilisis, vestibulum nulla quis, sollicitudin nisi. Morbi ultrices, quam lobortis dignissim ornare, leo ligula eleifend mauris, quis aliquam ipsum odio gravida felis. Aenean vel nisl porta, congue justo sit amet, maximus tortor.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .page {
    text-align: left;
  }
</style>
