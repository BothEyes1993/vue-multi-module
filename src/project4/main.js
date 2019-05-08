import Vue from 'vue'
import router from './router'
import store from '@project3/store'
import App from '@project3/App'

import '@project3/plugins'
import './assets/style/layout.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
