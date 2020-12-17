<template>
  <div class="PersonalNavigations">
    <div class="PersonalNavigation animate__animated animate__fadeIn">
      <div class="flex PersonalNavigation-2">
        <div class="PersonalNavigation-2-1">
          <a @click="GetSnNavigation('VUE')">VUE</a>
        </div>
        <div class="PersonalNavigation-2-1">
          <a @click="GetSnNavigation('CSS')">CSS</a>
        </div>
        <div class="PersonalNavigation-2-1">
          <a @click="GetSnNavigation('NET')">Net</a>
        </div>
        <div class="PersonalNavigation-2-1">
          <a @click="GetSnNavigation('javascript')">javascript</a>
        </div>
        <div class="PersonalNavigation-2-1">
          <a @click="GetSnNavigation('个人工具')">个人工具</a>
        </div>
      </div>
      <div
        class="inline-grid col-gap-4 PersonalNavigation-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
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
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";

export default {
  name: "PersonalNavigation",

  setup() {
    //获取上下文实例，ctx=vue2的this
    const { proxy }: any = getCurrentInstance();
    // 数据定义
    const state = reactive({
      text: [],
    });
    const GetSnNavigation = (name: string) => {
      proxy
        .$api({
          url: "/api/SnNavigation/AsyGetWhereTest?type=" + name + "&fag=true",
        })
        .then((res: any) => {
          state.text = res.data;
        })
        .catch((e: never) => {
          console.log(e + "获取数据失败");
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
      @include initialize(75%, 100%, 60px, null, 22%, null, #ffffff);
      @apply shadow-sm;
      .PersonalNavigation-2 {
        /*background-color: #FFFFFF;*/
        @apply bg-gray-200  font-bold py-1 px-3 rounded-sm shadow;
        .PersonalNavigation-2-1 {
          @apply p-1 m-1 cursor-default text-sm;
        }
      }

      .PersonalNavigation-1 {
        @include w-h(100%, 82%);
        /*background-color: #004085;*/
        overflow: auto;
        .PersonalNavigation-text {
          @include w-h(85%, 102px);
          @apply m-2;
          @apply ml-5 shadow rounded-sm;

          .PersonalNavigation-text-1 {
            @apply p-1 text-base bg-gray-100;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
