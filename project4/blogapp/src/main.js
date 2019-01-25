import Vue from 'vue'
import App from './App.vue'
import VueResoure from 'vue-resource'//imports vue resource plugin
Vue.use(VueResoure)//tell vue it wants to use the resource plugin

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
