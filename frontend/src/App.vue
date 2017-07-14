<template>
  <div id="app">
 <section>
    <router-link to="/home">Home</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>
  </section>

  <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Home from './components/home'
import VueRouter from 'vue-router'
import { store } from './store.js'


const routes = [
  { path: '/login', component: Hello },
  { path: '/home', component: Home }
]
const router = new VueRouter({

  routes
});
router.beforeEach((to, from, next) => {
  if( to.path=='/home' ){
      if(localStorage.getItem('token')){
            next()
      }
      else{
         next('/login')

      }
  }else{
  next()
  }
}
)







export default {
  name: 'app',
  router,store,
  components: {
    Hello
  },

  methods:{
    logout() {
     this.$store.dispatch('logout');
    }
  },
  computed:{
     isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
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
