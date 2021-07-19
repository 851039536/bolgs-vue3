<template>
  <div id="favorite">
    <!-- 侧边栏-->
    <Sidebarsn></Sidebarsn>
    <FavSidebar></FavSidebar>
    <!-- ---------- -->
    <div id="favorite_main" class="animate__animated animate__fadeIn">
      <!-- 网站分类 -->
      <div
        class="grid shadow 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4"
      >
        <div class="favorite_type" v-for="text in type" :key="text.id">
          <div class="favorite_type_name">
            <a @click="GetSnNavigation(text.title)">{{ text.title }}</a>
          </div>
        </div>
      </div>
      <!-- ---------- -->

      <!-- 网站内容 -->
      <div
        class="grid favorite_content 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      >
        <div class="favorite_content_text" v-for="info in text" :key="info.navId">
          <div class="favorite_content_text-1">
            <a @click="urltest(info.navUrl)">{{ info.navTitle }}</a>
          </div>
          <div class="favorite_content_text-2">{{ info.navText }}</div>
        </div>
      </div>

      <!-- ---------- -->
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, toRefs, onMounted } from "vue";
  import FavSidebar from './FavSidebar.vue';
  import { navigation } from '../../api/navigation';

  export default {
    components: { FavSidebar },
    name: "favorite",

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    position: fixed;
    @include w-h(100%, 100%);
    #favorite_main {
      @include initialize($w, 100%, $Text_height, null, $ml, null, #ffffff);
      @apply rounded;
      .favorite_type {
        @apply text-base   cursor-default  text-center;
        .favorite_type_name {
          background: #e5e7eb;
          @apply m-1 py-1 mt-2  rounded;
        }
      }

      .favorite_content {
        @include w-h(100%, 80%);
        overflow: auto;
        .favorite_content_text {
          @include w-h(89%, 88px);
          background-color: #f5f7fd;
          @apply mt-2 ml-2 antialiased  rounded-sm;
          .favorite_content_text-1 {
            @apply px-1 text-base font-semibold;
            @include line-ome;
          }

          .favorite_content_text-2 {
            height: 46px;
            @apply px-2 mt-2 mx-1 bg-white;
            @include line-number;
          }
        }
      }
    }
  }
</style>
