<!--
 * @Author: App.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-09-08 09:56:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<template>
  <div id="app">
    <blog-header></blog-header>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <SnBootom></SnBootom>
  </div>
</template>
<script lang="ts">
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "vue-router";
import { onMounted, reactive, toRefs } from "vue";
import SnBootom from './views/common/SnBootom.vue';
import BlogSidebar from "./views/common/BlogSidebar.vue";
export default {
  components: { SnBootom, },
  setup() {
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      NProgress.start();
      next();
    });

    router.afterEach(() => {
      NProgress.done();
    });

    return {
      reactive,

    };
  },
};
</script>
<style lang="scss">
@import "assets/sass/com";
@include scroll; //滚动条美化
</style>
