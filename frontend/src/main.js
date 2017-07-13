// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import FBSignInButton from 'vue-facebook-signin-button'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import SimpleVueValidation from 'simple-vue-validator'

Vue.use(FBSignInButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true;
new Vue({
    el: '#app',


    template: '<App/>',
    components: { App },
    http: {
        root: '/root',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
})