<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from '@/components/shop/ProductList'
import ShoppingCart from '@/components/shop/Cart'

export default {
  components: { ProductList, ShoppingCart },
  title() {
    return 'Koa Vue SSR| Shop'
  }
}
</script>
