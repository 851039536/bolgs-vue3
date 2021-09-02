<template>
  <div id="favorite">
    <!-- 加载组件 -->
    <blog-sidebar></blog-sidebar>
    <FavSidebar></FavSidebar>
    <a-back-top />
    <!-- end 加载组件 -->
    <div id="favorite_main" class="animate__animated animate__fadeIn">
      <!-- 分类列表 -->
      <div class="flex flex-wrap">
        <div class="favorite_type" v-for="text in type" :key="text.id">
          <div class="favorite_type_name">
            <a @click="GetSnNavigation(text.title)">{{ text.title }}</a>
          </div>
        </div>
      </div>
      <!-- end 分类列表 -->

      <!-- 网站内容 -->
      <div class="flex flex-wrap favorite_content">
        <div class="favorite_content_text" v-for="info in text" :key="info.navId">
          <div class="favorite_content_text-1">
            <a @click="urltest(info.navUrl)">{{ info.navTitle }}</a>
          </div>
          <div class="favorite_content_text-2">{{ info.navText }}</div>
        </div>
      </div>
      <!-- end 网站内容 -->

      <!-- 分页 -->
      <div class="IndexTitle-page">
        <a-pagination
          size="small"
          @change="currentchange"
          :total="count"
          :pageSize="pagesize"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, toRefs, onMounted } from "vue";
  import FavSidebar from './FavSidebar.vue';
  import { navigation } from '../../api/navigation';

  export default {
    components: { FavSidebar },
    name: "Favorite",
    setup() {
      // 数据定义
      const state = reactive({
        text: [],
        type: []
      });
      const GetSnNavigation = (name: string) => {
        navigation.GetSnNavigationTypeSAllAsync().then((res: any) => {
          state.type = res.data;
        })
        navigation.GetTypeOrderAsync(name).then((res: any) => {
          state.text = res.data;
        })

      };
      const urltest = (url: string) => {
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
  @import "../../assets/sass/uitl";

  #favorite {
    @apply w-full h-full;
    #favorite_main {
      @include initialize($w, 100%, 3.6%, null, $ml, null, #ffffff);
      @apply rounded shadow;
      .favorite_type {
        @apply text-base cursor-default text-center;
        .favorite_type_name {
          background: #e5e7eb;
          @apply m-1  px-2   rounded;
        }
      }

      .favorite_content {
        @apply w-full h-full m-auto;
        .favorite_content_text {
          @include w-h(31%, 100px);
          @apply m-auto;
          background-color: #f5f7fd;
          @apply mt-2 ml-2   rounded-sm;
          .favorite_content_text-1 {
            @apply px-1 text-base font-semibold;
            height: 25%;
            @include line-ome;
          }

          .favorite_content_text-2 {
            height: 65%;
            @apply px-2 mt-2 mx-1 bg-white;
            @include line-numbers(3);
          }
        }
      }
    }
  }
</style>
