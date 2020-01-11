import shop from '@/api/shop'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts(_state, products) {
    _state.all = products
  },

  decrementProductInventory(_state, { id }) {
    const product = _state.all.find(_product => _product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
