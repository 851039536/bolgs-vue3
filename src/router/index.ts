import {
  createRouter,
  createWebHistory,
  // createWebHashHistory
} from 'vue-router'
import Home from '../views/common/Home.vue'

const routes = [{
  path: '/',
  //重定向，当前路径'/'没有对应的组件，需要重定向到其他路由页面
  redirect: '/home',
  name: 'home',
  component: Home,
},

{
  path: '/Home',
  name: 'Home',
  component: () => import('../views/common/Home.vue'),

},
{
  path: '/About',
  name: 'About',
  component: () => import( /* webpackChunkName: "about" */ '../views/About/About.vue'),

},
{
  path: '/Blogs',
  name: 'Blogs',
  meta: {
    keepAlive: false
  },
  component: () => import('../views/Blogs/Blogs.vue'),

},
{

  path: '/index',
  name: 'index',
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
  component: () => import('../views/index/IndexSidebar.vue')
},
{
  path: '/IndexTitle',
  name: 'IndexTitle',
  meta: {
    keepAlive: true // 缓存
  },
  component: () => import('../views/index/IndexTitle.vue')
},
{
  path: '/IndexText',
  name: 'IndexText',
  component: () => import('../views/index/IndexText.vue')
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
  path: '/Transfer',
  name: 'Transfer',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/common/Transfer.vue')
},
{
  path: '/TimeLine',
  name: 'TimeLine',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/TimeLine/TimeLine.vue'),

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

{
  path: '/BlogCircles',
  name: 'BlogCircles',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Navigation/BlogCircles.vue')
},

{
  path: '/favorite',
  name: 'favorite',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Navigation/favorite.vue')
},

{
  path: '/Talk',
  name: 'Talk',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Talk/Talk.vue')
},
{
  path: '/TalkText',
  name: 'TalkText',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Talk/TalkText.vue')
},

{
  path: '/SnVideo',
  name: 'SnVideo',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/SnVideo/SnVideo.vue')
},

{
  path: '/SnVideoText',
  name: 'SnVideoText',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/SnVideo/SnVideoText.vue')
},
{
  path: '/Leave',
  name: 'Leave',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Leave/Leave.vue')
},
{
  path: '/One',
  name: 'One',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/One/One.vue')
},
{
  path: '/Book',
  name: 'Book',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/Book/Book.vue')
},
{
  path: '/test',
  name: 'test',
  meta: {
    keepAlive: false // 缓存
  },
  component: () => import('../views/test/test.vue')
},

{
  path: '/ListContent',
  name: 'ListContent',
  meta: {
    keepAlive: false
  },
  component: () => import('../views/ListContent/ListContent.vue')
},
{
  path: '/Software',
  name: 'Software',
  meta: {
    keepAlive: false
  },
  component: () => import('../views/Software/Software.vue')
},
{
  path: '/SoftwareContent',
  name: 'SoftwareContent',
  meta: {
    keepAlive: false
  },
  component: () => import('../views/Software/SoftwareContent.vue')
},
]

const router = createRouter({
  history: createWebHistory(), //HTML5模式
  routes,


})

export default router