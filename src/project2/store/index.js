import Vue from 'vue'
import Vuex from 'vuex'

import event from './modules/event'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { event }
})

// document.addEventListener('click', evnt => store.commit('setEvent', evnt))
// window.addEventListener('resize', evnt => store.commit('setEvent', evnt))

export default store
