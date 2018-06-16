// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import i18n from './i18n'
import router from './router'

Vue.config.productionTip = false

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

/* eslint-disable no-new */
new Vue({
  el: '#root',
  i18n,
  router,
  components: { Root },
  template: '<Root/>'
})
