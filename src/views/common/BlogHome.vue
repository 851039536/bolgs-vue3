<!--
 * @Author: 自我介绍
 * @Date: 2021-07-14 15:00:34
 * @LastEditTime: 2021-09-10 09:36:16
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
            <button class="btn btn-link" @click="Routers('/Blogs')">Go</button>
            <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { Routers } from "../../hooks/index";

export default defineComponent({
  setup() {
    let warn = async (message: any, event: any) => {
      // 现在可以访问到原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
    return {
      Routers,
      warn,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "index.scss";
</style>