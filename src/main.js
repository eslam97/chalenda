import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './includes'
import carousel from 'vue-owl-carousel'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'bootstrap'

Vue.component('carousel', carousel )
Vue.component('VueSlickCarousel', VueSlickCarousel)

import Popper from 'popper.js'

import './components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
