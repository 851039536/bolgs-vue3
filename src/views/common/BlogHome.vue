<!--
 * @Author: 自我介绍
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-09-07 11:55:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Home.vue
-->

<template>
  <div id="blogHome" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="min-h-screen hero bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">哈喽，我叫少年</h1>
            <p class="mb-5">一位热爱生活、xxxxxx开发者。</p>
            <button class="btn btn-link" @click="skip(1)">Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>