import cart from './modules/cart'
import products from './modules/products'

export default {
  namespaced: true,
  // nested modules
  modules: {
    cart,
    products
  }
}
