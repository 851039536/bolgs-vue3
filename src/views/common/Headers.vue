<template>
  <div>
    <nav class="header-sn">
      <div class="flex items-center flex-shrink-0 text-black">
        <span class="text-2xl font-medium tracking-tight">少年</span>
      </div>
      <div class="header_main">
        <div class="header_text">
          <template v-for="(item, index) in ResultList" :key="index">
            <a @click="onk(item.path)" v-if="item.identity">
              <!-- <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-" />
              </svg>-->
              {{item.title}}
            </a>
          </template>
          <!-- <a @click="onk(1)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-icon-" />
            </svg>
            主页
          </a>
          <a @click="onk(2)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan
" />
            </svg>
            博文
          </a>-->
          <!-- <a @click="onk(5)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan
            " />
            </svg>
            时间线
          </a>-->
          <!-- <a @click="onk(6)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-tupian" />
            </svg>
            图册
          </a>
          <a @click="onk(7)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-daohang1" />
            </svg>
            导航
          </a>
          <a @click="onk(8)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-guanyuwomen
" />
            </svg>
            关于
          </a>-->

          <!-- <a @click="onk(9)">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-24" />
            </svg>
            日志
          </a>-->

          <!-- <a @click="onk(12)" class="header_text_text">留言</a> -->
          <a @click="onk(13)" class="header_text_text">博客园</a>
          <a @click="onk(14)" class="header_text_text">Gitee</a>
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
    name: "Headers",
    setup(): { onk: (num: any) => Promise<void>; queryAll: () => Promise<void>; } {

      const state: any = reactive({
        ResultList: [],

      });
      const router = useRouter();
      const onk = async (num: any) => {

        router.push({
          path: num,
          query: {
            t: +new Date()
          }
        })
        switch (num) {

          case 13:
            window.open("https://www.cnblogs.com/ouyangkai/");
            break;
          case 14:
            window.open("https://gitee.com/kaiouyang-sn");
            break;
          case 15:
            router.push("./SnVideo");
            break;

        }
      };
      const queryAll = async () => {
        await interfaces.GetTypeAsync(4, 1).then((res: any) => {
          state.ResultList = res.data;
        })
      };
      onMounted(async () => {
        await queryAll();
      });
      return {
        ...toRefs(state),
        queryAll,
        onk,

      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "./scss/Headers.scss";
</style>