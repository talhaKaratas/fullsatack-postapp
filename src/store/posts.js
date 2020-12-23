import axios from 'axios'

const state = {
  posts: [],
  myPosts: []
}

const getters = {
  getPosts(state) {
    return state.posts.reverse()
  },
  getMyPosts(state) {
    return state.myPosts.reverse()
  }
}

const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },

  setMyPosts(state, payload) {
    state.myPosts = payload
  }
}

const actions = {
  fetchPosts({ commit }, verifyToken) {
    axios
      .get(' http://localhost:3000/api/post/readall', {
        headers: {
          auth_token: verifyToken
        }
      })
      .then((res) => {
        commit('setPosts', res.data)
      })
  },

  fetchMyPosts({ commit }, verifyToken) {
    axios
      .get('http://localhost:3000/api/post/myposts', {
        headers: {
          auth_token: verifyToken
        }
      })
      .then((res) => {
        console.log(res.data)
        commit('setMyPosts', res.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
