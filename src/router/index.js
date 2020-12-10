import {
  createRouter,
  createWebHistory,
  // createWebHashHistory
} from 'vue-router'
import Index from '../views/Index.vue'

const routes = [{
    //path是路由的路径
    path: '/',
    //redirect代表重定向，因为当前路径'/'并没有对应的组件，所以需要重定向到其他路由页面
    // redirect: '/Index1',
    name: 'Index',
    component: Index,
  },

  {
    path: '/About',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About/About.vue'),

  },
  {
    path: '/Index1',
    name: 'Index1',
    component: () => import('../views/Index.vue'),
    meta: {
      title: 'Index1',
      keepAlive: true // 缓存
    }

  },
  {

    path: '/Headers',
    name: 'Headers',
    component: () => import('../views/common/Headers.vue')
  },
  {
    path: '/IndexSidebar',
    name: 'IndexSidebar',
    component: () => import('../views/index/Index-Sidebar.vue')
  },
  {
    path: '/IndexText',
    name: 'IndexText',
    component: () => import('../views/index/Index-Text.vue')
  },
  {
    path: '/IndexText2',
    name: 'IndexText2',
    component: () => import('../views/index/IndexText2.vue')
  },
  {
    path: '/Sidebarsn',
    name: 'Sidebarsn',
    component: () => import('../views/common/Sidebarsn.vue')
  },
  {
    path: '/TimeLine',
    name: 'TimeLine',
    component: () => import('../views/TimeLine/TimeLine.vue')
  },
  {
    path: '/TagText',
    name: 'TagText',
    component: () => import('../views/Tag/TagText.vue')
  }
]

const router = createRouter({
  history: createWebHistory(), //HTML5模式
  routes,


})

export default router