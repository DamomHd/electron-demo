/*
 * @Author: Damom
 * @Date: 2021-03-23 21:20:32
 * @LastEditors: Damom
 * @LastEditTime: 2021-03-23 22:41:24
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin/element-ui'
import './plugin/fortawesome'
import '@/plugin/mavonEditor'
import '@/plugin/datastore'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
