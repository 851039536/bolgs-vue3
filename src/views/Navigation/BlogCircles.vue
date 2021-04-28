<template>
  <div class="BlogCircless">
    <Sidebarsn></Sidebarsn>
    <IndexSidebar></IndexSidebar>
    <div class="BlogCircles animate__animated animate__fadeIn">
      <div class="font-extrabold BlogCircles-2">博客圈</div>
      <div
        class="grid BlogCircles-1s 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="BlogCircles-1" v-for="data in text" :key="data.navId">
          <div class="BlogCircles-1-1">
            <!-- <img src="图片的url地址" alt="图片XX" onerror="this.src='默认图片的url地址;this.οnerrοr=null'"/>   -->
            <img
              :src="data.navImg"
              alt=""
              onerror="this.style.display='none'"
            />
          </div>
          <div class="BlogCircles-1-2">
            <div class="BlogCircles-1-2-1">
              <a @click="urltest(data.navUrl)">{{ data.navTitle }}</a>
            </div>
            <div class="BlogCircles-1-2-2">{{ data.navText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  export default {
    components: {},
    name: "BlogCircles",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      //获取上下文实例，ctx=vue2的this
      const { proxy }: any = getCurrentInstance();
      const state = reactive({
        text: [],
      });
      const GetSnNavigation = () => {
        proxy
          .$api({
            url: "/api/SnNavigation/GetTypeOrderAsync?type=博客圈&order=true",
          })
          .then((res: any) => {
            state.text = res.data;
          })
          .catch((e: never) => {
            console.log(e + "获取数据失败");
          });
      };
      const urltest = (url: string) => {
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
  @import "../../assets/sass/uitl";

  .BlogCircless {
    position: fixed;
    @include w-h(100%, 100%);
    .BlogCircles {
      @include initialize($w, 94%, $Text_height, null, $ml, null, #ffffff);
      @apply shadow-sm rounded-sm;

      // 导航窗体小
      .BlogCircles-1 {
        @include w-h(200px, 90px);
        @apply m-1 ml-1 shadow rounded hover:bg-gray-50;
        .BlogCircles-1-1 {
          @include w-h(40%, 99%);
          @apply p-1;
          //background-color: red;
          float: left;

          img {
            @include w-h(100%, 100%);
            @apply rounded-full;
          }
        }

        .BlogCircles-1-2 {
          float: right;
          @include w-h(60%, 100%);
          /*background-color: #95999c;*/

          .BlogCircles-1-2-1 {
            // background-color: #4eb687;
            @apply text-base p-1 pt-2;
            @include line-ome;
            /*动态下划线*/
            position: relative;
            text-decoration: none;

            &:hover {
              cursor: pointer;
            }

            &::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #7f828f;
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.3s ease-in-out 0s;
            }

            &:hover::before {
              visibility: visible;
              transform: scaleX(1);
            }
          }

          .BlogCircles-1-2-2 {
            /*background-color: #00FFFF;*/
            @apply px-1 pt-3;
            @include line-ome;
          }
        }
      }
      .BlogCircles-2 {
        @apply text-lg font-normal pl-2 bg-gray-50 shadow-sm;
      }

      .BlogCircles-1s {
        @include w-h(100%, 90%);
        overflow: auto;
      }
      .BlogCircles-1s::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>