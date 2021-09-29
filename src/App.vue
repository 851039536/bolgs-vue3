<!--
 * @Author: App.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-18 16:10:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<template>
  <div id="app">
    <SAspin></SAspin>
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
<script lang="ts">
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useRouter } from 'vue-router'
import SnBootom from './components/bootom/Bootom.vue'
import SAspin from './components/aspin/sAspin.vue'
export default {
  components: { SnBootom, SAspin },
  setup() {
    const router = useRouter()

    router.beforeEach((to, from, next) => {
      NProgress.start()
      next()
    })

    router.afterEach(() => {
      NProgress.done()
    })

    return {}
  },
}
</script>
<style lang="scss">
@import './design/methodCss.scss';

@include scroll; //滚动条美化 qweqw王企鹅群翁二位 王企鹅额re rrewqwewefdfd
</style>
