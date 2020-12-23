import axios from 'axios'
import { router } from '../router/routes'

const state = {
  token: null,
  errorMessage: null
}

const getters = {
  getToken(state) {
    return state.token ? true : false
  },

  getErrorMessage(state) {
    return state.errorMessage
  }
}

const mutations = {
  setToken(state, payload) {
    state.token = payload
  },

  removeToken(state) {
    state.token = null
    router.push('/login')
  },

  setErrorMessage(state, payload) {
    state.errorMessage = payload
  }
}

const actions = {
  login({ commit }, user) {
    return axios
      .post(' http://localhost:3000/api/user/login', user)
      .then((res) => {
        console.log(res)
        commit('setToken', res.data)
        localStorage.setItem('access-token', res.data)
      })
      .catch((error) => {
        commit('setErrorMessage', error.response.data.message)
      })
  },

  initAuth({ commit }) {
    let token = localStorage.getItem('access-token')
    if (token) {
      commit('setToken', token)
    } else {
      return false
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
