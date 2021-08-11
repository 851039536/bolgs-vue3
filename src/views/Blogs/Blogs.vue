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
        :key="info.articleId"
      >
        <div class="flex software_content_div">
          <div class="software_content_img">
            <!-- <img src="/img/blog/1.jpg" /> -->
            <img :src="info.urlImg" />
          </div>
          <div class="oftware_content__frame">
            <p class="oftware_content__frame-1">
              <a @click="jump(info.articleId)">{{ info.title }}</a>
            </p>
            <p class="oftware_content__frame-2">{{ info.titleText }}</p>

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
  import { useRouter } from "vue-router";
  // import OneSidebar from "./OneSidebar.vue";
  import { article } from '../../api/article';
  import FavSidebar from '../Navigation/FavSidebar.vue';
  export default {
    name: "Blogs",
    components: { FavSidebar },
    setup(): { jump: (id: number) => void; GetFySortTitleAsync: () => void; ConutSort: () => void; currentchange: (val: number) => void; backtop: () => void; } {
      const state: any = reactive({

        dataResult: [], // 显示的数据
        page: 1, //页码
        pagesize: 7, //每页条数
        count: 0, //总数
      });

      const router = useRouter();

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
      async function jump(id: number): Promise<void> {
        await router.push({
          path: "/IndexText",
          query: {
            id: id,
          },
        });
      }
      onMounted(async () => {
        await ConutSort();
        await GetFySortTitleAsync();
      });
      return { ...toRefs(state), GetFySortTitleAsync, ConutSort, currentchange, backtop, jump };
    },
  };
</script>

<style lang="scss" scoped>
  @import "./scss/Blogs.scss";
</style>