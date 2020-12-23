<!--
 * @Author: your name
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2020-12-23 14:46:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<template>
  <div id="app">
    <Headers></Headers>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>
<script lang="ts">
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const router = useRouter();
    router.beforeEach((to, from, next) => {
      NProgress.start();
      next();
    });

    router.afterEach(() => {
      NProgress.done();
    });
    const doc = () => {
      let table = document.querySelector("body");
      if (table) {
        table.setAttribute("style", "background-color:#f7f7f7");
      }
      // document
      //   .querySelector("body")
      //   .setAttribute("style", "background-color:#f7f7f7");
    };
    onMounted(async () => {
      await doc();
    });

    return { doc };
  },
};
</script>
<style lang="scss">
  @import "assets/sass/com";
  #app {
  }

  .home-router {
    transition: all 1.8s linear;
  }
  @include scroll;
</style>
