import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artistas: [],
  },
  getters: {
    envioArtistas(state){
      return state.artistas;
    }
  },
  mutations: {
    reciboInfoApi(state,infoApiRecibido){
      state.artistas = infoApiRecibido;
    }
  },
  actions: {
    infoApi(context,infoApiRecibido){
      context.commit('reciboInfoApi',infoApiRecibido)
    }
  },
})
