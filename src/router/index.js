// 导入vue
import Vue from 'vue'
// 导入router
import VueRouter from 'vue-router'
// router注册
Vue.use(VueRouter)

// 组件引入
// 登录页
import login from '../views/login/login.vue'
// 首页
import index from '../views/index/index.vue'

// 使用router
const router = new VueRouter({
  router : [
    {
      // 组件地址
      path: '/login',
      // 组件名
      component: login
    },
    {
      path: '/index',
      component: index
    },
  ]
})

// router暴露出口
export default router



