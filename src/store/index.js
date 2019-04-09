import Vue from 'vue'
import Vuex from 'vuex'


import * as getters from './getters'
import * as actions from './actions'
import categorias from './modules/categorias'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    categorias
  }
})
/*
state: {
  	categorias: []
  },
  mutations,
  actions,

mutations
: {

  	SET_CATEGORIAS (state, categorias) {
      state.categorias = categorias
    }

  }

actions
: {


  	loadCategorias ({ commit }) {
      axios
        .get('http://localhost:8000/api-catalogo/categorias/')
        .then(r => r.data)
        .then(d => {
        	console.log(d)
        	commit('SET_CATEGORIAS', d)
        })
    }


  }*/