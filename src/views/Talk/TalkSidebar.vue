<template>
  <div class="TalkSidebar" id="sn-list" :class="{ isFixed: barFixed }">
    <div class="TalkSidebar-text">
      <div class="sn-list4">
        <div class="sn-list4-1">
          <p class>{{ UserTalk }}</p>
        </div>
      </div>
      <!--内容框-->
      <div class="TalkSidebar-text-4">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 TalkSidebar-text-4-1">推荐内容</div>

        <div class="TalkSidebar-text-4-2" v-for="data in article" :key="data.id">
          <div class="TalkSidebar-text-4-2-1">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-liulan
"
              />
            </svg>
            <a @click="AsyGetTestID(data.id, data.userId)">{{ data.talkTitle }}</a>
          </div>
        </div>
      </div>
      <div class="sn-list5">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list5-1">分类</div>

        <div class="inline-flex cursor-pointer" v-for="Sorts in Sort" :key="Sorts.id">
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(Labeslss.id)"
            >{{ Sorts.type }}</div
          >
        </div>
      </div>

      <div class="sn-list8">
        <div class="p-1 m-1 text-sm font-semibold bg-gray-200 cursor-pointer sn-list8-1">站点信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">0篇</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">0k字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">0次</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">最后更新:</div>
            <div class="sn-list8-2-1-2">2012-12-12</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { message } from 'ant-design-vue'
  export default {
    name: 'TalkSidebar',
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const { proxy }: any = getCurrentInstance() //获取上下文实例，ctx=vue2的this
      const router = useRouter()
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        Sort: [],
        article: [],
        //当前默认页
        barFixed: false,
        UserTalk: ''
      })

      const getall = () => {
        //     //加载文章
        proxy.$api
          .all([
            //查询分类
            proxy.$api.get('/api/SnTalkType/GetAllAsync'),
            //查询最新发布前十文章
            proxy.$api.get('/api/SnTalk/GetFyAllAsync?pageIndex=1&pageSize=10&isDesc=true'),
            // 查询当前用户的说说
            proxy.$api.get('/api/SnUserTalk/GetUserTalkFirst?UserId=4&isdesc=true')
          ])
          .then(
            proxy.$api.spread((res2: any, res3: any, res4: any) => {
              state.Sort = res2.data
              state.article = res3.data
              state.UserTalk = res4.data
            })
          )
      }

      const AsyGetTestID = (id: number, userid: number) => {
        if (userid != 0) {
          router.push({
            path: '/TalkText',
            query: {
              id: id
            }
          })
        } else {
          message.info('无权限!')
        }
      }
      onMounted(async () => {
        await getall()
      })
      return { ...toRefs(state), getall, AsyGetTestID }
    }
  }
</script>
<style lang="scss" scoped>
  @import './scss/TalkSidebar.scss';
</style>
