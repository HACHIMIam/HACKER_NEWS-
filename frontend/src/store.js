import Vue from 'vue';
import Vuex from 'vuex';
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        state: {
            isLoggedIn: !!localStorage.getItem('lbUser')
        }
    },
})