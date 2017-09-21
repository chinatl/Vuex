const state = {
  list: [],
}
const getters = {
  currentList: state => {
    return state.list
  },
}
const mutations = {
  setList (state, list) {
    state.list= list;
  },
}

const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}
