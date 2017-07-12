<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Home from './components/home'
import VueRouter from 'vue-router'


const routes = [
  { path: '/', component: Hello },
  { path: '/home', component: Home }
]
const router = new VueRouter({
  routes
});



export default {
  name: 'app',
  router,
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
