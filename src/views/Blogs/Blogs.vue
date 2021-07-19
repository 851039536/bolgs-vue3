<template>
  <div id="software">
    <Sidebarsn></Sidebarsn>
    <fav-sidebar></fav-sidebar>
    <div class="software_main animate__animated animate__fadeIn">
      <!-- ---------------------------------- -->

      <!-- 内容框 -->

      <div
        class="software_content"
        v-for="(info, index) in dataResult"
        :class="{ alt: index % 2 == 1 }"
        :key="info.article_id"
      >
        <div class="flex software_content_div">
          <div class="software_content_img">
            <img
              src="https://media.creatorsdaily.com/QmVbZPz82JrqYkVnyfMeRuTkrbDQyyQWAQYNntqc7BuSR7-160-160-contain"
            />
          </div>
          <div class="oftware_content__frame">
            <p class="oftware_content__frame-1">
              <a @click="setModal1Visible(true, data.oneId)">{{ info.title }}</a>
            </p>
            <p class="oftware_content__frame-2">{{ info.title_text }}</p>

            <p class="oftware_content__frame-3">
              <span>剧本</span>
              <span>测试</span>
              <span>热度</span>
              <span>测试</span>
              <span>测试</span>
            </p>
          </div>
        </div>
      </div>
      <!-- ------ -->
      <!------------------------分页-------------->
      <div class="IndexTitle-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="count"
          :pageSize="pagesize"
          show-quick-jumper
        />
      </div>
      <!---------------------------------------------------------------------------->
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, toRefs, onMounted } from "vue";
  // import OneSidebar from "./OneSidebar.vue";
  import { article } from '../../api/article';
  import FavSidebar from '../Navigation/FavSidebar.vue';
  export default {
    name: "Blogs",
    components: { FavSidebar },
    setup(): { GetFySortTitleAsync: () => void; ConutSort: () => void; currentchange: (val: number) => void; backtop: () => void; } {
      const state: any = reactive({

        dataResult: [], // 显示的数据
        page: 1, //页码
        pagesize: 7, //每页条数
        count: 0, //总数
      });



      async function GetFySortTitleAsync(): Promise<void> {
        await article.GetFySortTitleAsync(state.page, state.pagesize).then((result: any) => {
          state.dataResult = result.data;
        });
      }
      async function ConutSort(): Promise<void> {
        await article.ConutSort(7).then((result: any) => {
          state.count = result.data;
        });
      }
      async function currentchange(val: number): Promise<void> {
        state.page = val;
        GetFySortTitleAsync();
        await backtop(); //回到顶部
      }
      const backtop = async () => {
        {

          var timer = setInterval(function () {
            let osTop =
              document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop =
              osTop + ispeed;
            // this.isTop = true;
            if (osTop === 0) {
              clearInterval(timer);
            }
          }, 30);
          //utils.backtop();
        }
      };

      onMounted(async () => {
        await ConutSort();
        await GetFySortTitleAsync();
      });
      return { ...toRefs(state), GetFySortTitleAsync, ConutSort, currentchange, backtop };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  #software {
    // position: fixed;
    @include w-h(100%, 100%);
    .software_main {
      @include initialize($w, 90%, $Text_height, null, $ml, null, #fafafa);
      @apply shadow-sm rounded-sm;
      overflow: auto;

      .software_content {
        @apply m-2;
        .software_content_div {
          // position: relative;
          @include initialize(100%, 125px, 10px, null, null, null, #ffffff);
          @apply shadow rounded-sm cursor-pointer;

          .software_content_img {
            @include w-h(20%, 100%);
            @apply p-2;
            img {
              @include w-h(100%, 100%);
            }
          }
          .oftware_content__frame {
            @include w-h(80%, 100%);
            .oftware_content__frame-1 {
              @apply m-1 px-1 text-base font-semibold;
              @include line-ome;
            }

            .oftware_content__frame-2 {
              @apply px-2  m-1 p-1 text-sm font-thin;
              height: 51%;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
            }

            .oftware_content__frame-3 {
              @apply m-1 px-1  font-semibold;
              span {
                @apply p-1;
              }
            }
          }
        }
      }
    }
  }

  .IndexTitle-page {
    width: 100%;
    @apply py-5 bg-white shadow rounded;
  }
  @screen xp {
  }
</style>