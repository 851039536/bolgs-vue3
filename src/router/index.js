import {
  createRouter,
  createWebHistory,
  // createWebHashHistory
} from 'vue-router'
import Index from '../views/Index.vue'

const routes = [{
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About/About.vue'),
    meta: {
      keepAlive: false // 需要被缓存
    }
  },
  {
    path: '/Index1',
    name: 'Index1',
    component: () => import('../views/Index.vue'),
    meta: {
      keepAlive: true
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router