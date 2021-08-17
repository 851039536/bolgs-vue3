<!--
 * @Author: 顶部导航栏
 * @Date: 2020-12-08 09:59:05
 * @LastEditTime: 2021-08-17 14:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\BlogHeader.vue
-->
<template>
  <div>
    <nav class="header-sn">
      <div class="flex items-center flex-shrink-0 text-black">
        <span class="text-2xl font-medium tracking-tight">少年</span>
      </div>
      <div class="header_main">
        <div class="header_text">
          <template v-for="(item, index) in ResultList" :key="index">
            <a @click="skip(item.path)" v-if="item.identity">
              <!-- <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-" />
              </svg>-->
              {{item.title}}
            </a>
          </template>

          <a @click="skip(13)" class="header_text_text">博客园</a>
          <a @click="skip(14)" class="header_text_text">Gitee</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
  import { useRouter } from "vue-router";
  import { interfaces } from '../../api/interfaces';
  import {
    reactive,
    toRefs,
    onMounted,
  } from "vue";
  export default {
    name: "BlogHeader",
    setup(): { skip: (num: any) => Promise<void>; GetType: () => Promise<void>; } {

      const state: any = reactive({
        ResultList: [],
      });
      const router = useRouter();
      const skip = async (num: any) => {
        switch (num) {
          case 13:
            window.open("https://www.cnblogs.com/ouyangkai/");
            break;
          case 14:
            window.open("https://gitee.com/kaiouyang-sn");
            break;
          default:
            router.push({
              path: num,
              query: {
                t: +new Date()
              }
            })
            break;
        }
      };
      const GetType = async () => {
        await interfaces.GetTypeAsync(4, 1).then((res: any) => {
          state.ResultList = res.data;
        })
      };
      onMounted(async () => {
        await GetType();
      });
      return {
        ...toRefs(state),
        GetType,
        skip,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "./scss/BlogHeader.scss";
</style>