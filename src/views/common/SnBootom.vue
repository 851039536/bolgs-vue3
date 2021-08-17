<!--
 * @Author: 移动端导航栏
 * @Date: 2020-12-24 15:55:30
 * @LastEditTime: 2021-08-17 14:21:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\bootom.vue
-->
<template>
  <div class="SnBootom">
    <div class="flex justify-around SnBootom-1">
      <div class @click="skip(1)">首页</div>
      <div class @click="skip(2)">TG</div>
      <div class @click="skip(3)">One</div>
      <div class @click="skip(4)">视频</div>
      <div class @click="skip(5)">图库</div>
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
      const skip = (num: number) => {
        console.log(num)
        switch (num) {
          case 1:
            router.push('/index')
            break;
          case 2: router.push('/One')
            break;
          case 3: router.push('./Book')
            break;
          case 4: router.push('./SnVideo')
            break;
          case 5: router.push('./Photo')
            break;
          case 6: router.push('./index')
            break;
          case 7: router.push('./index')
            break;

          default:
            router.push('./index')
            break;
        }

      };
      return { ...toRefs(state), skip }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .SnBootom {
    @apply fixed bottom-0 w-full z-10;
    @apply bg-white shadow text-base;
    .SnBootom-1 {
      div {
        @apply px-2 py-3 m-2 text-center text-gray-700;
      }
    }
  }
</style>