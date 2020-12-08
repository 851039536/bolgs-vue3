import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Index from '../views/Index.vue'

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '/Index1',
    name: 'Index1',
    component: () => import('../views/Index.vue')
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
    path: '/Sidebarsn',
    name: 'Sidebarsn',
    component: () => import('../views/common/Sidebarsn.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router