<template>
  <div id="FavSidebar">
    <div id="FavSidebar_main">
      <div class="FavSidebar_describe">
        <p class>各式各样网站收集分享</p>
      </div>
      <!--内容框-->
      <div class="FavSidebar_itme">
        <div class="FavSidebar_itme_1">最近添加</div>
        <div
          class="FavSidebar_itme_2"
          v-for="result in Navigation"
          :key="result.navId"
        >
          <div class="itme_1">
            {{ result.navTitle }}
            <span>{{ result.navType }}</span>
          </div>
        </div>
      </div>
      <!-- ---- -->
      <!-- 站点信息 -->
      <div class="FavSidebar_footer">
        <div class="FavSidebar_f_title">站点信息</div>
        <div class="FavSidebar_f_content">
          <div class="flex">
            <div class="FavSidebar_f_content_name">文章数量:</div>
            <div class="FavSidebar_f_content_text">{{ resultCount }}篇</div>
          </div>
        </div>
      </div>
      <!-- -------- -->
    </div>
  </div>
</template>

<script lang="ts">
import { navigation } from '../../api/http/navigation'
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'FavSidebar',
  components: {},
  setup() {
    const router = useRouter()
    // 加载路由
    // const route = useRoute();
    const state = reactive({
      Navigation: [],
      //当前默认页
      barFixed: false,
      resultCount: '',
    })

    const GetAll = async () => {
      await navigation.GetFyAllAsync('all', 1, 10, true).then((res: any) => {
        state.Navigation = res.data
      })
      await navigation.GetCountAsync().then((res: any) => {
        state.resultCount = res.data
      })
    }

    const AsyGetTestID = (id: number) => {
      //       // .带参数跳转
      router.push({
        path: '/TalkText',
        query: {
          id: id,
        },
      })
    }
    onMounted(async () => {
      await GetAll()
    })
    return { ...toRefs(state), GetAll, AsyGetTestID }
  },
}
</script>
<style lang="scss" scoped>
@import '../../design/methodCss';
@import '../../design/uitl';
#FavSidebar {
  position: fixed;
  @include excursion($Text_height, null, null, $sidebar_r_r);
  @include w-h(20%, 90%);
  @apply ml-3;
  #FavSidebar_main {
    @include w-h(100%, 100%);
    overflow: auto;
    .el-calendar-table .el-calendar-day {
      height: 44px !important;
    }
    .FavSidebar_describe {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply mb-2 shadow rounded text-center;
      p {
        @apply text-sm px-2 py-4 m-1 cursor-pointer;
      }
    }

    .FavSidebar_footer {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply p-1 mb-2 cursor-pointer shadow rounded;

      .FavSidebar_f_title {
        @apply p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer;
      }
      .FavSidebar_f_content {
        @apply text-sm m-2;
        .FavSidebar_f_content_name {
          @apply p-1;
          width: 35%;
        }
        .FavSidebar_f_content_text {
          width: 40%;
          @apply p-1;
        }
      }
    }

    .FavSidebar_itme {
      @include initialize(97%, null, auto, auto, auto, auto, #ffffff);
      @apply p-1 mb-2  shadow rounded;

      .FavSidebar_itme_1 {
        color: #1b1e21;
        @apply p-1 m-1 text-sm font-semibold bg-gray-200;
      }

      .FavSidebar_itme_2 {
        background-color: #f5f7fd;
        @apply m-1 cursor-pointer;
        div {
          @apply p-2;
        }
        .itme_1 {
          @apply text-base;
        }
      }
    }
  }
}
</style>
