<template>
  <div id="software">
    <Sidebarsn></Sidebarsn>
    <BlogSidebar></BlogSidebar>
    <fav-sidebar></fav-sidebar>
    <div class="software_main animate__animated animate__fadeIn">
      <!-- ---------------------------------- -->

      <!-- 内容框 -->
      <div class="software_content">
        <div class="flex software_content_div">
          <div class="software_content_img">
            <img src="../../assets/img/ab.jpg" />
          </div>
          <div class="oftware_content__frame">
            <p class="oftware_content__frame-1">
              <a>剧本谈</a>
            </p>
            <p class="oftware_content__frame-2">
              时隔30个小时，你终于发了信息给我，你说“宝贝，我想你了。”，我很开心，我终于以为我的舔狗日子到了，可没想到信息发出来两秒都没有，你就撤回了，你说发错了，当我说准备要回没关系的时候，我看见了红色的感叹号。
            </p>

            <p class="oftware_content__frame-3">
              <span>剧本</span>
              <span>测试</span>
              <span>热度</span>
              <span>测试</span>
              <span>测试</span>
            </p>
          </div>
        </div>
      </div>
      <!-- ------ -->
      <div class="software_content" v-for="data in dataTest" :key="data.oneId">
        <div class="flex software_content_div">
          <div class="software_content_img">
            <img src="https://media.creatorsdaily.com/QmQPDaRDWY6hJQKPA4T47xE6cXzHrdzWXwjtjWMDBCBNAo-160-160-contain" />
          </div>
          <div class="oftware_content__frame">
            <p class="oftware_content__frame-1">
              <a @click="skip(data.oneId)">
                {{ data.oneTitle }}
              </a>
            </p>
            <p class="oftware_content__frame-2">{{ data.oneText }}</p>

            <p class="oftware_content__frame-3">
              <span>剧本</span>
              <span>测试</span>
              <span>热度</span>
              <span>测试</span>
              <span>测试</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { getCurrentInstance, reactive, toRefs, onMounted } from 'vue'
  import { message } from 'ant-design-vue'
  import FavSidebar from '../navigation/favorite/FavSidebar.vue'
  import { useRouter } from 'vue-router'
  export default {
    name: 'Software',
    components: { FavSidebar },
    setup(): {
      getOne: () => void
      skip: (id: number) => void
      give: (id: number) => void
    } {
      const { proxy }: any = getCurrentInstance()
      const state: any = reactive({
        dataTest: [],
        dataOne: [],
        text: [],
        modal2Visible: false
      })

      const router = useRouter()
      const skip = async (id: number) => {
        await router.push({
          path: '/SoftwareContent',
          query: {
            id: id
          }
        })
      }

      const getOne = () => {
        proxy.$api
          .all([
            // 读取一条内容
            proxy.$api.get('/api/SnOne/GetFyAllAsync?pageIndex=1&pageSize=1&isDesc=true'),
            //查询最新发布前十内容
            proxy.$api.get('/api/SnOne/GetFyAllAsync?pageIndex=1&pageSize=6&isDesc=true')
          ])
          .then(
            proxy.$api.spread((res1: any, res2: any) => {
              state.dataOne = res1.data[0]
              state.dataTest = res2.data
            })
          )
      }

      const give = (id: number) => {
        message.info(id + '功能未完成')
      }
      onMounted(async () => {
        await getOne()
      })
      return { ...toRefs(state), getOne, skip, give }
    }
  }
</script>

<style lang="scss" scoped>
  @import './scss/Software.scss';
</style>
