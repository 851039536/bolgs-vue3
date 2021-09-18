import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import BlogHome from '@/components/home/Home.vue'

const routes = [{
  path: '/',
  //重定向，当前路径'/'没有对应的组件，需要重定向到其他路由页面
  redirect: '/BlogHome',
  name: 'Home',
  component: BlogHome,
},

{
  path: '/BlogHome',
  name: 'BlogHome',
  component: () => import('@/components/home/Home.vue'),

},
{
  path: '/sAbout',
  name: 'sAbout',
  component: () => import('@/views/sAbout/sAbout.vue'),

},
{
  path: '/Blogs',
  name: 'Blogs',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/blogs/index.vue'),

},
{

  path: '/index',
  name: 'index',
  meta: {
    keepAlive: true
  },
  component: () => import('@/views/index/Index.vue'),
},
{
  path: '/BlogHeader',
  name: 'BlogHeader',
  meta: {
    keepAlive: true
  },
  component: () => import('@/components/header/Header.vue')
},
{
  path: '/IndexSidebar',
  name: 'IndexSidebar',
  meta: {
    keepAlive: true
  },
  component: () => import('@/views/index/components/sidebar/IndexSidebar.vue')
},
{
  path: '/IndexTitle',
  name: 'IndexTitle',
  meta: {
    keepAlive: true
  },
  component: () => import('@/views/index/components/column/IndexColumn.vue')
},
{
  path: '/IndexText',
  name: 'IndexText',
  component: () => import('@/views/index/components/content/IndexContent.vue')
},

{
  path: '/BlogSidebar',
  name: 'BlogSidebar',
  meta: {
    keepAlive: true
  },
  component: () => import('@/components/raside/rAside.vue')
},
{
  path: '/TimeLine',
  name: 'TimeLine',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/TimeLine/TimeLine.vue'),

},
{
  path: '/TagText',
  name: 'TagText',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Tag/TagText.vue')
},

{
  path: '/Photo',
  name: 'Photo',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Photo/Photo.vue')
},

{
  path: '/Navigation',
  name: 'Navigation',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Navigation/Navigation.vue')
},

{
  path: '/BlogCircles',
  name: 'BlogCircles',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Navigation/BlogCircles.vue')
},

{
  path: '/Favorite',
  name: 'Favorite',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Navigation/Favorite.vue')
},

{
  path: '/Talk',
  name: 'Talk',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Talk/Talk.vue')
},
{
  path: '/TalkText',
  name: 'TalkText',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Talk/TalkText.vue')
},

{
  path: '/SnVideo',
  name: 'SnVideo',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/SnVideo/SnVideo.vue')
},

{
  path: '/SnVideoText',
  name: 'SnVideoText',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/SnVideo/SnVideoText.vue')
},
{
  path: '/Leave',
  name: 'Leave',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Leave/Leave.vue')
},
{
  path: '/One',
  name: 'One',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/One/One.vue')
},
{
  path: '/Book',
  name: 'Book',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/book/Book.vue')
},
{
  path: '/test',
  name: 'test',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/test/test.vue')
},

{
  path: '/ListContent',
  name: 'ListContent',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/ListContent/ListContent.vue')
},
{
  path: '/Software',
  name: 'Software',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Software/Software.vue')
},
{
  path: '/SoftwareContent',
  name: 'SoftwareContent',
  meta: {
    keepAlive: false
  },
  component: () => import('@/views/Software/SoftwareContent.vue')
},
{
  path: '/Particulars',
  name: 'Particulars',
  meta: {
    keepAlive: false
  },
  component: () => import('@/components/editorHtml/Particulars.vue')
},
  // {
  //   path: '/BlogsSidebar',
  //   name: 'BlogsSidebar',
  //   meta: {
  //     keepAlive: false
  //   },
  //   component: () => import('@/views/Blogs/BlogsSidebar.vue')
  // },
]


//createWebHashHistory createWebHistory
const router = createRouter({
  history: createWebHistory(), //HTML5模式
  routes,
})

export default router