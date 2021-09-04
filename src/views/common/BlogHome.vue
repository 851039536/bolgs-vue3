<!--
 * @Author: 自我介绍
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-09-04 09:15:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Home.vue
-->

<template>
  <div id="BlogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="home_main_top">
        <div class="min-h-screen hero bg-base-200">
          <div class="text-center hero-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">哈喽，我叫少年</h1>
              <p class="mb-5">一位热爱生活、xxxxxx开发者。</p>
              <button class="btn btn-primary" @click="skip(1)">冲冲冲！</button>
              <button class="btn btn-link">link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  name: "BlogHome",
  setup(): { skip: (num: any) => Promise<void>; } {
    const router = useRouter();
    let skip = async (num: any) => {
      switch (num) {
        case 1:
          router.push("/Blogs");
          break;
        case 2:
          router.push("/About");
          break;
      }
    };

    return {
      skip,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./scss/BlogHome.scss";
</style>