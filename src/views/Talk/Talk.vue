<template>
  <div>
    <!--侧边栏-->
    <blog-sidebar></blog-sidebar>
    <TalkSidebar></TalkSidebar>
    <div class="talk animate__animated animate__fadeIn">
      <!--文章内容-->
      <div class="talk-text">
        <div class="text-carousel">
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; zindex: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div>
              <!-- <img src="@/assets/img/bg.jpg" /> -->
            </div>
            <div>
              <!-- <img src="@/assets/img/bg.jpg" /> -->
            </div>
            <div>
              <!-- <img src="@/assets/img/bg.jpg" /> -->
            </div>
            <div>
              <!-- <img src="@/assets/img/bg.jpg" /> -->
            </div>
          </a-carousel>

          <div class="text-carousel-1">
            <h4>Junior</h4>
          </div>
        </div>

        <div class="text-title" v-for="data in dataShow" :key="data.id">
          <div class="text-title-1">
            {{
              data.talkTime
                .toLocaleString()
                .replace(/T/g, ' ')
                .replace(/\.[\d]{3}Z/, '')
            }}
            <a @click="GetTalkid(data.id, data.userId)">《{{ data.talkTitle }}》</a>
          </div>
          <div class="text-title-2" v-if="data.userId != 0" v-html="data.talkText"></div>
        </div>

        <!--分页-->
        <div class="text-page">
          <div>
            <a-pagination size="small" @change="currentchange" :total="count" :pageSize="pagesize" show-quick-jumper />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import 'highlight.js/styles/googlecode.css'
  import hljs from 'highlight.js' //导入代码高亮文件
  import marked from 'marked' //解析器
  import { getCurrentInstance, reactive, toRefs, onMounted, onUpdated } from 'vue'
  import { useRouter } from 'vue-router'
  import TalkSidebar from './TalkSidebar.vue'
  import { message } from 'ant-design-vue'
  import { tool } from '@/utils/common/tool'

  export default {
    name: 'Talk',
    components: { TalkSidebar },
    setup() {
      const { proxy }: any = getCurrentInstance() //获取上下文实例，ctx=vue2的this
      const router = useRouter()
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        dataShow: [], // 当前显示的数据
        page: 1, //当前页码
        pagesize: 8, //每页的数据条数
        count: 0, //默认数据总数
        blog: []
      })

      const getCount = async () => {
        proxy
          .$api({
            url: '/api/SnTalk/CountAsync'
          })
          .then((res: any) => {
            state.count = res.data
          })
      }
      const AsyGetTest = async () => {
        proxy
          .$api({
            url: '/api/SnTalk/GetFyAllAsync?pageIndex=' + state.page + '&pageSize=' + state.pagesize + '&isDesc=true'
          })
          .then((res: any) => {
            state.dataShow = res.data
            state.dataShow = marked(res.data)
          })
      }
      // 代码高亮
      const highlighthandle = async () => {
        await hljs
        let highlight = document.querySelectorAll('code,pre')
        highlight.forEach((block: any) => {
          hljs.highlightBlock(block)
        })
      }
      const GetTalkid = async (id: number, userid: number) => {
        if (userid != 0) {
          // .带参数跳转
          await router.push({
            path: '/TalkText',
            query: {
              id: id
            }
          })
        } else {
          message.info('无权限!')
        }
      }

      const currentchange = async (val: any) => {
        state.page = val
        AsyGetTest()
        await tool.BackTop()
      }

      onMounted(async () => {
        await getCount()
        await AsyGetTest()
      })
      onUpdated(async () => {
        await highlighthandle()
      })
      return {
        ...toRefs(state),
        getCount,
        AsyGetTest,
        GetTalkid,
        currentchange,
        highlighthandle
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './scss/Talk.scss';
</style>
