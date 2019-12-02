import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css'
import { WOW } from 'wowjs'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // var wow = new WOW({
    //   boxClass: 'wow',
    //   animateClass: 'animated',
    //   offset: 0,
    //   mobile: true
    // })
    // wow.init()
    new WOW().init()
  }
})
