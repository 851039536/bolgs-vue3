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
  redirect: '/Indexs',
  name: 'Index',
  component: Index,
},

{
  path: '/About',
  name: 'About',
  component: () => import( /* webpackChunkName: "about" */ '../views/About/About.vue'),

},
{
  path: '/Indexs',
  name: 'Indexs',
  meta: {
    keepAlive: true // 缓存
  },
  component: () => import('../views/Index.vue'),


},
{

  path: '/Headers',
  name: 'Headers',
  meta: {
    keepAlive: true // 缓存
  },
  component: () => import('../views/common/Headers.vue')
},
{
  path: '/IndexSidebar',
  name: 'IndexSidebar',
  meta: {
    keepAlive: true // 缓存
  },
  component: () => import('../views/index/Index-Sidebar.vue')
},
{
  path: '/IndexText',
  name: 'IndexText',
  meta: {
    keepAlive: true // 缓存
  },
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
  meta: {
    keepAlive: true // 缓存
  },
  component: () => import('../views/common/Sidebarsn.vue')
},
{
  path: '/TimeLine',
  name: 'TimeLine',

  component: () => import('../views/TimeLine/TimeLine.vue'),
  meta: {
    keepAlive: false // 缓存
  },
},
{
  path: '/TagText',
  name: 'TagText',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Tag/TagText.vue')
},

{
  path: '/Photo',
  name: 'Photo',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Photo/Photo.vue')
},
{
  path: '/Navigation',
  name: 'Navigation',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Navigation/Navigation.vue')
},
]

const router = createRouter({
  history: createWebHistory(), //HTML5模式
  routes,


})

export default router