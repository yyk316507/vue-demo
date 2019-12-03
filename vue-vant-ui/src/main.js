import Vue from 'vue'
import App from './App.vue'
import Http from './api/http'
Vue.config.productionTip = false
// 把http挂载到vue实例上
Vue.prototype.$http = Http
new Vue({
  render: h => h(App)
}).$mount('#app')
