<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/default">Default</router-link> |
      <router-link to="/list">List</router-link>
      <!-- <router-link :to="{ path: '/about'}" replace>About</router-link> -->
    </div>

    <transition name="router-anim">
        <router-view></router-view>
    </transition>

  </div>
</template>

<style>

  #nav {
    text-align: left;
  }

  #nav a {
    color: lightseagreen;
    text-decoration: none;
    font-size: 16px;
  }

  a.router-link-exact-active {
    font-weight: bold;
  }

  body {
    background: rgb(233, 233, 233);
  }

  html,body {
    height: calc(100% - 50px);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 30%;
    padding: 30px;
    margin: 50px auto;
    height: calc(60% - 50px);
  }

  .page {
    position: fixed;
    width: inherit;
  }

  .router-anim-enter-active {
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
