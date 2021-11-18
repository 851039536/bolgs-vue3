<!--
 * @Author: App.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-18 17:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<script lang="ts" setup>
  import NProgress from 'nprogress'
  import { useRouter } from 'vue-router'
  import SnBootom from './components/bootom/Bootom.vue'
  import { storage } from '@/utils/storage/storage'
  import { useStore } from 'vuex'
  import Header from './components/header/Header.vue'
  const router = useRouter()
  const store = useStore()
  store.state.Roles = storage.get('rolres')

  // to：即将要进入的目标路由对象（这个对象包括name，params，meta等属性）
  // from：当前导航正要离开的路由对象（这个对象包括name，params，meta等属性）
  // next：Function，确保要调用next方法，这个当中还可以传一些参数。
  router.beforeEach((to, from, next) => {
    // 开启进度条
    NProgress.start()
    next()
  })
  router.afterEach(() => {
    // 关闭进度条
    NProgress.done()
  })
</script>

<template>
  <div id="app">
    <Header></Header>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <!-- 需要缓存的视图组件 -->
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <SnBootom></SnBootom>
  </div>
</template>

<style lang="scss">
  @import './design/methodCss.scss';

  @include scroll; //滚动条美化
</style>
