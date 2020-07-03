import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artistas: [],
    comentarios: [],
  },
  getters: {
    envioArtistas(state){
      return state.artistas;
    },
    envioComentarios(state){
      return state.comentarios;
    }
  },
  mutations: {
    reciboInfoApi(state,infoApiRecibido){
      state.artistas = infoApiRecibido;
    },
    guardandoComentario(state,comenUsuaReci){
      state.comentarios.push(comenUsuaReci);
    }
  },
  actions: {
    infoApi(context,infoApiRecibido){
      context.commit('reciboInfoApi',infoApiRecibido)
    },
    GuardaComentario(context,comenUsuaReci){
      context.commit('guardandoComentario',comenUsuaReci);
    }
  },
})
