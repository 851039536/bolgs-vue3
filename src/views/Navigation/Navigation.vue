<!--
 * @Author: 导航站
 * @Date: 2020-12-14 14:35:41
 * @LastEditTime: 2021-01-03 14:58:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\Navigation\Navigation.vue
-->
<template>
  <div>
    <Sidebarsn></Sidebarsn>
    <IndexSidebar></IndexSidebar>
    <div class="n-nav animate__animated animate__fadeIn">
      <h5 class="px-2 py-2 m-1">网站导航 {{ count }}</h5>
      <div class="n-nav-text">
        <div v-for="info in text" :key="info.navId" class="n-nav-1">
          <div class="n-nav-1-1">
            <img v-bind:src="info.navImg" align="left" />
          </div>
          <div class="text-base font-semibold n-nav-1-2">
            <a @click="urltest(info.navUrl)">{{ info.navTitle }}</a>
          </div>
          <div class="n-nav-1-3">
            <p>
              {{ info.navText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  export default {
    name: "Navigation",
    components: {},

    // inject: ["count"],
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance(); //获取上下文实例，ctx=vue2的this
      const state = reactive({
        text: [],
      });

      const GetSnNavigation = async () => {
        //查询当前用户信息
        proxy
          .$api({
            url: "/api/SnNavigation/AsyGetWhereTest?type=网站&fag=true",
          })
          .then((res: any) => {
            state.text = res.data;
          })
          .catch((e: any) => {
            console.log(e + "获取数据失败");
          });
      };

      const urltest = async (url: any) => {
        //当前窗口跳转
        // self.location.href=url
        //新窗口跳转
        window.open(url);
      };

      onMounted(async () => {
        await GetSnNavigation();
      });
      return { ...toRefs(state), GetSnNavigation, urltest };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .n-nav {
    @include initialize($w, null, 60px, null, $ml, null, #ffffff);
    @apply shadow rounded-sm;

    .n-nav-text {
      @apply grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1;
      .n-nav-1 {
        @include w-h(null, 200px);
        @apply shadow rounded-sm;
        margin: 10px;
        .n-nav-1-1 {
          img {
            @include w-h(100%, 100%);
          }
        }
        .n-nav-1-2 {
          /*background-color: #1e7e34;*/
          padding: 5px;
        }
        .n-nav-1-3 {
          padding: 5px;
          /*background-color: #795da3;*/
          @include w-h(null, 42px);
          @include line-number;
        }
      }
    }
  }
</style>
