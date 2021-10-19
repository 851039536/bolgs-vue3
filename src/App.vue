<!--
 * @Author: App.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-10-16 11:40:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<script lang="ts" setup>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'vue-router'
import SnBootom from './components/bootom/Bootom.vue'

const router = useRouter()

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
</script>

<template>
  <div id="app">
    <blog-header></blog-header>
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
