import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    jugador1:50,
    jugador2:50

  },
  mutations:{
    setJugador1(state){
      const numAzar = Math.round(Math.random() * 100)
      state.jugador1=numAzar;
    },
    setJugador2(state){
      const numAzar = Math.round(Math.random() * 100)
      state.jugador2=numAzar;
    }
      
    }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
