import { createRouter, createWebHistory } from 'vue-router'
import BlogHome from '@/components/home/Home.vue'
import { clearPending } from '@/utils/http/pending'
import NProgress from 'nprogress'
const routes = [
  {
    path: '/',
    //重定向，当前路径'/'没有对应的组件，需要重定向到其他路由页面
    redirect: '/BlogHome',
    name: 'Home',
    component: BlogHome
  },
  {
    path: '/BlogHome',
    name: 'BlogHome',
    component: () => import('@/components/home/Home.vue')
  },
  {
    path: '/sAbout',
    name: 'sAbout',
    component: () => import('@/views/sAbout/sAbout.vue')
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/blogs/index.vue')
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/index/Index.vue'),
    children: [
      // 添加子路由
      {
        path: 'content',
        name: 'content',
        component: () => import('@/views/index/components/content/IndexContent.vue')
      },
      {
        path: 'column',
        name: 'column',
        component: () => import('@/views/index/components/column/IndexColumn.vue')
      }
    ]
  },
  {
    path: '/IndexSidebar',
    name: 'IndexSidebar',
    meta: {
      keepAlive: true
    },
    component: () => import('@/views/index/components/sidebar/IndexSidebar.vue')
  },
  // {
  //   path: '/IndexTitle',
  //   name: 'IndexTitle',
  //   meta: {
  //     keepAlive: true
  //   },
  //   component: () => import('@/views/index/components/column/IndexColumn.vue')
  // },
  // {
  //   path: '/IndexText',
  //   name: 'IndexText',
  //   component: () => import('@/views/index/components/content/IndexContent.vue')
  // },
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
    component: () => import('@/views/TimeLine/TimeLine.vue')
  },
  {
    path: '/Tag',
    name: 'Tag',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/tag/Tag.vue')
  },
  {
    path: '/Photo',
    name: 'Photo',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/photo/Photo.vue')
  },
  {
    path: '/Navigation',
    name: 'Navigation',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/website/Navigation.vue')
  },
  {
    path: '/BlogCircles',
    name: 'BlogCircles',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/blogCrcles/BlogCircles.vue')
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/navigation/favorite/Favorite.vue')
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
    path: '/Svideo',
    name: 'Svideo',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/svideo/Svideo.vue')
  },
  {
    path: '/VideoPlay',
    name: 'VideoPlay',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/svideo/VideoPlay.vue')
  },
  {
    path: '/Leave',
    name: 'Leave',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/leave/Leave.vue')
  },
  {
    path: '/One',
    name: 'One',
    meta: {
      keepAlive: false
    },
    component: () => import('@/views/one/One.vue')
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
    component: () => import('@/views/listContent/ListContent.vue')
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
    path: '/VmdHtml',
    name: 'VmdHtml',
    meta: {
      keepAlive: false
    },
    component: () => import('@/components/editor/VmdHtml.vue')
  },
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  // ------------------------------------------------------------------------------admin---------------------------------------------------
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/admin/login/Login.vue')
  },
  {
    path: '/Admin-index',
    name: 'Admin-index',
    component: () => import('@/views/admin/index/index.vue'),
    children: [
      // 添加子路由
      {
        path: 'ArticleTable',
        name: 'ArticleTable',
        component: () => import('@/views/admin/article/ArticleTable.vue')
      },
      {
        path: 'ArticleAdd',
        name: 'ArticleAdd',
        component: () => import('@/views/admin/article/ArticleAdd.vue')
      },
      {
        path: 'ArticleEdit',
        name: 'ArticleEdit',
        component: () => import('@/views/admin/article/ArticleEdit.vue')
      },
      {
        path: 'NavTable',
        name: 'NavTable',
        component: () => import('@/views/admin/navigation/NavTable.vue')
      },
      {
        path: 'NavEdit',
        name: 'NavEdit',
        component: () => import('@/views/admin/navigation/NavEdit.vue')
      },
      {
        path: 'NavAdd',
        name: 'NavAdd',
        component: () => import('@/views/admin/navigation/NavAdd.vue')
      },
      {
        path: 'PageSet',
        name: 'PageSet',
        component: () => import('@/views/admin/set/PageSet.vue')
      },
      {
        path: 'LabelTable',
        name: 'LabelTable',
        component: () => import('@/views/admin/label/LabelTable.vue')
      }
    ]
  }
]

//createWebHashHistory createWebHistory
const router = createRouter({
  history: createWebHistory(), //HTML5模式
  routes
})
//页面切换之前取消上一个路由中未完成的请求
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/Login') {
    console.log(to.path, '[ router=>clearPending ]')
    clearPending()
  }
  next()
})
router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export default router
