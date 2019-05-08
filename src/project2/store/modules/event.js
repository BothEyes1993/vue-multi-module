const state = {
  click: null
}

const getters = {
  globalClick: state => state.click
}

const actions = {

}

const mutations = {
  setEvent (state, evnt) {
    state[evnt.type] = evnt
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
