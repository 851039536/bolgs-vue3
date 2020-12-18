<template>
  <div class="BlogCircless">
    <Sidebarsn></Sidebarsn>
    <IndexSidebar></IndexSidebar>
    <div class="BlogCircles animate__animated animate__fadeIn">
      <div class="font-extrabold BlogCircles-2">博客圈</div>
      <div
        class="inline-grid col-gap-3 BlogCircles-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="BlogCircles-1" v-for="info in text" :key="info.navId">
          <div class="BlogCircles-1-1">
            <!-- <img src="图片的url地址" alt="图片XX" onerror="this.src='默认图片的url地址;this.οnerrοr=null'"/>   -->
            <img
              :src="info.navImg"
              alt=""
              onerror="this.style.display='none '"
            />
          </div>
          <div class="BlogCircles-1-2">
            <div class="BlogCircles-1-2-1">
              <a @click="urltest(info.navUrl)">{{ info.navTitle }}</a>
            </div>
            <div class="BlogCircles-1-2-2">{{ info.navText }}</div>
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
    // 数据定义
    const state = reactive({
      text: [],
    });
    const GetSnNavigation = () => {
      proxy
        .$api({
          // url: '/api/SnNavigation/GetSnNavigation'
          url: "/api/SnNavigation/AsyGetWhereTest?type=博客圈&fag=true",
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
      await GetSnNavigation();
    });
    return { ...toRefs(state), GetSnNavigation, urltest };
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .BlogCircless {
    position: fixed;
    @include w-h(100%, 100%);
    .BlogCircles {
      @include initialize(50%, 94%, 60px, null, 22%, null, #ffffff);
      @apply shadow-sm rounded-sm;
      .BlogCircles-1 {
        @include w-h(200px, 80px);
        @apply m-1 ml-3 shadow rounded;
        .BlogCircles-1-1 {
          @include w-h(35%, 99%);
          @apply pt-1;
          /*background-color: red;*/
          float: left;

          img {
            @include w-h(100%, 100%);
            @apply rounded-full;
          }
        }

        .BlogCircles-1-2 {
          float: right;
          width: 65%;
          height: 100%;
          /*background-color: #95999c;*/

          .BlogCircles-1-2-1 {
            // background-color: #4eb687;
            @apply text-base p-1 pt-2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

      .BlogCircles-2 {
        padding: 7px;
      }

      .BlogCircles-1s {
        height: 90%;
        width: 100%;
        overflow: auto;
      }
      .BlogCircles-1s::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>