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
    <VmdContent
      :loading="state.spinning"
      :result="state.resultData.text"
    ></VmdContent>
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
        <div class="indextest_comment_text">{{ state.sortName }}</div>
        <div class="indextest_comment_text">
          {{ state.labelName }}
        </div>
        <div class>{{ state.time }}</div>
      </div>
    </div>
  </div>
  <!-- end 底部信息 -->
</template>

<script lang="ts">
import { article } from '@/api/index'
import { reactive, onMounted, defineComponent, defineAsyncComponent } from 'vue'
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
      labelName: string
      sortName: string
      time: any
      id: any
      spinning: boolean
    }
    const state: State = reactive({
      resultData: [],
      labelName: '',
      sortName: '',
      time: '',
      Sort: [],
      id: route.query.id,
      spinning: true,
    })

    // 加载内容
    const GetAll = async () => {
      await article.GetByIdAsync(state.id, true).then((res: any) => {
        state.time = tool.MomentTime(res.data[0].timeCreate)
        state.resultData = res.data[0]
        state.labelName = res.data[0].label.name
        state.sortName = res.data[0].sort.name
        UpRead(state.resultData)
        state.spinning = false
      })
    }

    async function UpRead(res: any) {
      if (res == null) {
        return
      } else {
        res.read++
        await article.UpdatePortionAsync(res, 'Read')
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
