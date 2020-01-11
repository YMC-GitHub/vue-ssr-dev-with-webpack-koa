import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Ready translated locale messages
import { messages } from './home/index'

Vue.use(VueI18n)
// Create VueI18n instance with options
export const createI18n = () => {
  const i18n = new VueI18n({
    locale: 'ch', // set locale
    messages // set locale messages
  })
  return i18n
}

// Create a Vue instance with `i18n` option
// new Vue({ i18n }).$mount('#app')// Ready translated locale messages
