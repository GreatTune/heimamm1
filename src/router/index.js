// 导入vue
import Vue from 'vue'
// 导入router路由
import VueRouter from 'vue-router'
// router注册
Vue.use(VueRouter)

// 组件引入
// 登录页
import login from '../views/login/login.vue'
// 首页
import index from '../views/index/index.vue'

// 使用router
const router = new VueRouter({ // 实例化
  routes: [
    {
      path: "/login", 
      component: login
    },
    {
      path: "/index",
      component: index,
    }
  ]
})

// router暴露出口
export default router



