<template>
  <div class="PersonalNavigations">
    <div class="PersonalNavigation animate__animated animate__fadeIn">
      <div class="flex flex-row">
        <div class="PersonalNavigation-2" v-for="text in type" :key="text.id">
          <div class="PersonalNavigation-2-1">
            <a @click="GetSnNavigation(text.title)">{{ text.title }}</a>
          </div>
        </div>
      </div>
      <div
        class="inline-grid col-gap-3 PersonalNavigation-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div
          class="PersonalNavigation-text"
          v-for="info in text"
          :key="info.navId"
        >
          <div class="PersonalNavigation-text-1">
            <a @click="urltest(info.navUrl)">{{ info.navTitle }}</a>
          </div>
          <div class="PersonalNavigation-text-2">{{ info.navText }}</div>
        </div>
      </div>
    </div>
    <!--        侧边栏-->
    <Sidebarsn></Sidebarsn>
    <FavSidebar></FavSidebar>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  import FavSidebar from './FavSidebar.vue';

  export default {
    components: { FavSidebar },
    name: "PersonalNavigation",

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      //获取上下文实例，ctx=vue2的this
      const { proxy }: any = getCurrentInstance();
      // 数据定义
      const state = reactive({
        text: [],
        type: []
      });
      const GetSnNavigation = (name: string) => {
        proxy.$api
          .all([
            //查询标签
            proxy.$api.get("/api/SnNavigation/AsyGetWhereTest?type=" + name + "&fag=true"),
            //查询分类
            proxy.$api.get(
              "/api/SnNavigationType/GetAllAsync"
            ),
          ])
          .then(
            proxy.$api.spread(
              (
                res1: any,
                res2: any,
              ) => {
                state.text = res1.data;
                state.type = res2.data;
              }
            )
          )
          .catch((err: any) => {
            console.log(err);
          });
      };
      const urltest = (url: string) => {
        //当前窗口跳转
        // self.location.href=url
        //新窗口跳转
        window.open(url);
      };
      onMounted(async () => {
        await GetSnNavigation("收藏");
      });
      return { ...toRefs(state), GetSnNavigation, urltest };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .PersonalNavigations {
    position: fixed;
    @include w-h(100%, 100%);
    .PersonalNavigation {
      @include initialize($w, 100%, 60px, null, $ml, null, #ffffff);
      @apply shadow-sm;
      .PersonalNavigation-2 {
        /*background-color: #FFFFFF;*/
        @apply text-lg font-bold py-1 ml-2 mt-1 px-1  rounded-sm;
        .PersonalNavigation-2-1 {
          @apply p-1 m-1 cursor-default text-sm;
        }
      }

      .PersonalNavigation-1 {
        @include w-h(100%, 82%);
        /*background-color: #004085;*/
        overflow: auto;
        .PersonalNavigation-text {
          @include w-h(89%, 100px);
          @apply mt-3;
          @apply ml-2 antialiased shadow rounded-sm;
          @apply hover:bg-gray-50;
          .PersonalNavigation-text-1 {
            @apply p-1 text-base;

            @include line-ome;
          }

          .PersonalNavigation-text-2 {
            // background-color: #155724;
            height: 50px;
            @apply p-1  mt-3;
            @include line-number;
          }
        }
      }
    }
  }
</style>
