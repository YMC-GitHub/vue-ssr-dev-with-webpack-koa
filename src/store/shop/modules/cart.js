import shop from '@/api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (_state, _getters, rootState) => _state.items.map(({ id, quantity }) => {
    const product = rootState.shop.products.all.find(_product => _product.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  }),

  cartTotalPrice: (_state, _getters) =>
    // eslint-disable-next-line no-mixed-operators
    _getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
}

// actions
const actions = {
  checkout({ commit, state: _state }, products) {
    const savedCartItems = [..._state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart({ state: _state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = _state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit(
        'shop/products/decrementProductInventory',
        { id: product.id },
        { root: true }
      )
    }
  }
}

// mutations
const mutations = {
  pushProductToCart(_state, { id }) {
    _state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity(_state, { id }) {
    const cartItem = _state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems(_state, { items }) {
    _state.items = items
  },

  setCheckoutStatus(_state, status) {
    _state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
