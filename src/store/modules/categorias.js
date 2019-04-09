import axios from 'axios'
import * as mutationType from '../mutation_types'
const api = axios.create({
  baseURL: 'http://localhost:8000/'
})

// initial state
const state = {
  all: [],
  message: null
}

// initial getters
const getters = {
  categorias: state => {
    return state.all.sort((a, b) => {
      return a['id'] < b['id']
    })
  },
  messages: state => state.message
}

// initial actions
const actions = {
  // get data from API
  getAllCategorias({ commit }) {
    api.get('api-catalogo/categorias/')
      .then(r => r.data)
      .then(d => {
        state.message = 'Data success has LIST'
        console.log(d)
        commit(mutationType.SHOW_ALL_CATEGORIAS, d)
      })
  },

  destroy (context, id) {
    let conf = window.confirm('Are you sure delete this Data?')
    if (conf) {

      api.delete('api-catalogo/categorias/' + id)
      .then(d => {
        state.message = 'Data success has deleted'
        console.log(d)
        context.dispatch('getAllCategorias')
      })
    }
  }


}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_CATEGORIAS](state, ds) {
    state.all = ds
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
