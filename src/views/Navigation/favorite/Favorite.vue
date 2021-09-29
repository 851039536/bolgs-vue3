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
        <div class="favorite_type" v-for="text in state.type" :key="text.id">
          <div class="favorite_type_name">
            <a @click="GetAll(text.title)">{{ text.title }}</a>
          </div>
        </div>
      </div>
      <!-- end 分类列表 -->

      <!-- 网站内容 -->
      <div class="flex flex-wrap favorite_content">
        <div
          class="favorite_content_text"
          v-for="info in state.text"
          :key="info.navId"
        >
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
          :total="state.count"
          :pageSize="state.pagesize"
          :current="state.current"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, defineComponent } from 'vue'
import FavSidebar from './FavSidebar.vue'
import { navigation } from '@/api/index'

export default defineComponent({
  components: { FavSidebar },
  setup() {
    interface State {
      text: any
      type: any
      page: number
      pagesize: number
      count: number
      title: string
      current: number
    }
    const state: State = reactive({
      text: [],
      type: [],
      page: 1,
      pagesize: 12,
      count: 0,
      title: '',
      current: 1,
    })
    const GetAll = async (name: string) => {
      state.title = name
      state.current = 1
      await navigation.CountType(state.title, true).then((res: any) => {
        state.count = res.data
      })

      await navigation.GetSnNavigationTypeSAllAsync().then((res: any) => {
        state.type = res.data
      })
      await navigation
        .GetFyAllAsync(name, state.page, state.pagesize, true, true)
        .then((res: any) => {
          state.text = res.data
        })
    }

    const currentchange = async (val: number) => {
      state.current = val
      await navigation
        .GetFyAllAsync(state.title, val, state.pagesize, true, true)
        .then((res: any) => {
          state.text = res.data
        })
    }
    const urltest = (url: string) => {
      window.open(url)
    }
    onMounted(async () => {
      await GetAll('文档')
    })
    return { state, GetAll, urltest, currentchange }
  },
})
</script>

<style lang="scss" scoped>
@import '@/design/methodCss';
@import '@/design/uitl';

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

        @apply mt-2 ml-2 mb-2  rounded-sm;

        .favorite_content_text-1 {
          @apply px-1 text-base font-semibold;

          height: 25%;

          @include line-one;
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
