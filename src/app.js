import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { createI18n } from './locale'
import title from './mixins/title'

Vue.mixin(title)

export function createApp() {
  const router = createRouter()
  const store = createStore()
  const i18n = createI18n()
  sync(store, router)

  const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })

  return {
    app, router, store, i18n
  }
}
