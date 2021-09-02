<!--
 * @Author: 顶部导航栏
 * @Date: 2020-12-08 09:59:05
 * @LastEditTime: 2021-09-02 08:23:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\BlogHeader.vue
-->
<template>
  <nav class="header-sn">
    <div class="header-sn-1">
      <!--  -->
      <div class="header_main">
        <div class="header-title">
          <span class="text-2xl font-medium tracking-tight">少年</span>
        </div>
        <div class="header_text">
          <template v-for="(item, index) in ResultList" :key="index">
            <a @click="skip(item.path)" v-if="item.identity">{{item.title}}</a>
          </template>
        </div>
      </div>
      <!--  -->
      <div class="header_text_1">
        <div class="header-text-r-1">
          <a @click="skip(13)">博客园</a>
          <a @click="skip(14)">Gitee</a>
        </div>
      </div>
    </div>
  </nav>
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