import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '../views/home/Home.vue'

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
