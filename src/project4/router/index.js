import Vue from 'vue'
import Router from 'vue-router'

// 导入其他模块的路由
import Home from '@project3/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})
