// vue 引入
import Vue from 'vue'
// app 引入
import App from './App.vue'
// router 引入
import router from './router/index.js'
// 全局css样式 引入
import './style/base.css'
// element 引入
import ElementUI from 'element-ui'
// element css样式
import 'element-ui/lib/theme-chalk/index.css'
// 注册element
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  // 挂载注入 vue 实例
  router,
  render: h => h(App),
}).$mount('#app')
