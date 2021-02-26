<!--
 * @Author: your name
 * @Date: 2020-12-24 15:55:30
 * @LastEditTime: 2021-02-26 14:45:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\bootom.vue
-->
<template>
  <div class="SnBootom">
    <div class="flex justify-around SnBootom-1">
      <div class="" @click="onk(1)">首页</div>
      <div class="" @click="onk(2)">日志</div>
      <div class="" @click="onk(3)">一文</div>
      <div class="" @click="onk(4)">视频</div>
      <div class="" @click="onk(5)">书单</div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    reactive,
    toRefs,
  } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "SnBootom",

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      // 加载路由
      const router = useRouter();
      // 数据定义
      const state: any = reactive({
        id: 0,
      });
      const onk = (num: number) => {
        console.log(num)
        switch (num) {
          case 1:
            router.push('/Indexs')
            break;
          case 2: router.push('/Talk')
            break;
          case 3: router.push('./One')
            break;
          case 4: router.push('./SnVideo')
            break;
          case 5: router.push('./Indexs')
            break;
          case 6: router.push('.Indexs')
            break;
          case 7: router.push('./Indexs')
            break;

          default:
            router.push('./Indexs')
            break;
        }

      };
      return { ...toRefs(state), onk }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .SnBootom {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
    @apply bg-white shadow text-base;
    .SnBootom-1 {
      div {
        @apply px-2 py-3 m-2 text-center text-gray-700 hover:text-red-400;
      }
    }
  }
</style>