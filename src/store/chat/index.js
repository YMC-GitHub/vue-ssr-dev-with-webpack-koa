import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  // nested modules
  state,
  getters,
  actions,
  mutations
}
