<template>
  <div id="app">
  <br/>
  <h6> Play Craps </h6>
<!--  <StartGame/> -->
  <!--
    <div id="nav">
      <router-link to="/">new game</router-link> |
      <router-link to="/play"></router-link>
    </div>
        -->	
    <router-view/>
  </div>
</template>

<script>
/*
import StartGame from './views/StartGame.vue'
export default {
  name: 'app',
  components: {
  StartGame
  }
}
  */

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
