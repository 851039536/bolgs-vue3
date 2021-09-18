<!--
 * @Author: your name
 * @Date: 2020-12-28 09:49:17
 * @LastEditTime: 2021-08-17 14:25:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\SnVideo\VideoSidebar.vue
-->
<template>
  <div class="video_sidebar">
    <div class="video_sidebar_main">
      <!-- 标签头部 -->
      <div class="video_s_m_top">
        <div class="video_s_m_top_title">
          <p class>燃向视频收集</p>
        </div>
      </div>

      <!-- 内容分类 -->
      <!-- <div class="sn-list5">
        <div class="sn-list5-1">分类</div>

        <div class="inline-flex" v-for="Sorts in Sort" :key="Sorts.id">
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Sorts.id)"
          >{{ Sorts.soTypeTitle }}</div>
        </div>
      </div>-->

      <div class="sn-list8">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1">视频信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">视频数量</div>
            <div class="sn-list8-2-1-2">{{count}}篇</div>
          </div>

          <!-- <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">1111k字</div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

  import { video } from '../../api/http/video';
  import { reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "VideoSidebar",
    components: {},
    setup() {
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Sort: [],
        article: [],
        //当前默认页
        barFixed: false,
        UserTalk: "",
        count: 0
      });


      const GetCountAsync = async () => {

        await video.GetCountAsync().then((res: any) => {
          state.count = res.data;
        })
      }
      const AsyGetTestID = (id: number) => {
        //       // .带参数跳转
        router.push({
          path: "/TalkText",
          query: {
            id: id,
          },
        });
      };
      onMounted(async () => {
        await GetCountAsync();
      });
      return { ...toRefs(state), AsyGetTestID, GetCountAsync };
    },
  };
</script>
<style lang="scss" scoped>
  @import "./scss/VideoSidebar.scss";
</style>
