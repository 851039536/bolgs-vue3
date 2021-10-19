<template>
  <!-- 通用组件 -->
  <blog-sidebar></blog-sidebar>
  <IndexSidebar></IndexSidebar>
  <a-back-top />
  <SAspin></SAspin>
  <!-- end 通用组件 -->

  <div class="indextext">
    <!--标题-->
    <div class="indexText_title">
      <a-page-header
        :title="state.resultData.title"
        @back="() => router.back()"
      />
    </div>
    <!-- end 标题 -->

    <!--内容-->
    <VmdContent :loading="state.spinning" :result="state.blog"></VmdContent>
    <!-- end 内容 -->

    <!--底部信息-->
    <div class="indextest_copyright">
      <div class="indextest_copyright_title">
        <!-- <div>版权属于：少年</div> -->
        <div class="text">本文链接：原创文章转载请注明</div>
        <!-- <div>
          作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
          进行许可
        </div>-->
      </div>
      <div class="indextest_comment">
        <div class>
          <a @click="UpGive">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-qinggan
"
              />
            </svg>
            {{ state.resultData.give }}
          </a>
        </div>
        <div>{{ state.resultData.read }} ℃</div>
        <div class="indextest_comment_text">{{ state.Sort.sortName }}</div>
        <div class="indextest_comment_text">{{ state.Labels.labelName }}</div>
        <div class>{{ state.resultData.timeCreate }}</div>
      </div>
    </div>
  </div>
  <!-- end 底部信息 -->
</template>

<script lang="ts">
import { article, labels, sort } from '@/api/index'
import {
  reactive,
  onMounted,
  defineComponent,
  defineAsyncComponent,
  ref,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tool } from '@/utils/common/tool'
import { throttle } from '@/utils/common/dethrottle'
import { message } from 'ant-design-vue'
import SAspin from '@/components/aspin/sAspin.vue'

export default defineComponent({
  name: 'IndexText',
  components: {
    VmdContent: defineAsyncComponent(() =>
      import('@/components/editor/VmdContent.vue')
    ),
    SAspin,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    interface State {
      resultData: any
      Labels: any
      Sort: any
      id: any
      blog: string
      spinning: boolean
    }
    const state: State = reactive({
      resultData: [],
      Labels: [],
      Sort: [],
      id: route.query.id,
      blog: '',
      spinning: true,
    })

    // 加载内容
    const GetAll = async () => {
      await article.GetByIdAsync(state.id, false).then((res: any) => {
        state.resultData = res.data
        GetByIdAsync(state.resultData.labelId)
        GetSortById(state.resultData.sortId)
        UpRead(state.resultData)
        state.blog = state.resultData.text
        state.spinning = false
      })
    }
    const GetByIdAsync = (id: number) => {
      labels.GetByIdAsync(id).then((result: any) => {
        state.Labels = result.data
      })
    }

    const GetSortById = (id: number) => {
      sort.GetByIdAsync(id).then((result: any) => {
        state.Sort = result.data
      })
    }

    async function UpRead(info: any) {
      if (info == null) {
        return
      } else {
        info.read++
        await article.UpdatePortionAsync(info, 'Read')
      }
    }

    const UpGive = throttle(() => {
      message.info('已点赞')
      state.resultData.give++
      article.UpdatePortionAsync(state.resultData, 'Give')
    }, 1000)

    onMounted(async () => {
      await GetAll()
      await tool.BackTop()
    })
    return {
      router,
      state,
      UpGive,
    }
  },
})
</script>

<style lang="scss">
@import './index.scss';
</style>
