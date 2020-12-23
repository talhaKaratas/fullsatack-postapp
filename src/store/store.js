import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './login'
import posts from './posts'

export const store = new Vuex.Store({
  modules: {
    login,
    posts
  }
})
