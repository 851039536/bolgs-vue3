<!--
 * @Author: your name
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-08-06 15:28:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Home.vue
-->

<template>
  <div id="home" class="animate__animated animate__fadeIn">
    <div class="home_main">
      <div class="home_main_top">
        <div class="home_introduce">
          <p class="home_introduce-1 animate__animated animate__slideInDown">你好，</p>
          <p class="home_introduce-2 animate__animated animate__slideInLeft">
            叫我少年
            。
          </p>
          <p
            class="home_introduce-3 animate__animated animate__slideInLeft animate__slideInRight"
          >一位热爱生活、xxxxxx开发者。</p>
          <p class="home_introduce-4 animate__animated animate__jackInTheBox">很高兴与你相遇！</p>
        </div>
      </div>
      <div class="flex home_enter animate__animated animate__slideInUp">
        <div class="home_enter-1">
          <button @click="onk(1)">进入</button>
        </div>
        <div class="home_enter-2">
          <button @click="onk(2)">关于</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  export default {
    name: "Home",
    setup(): { onk: (num: any) => Promise<void>; } {
      const router = useRouter();
      let onk = async (num: any) => {
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
        onk,
      };
    },
  };
</script>
<style lang="scss" scoped>
  @import "./scss/Home.scss";
</style>