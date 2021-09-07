<template>
  <div id="blogs" class="animate__animated animate__fadeIn">
    <blog-sidebar></blog-sidebar>
    <blogs-sidebar></blogs-sidebar>
    <a-back-top></a-back-top>
    <div class="blogs_main">
      <!-- 内容框 -->
      <div class="blogs_content" v-for="info in state.dataResult" :key="info.articleId">
        <div class="blogs_content_div">
          <div class="blogs_content_img">
            <!-- <img src="/img/blog/1.jpg" /> -->
            <img :src="info.urlImg" />
          </div>
          <div class="blogs_content__frame">
            <p class="blogs_content__frame-1">
              <a @click="jump(info.articleId)">{{ info.title }}</a>
            </p>
            <p class="blogs_content__frame-2">{{ info.titleText }}</p>
            <p class="blogs_content__frame-3">
              <span>文章</span>
              <span>{{ info.read }} ℃</span>
              <span>赞 {{ info.give }}</span>
              <span>{{ info.timeCreate.substring(0, 10) }}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- end 内容框  -->

      <!-- 分页 -->
      <div class="blogs-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        ></a-pagination>
      </div>
      <!-- end 分页 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { article } from '../../api/article';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlogsSidebar from './BlogsSidebar.vue';

interface State {
  dataResult: any, // 显示的数据
  page: number, //页码
  pagesize: number, //每页条数
  count: number, //总数
}

const state: State = reactive({
  dataResult: [],
  page: 1,
  pagesize: 10,
  count: 0,
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
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>