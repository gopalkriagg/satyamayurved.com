import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import '../../plugins/bootstrap-vue'
import App from './App.vue'
import '../../ga';

Vue.config.productionTip = false

Vue.prototype.$page = 'Products'

new Vue({
  render: h => h(App),
}).$mount('#app')
