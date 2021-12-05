import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {id:1, title:'Praia da Baía do Sancho', subtitle:"Fernando de Noronha – Pernambuco"},
      {id:2, title:'Praias dos Lençóis Maranhenses', subtitle:"Barreirinhas – Maranhão"},
      {id:3, title:'Praia Brava', subtitle:"Búzios – Rio de Janeiro"},
      {id:4, title:'Praia da Baía dos Golfinhos', subtitle:"Pipa – Rio Grande do Norte"},
      {id:5, title:'Praia da Baía dos Porcos', subtitle:" Fernando de Noronha – Pernambuco"},
      {id:6, title:'Praia da Ilha do Campeche', subtitle:" Florianópolis – Santa Catarina"},
      {id:7, title:'Praia da Ilha do Prumirim', subtitle:"Ubatuba – São Paulo"},
      {id:8, title:'Praia da Lagoa do Paraíso', subtitle:"Jericoacoara – Ceará"}],
    title:'Eventos'
  },
  mutations: {
    SET_EVENTS(state, payload){
      state.events = payload
    }
  },
  actions: {
    fetchEvents({commit}){
      axios.get('https://agenda-balaguer.herokuapp.com/api/event')
      .then(res=>{
        //this.events=res.data.values
        const payload = res.data.values
        commit('SET_EVENTS', payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
