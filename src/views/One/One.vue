<template>
  <div class="One">
    <blog-sidebar></blog-sidebar>
    <OneSidebar></OneSidebar>
    <div class="One-div animate__animated animate__fadeIn">
      <!-- 头部 -->
      <div class="One-top">
        <div class="One-top-img">
          <img src="../../assets/img/tg.jpg" alt />
        </div>
        <div class="One-top-text">
          <div class="One-top-text-title">
            <a class="text-lg">{{ dataOne.oneTitle }}</a>
          </div>
          <div class="One-top-give">{{ dataOne.oneText }}</div>

          <div class="flex flex-row-reverse One-top-give-div">
            <div>转载</div>
            <div>点赞({{ dataOne.oneRead }})</div>
          </div>
        </div>
      </div>
      <!-- end 头部 -->
      <!-- 推荐列表 -->
      <div class="One-recommend">
        <div class="One-recommend-l">往期推荐!</div>
        <div class="One-recommend-r">更多推荐!</div>
      </div>
      <!-- end 推荐列表 -->

      <!-- list -->
      <div class="One-list">
        <div class="One-list-div" v-for="data in dataResult" :key="data.oneId">
          <div class="One-list-div-frame">
            <p class="One-list-div-frame-title">
              <a @click="setModal1Visible(true, data.oneId)">
                {{ data.oneTitle }}
              </a>
            </p>
            <p class="One-list-div-frame-text">{{ data.oneText }}</p>
            <div></div>
          </div>
        </div>
      </div>
      <!-- end list -->

      <!-- 分页 -->
      <div class="">
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

    <!-- 点赞提示框 -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="modal2Visible"
        :title="text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="关闭"
        @cancel="give(text.oneId)"
        @ok="modal2Visible = false"
      >
        <p>{{ text.oneText }}</p>
      </a-modal>
    </div>
    <!-- end 点赞提示框 -->
  </div>
</template>

<script lang="ts">
import { one } from '../../api/http/one'
import { reactive, toRefs, onMounted, onBeforeMount } from 'vue'
import OneSidebar from './OneSidebar.vue'
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
export default {
  name: 'EverydayOne',
  components: { OneSidebar },
  setup(): {
    getOne: () => void
    setModal1Visible: (modal2Visible: boolean, id: number) => void
    give: (id: any) => void
    CountAsync: () => void
    currentchange: (val: number) => void
  } {
    const state: any = reactive({
      dataResult: [],
      dataOne: [],
      text: [],
      modal2Visible: false,

      page: 1, //页码
      pagesize: 6, //每页条数
      count: 0, //总数
    })

    const stores = useStore()
    const setModal1Visible = async (modal2Visible: boolean, id: number) => {
      state.modal2Visible = modal2Visible
      await one.GetByIdAsync(id).then((res: any) => {
        state.text = res.data

        if (res.data == null) {
          // console.log(res.data);
          return
        } else {
          // console.log("1" + res.data.oneRead);
          res.data.oneRead++
          // console.log("2" + res.data.oneRead);
          one.UpdatePortionAsync(state.text, 'read')
        }
      })
    }

    const currentchange = async (val: number) => {
      state.page = val
      await one.GetFyAllAsync(state.page, state.pagesize).then((res: any) => {
        state.dataResult = res.data
      })
    }
    const CountAsync = async () => {
      await one.CountAsync().then((result: any) => {
        state.count = result.data
      })
    }
    const getOne = async () => {
      await one.GetFyAllAsync(state.page, state.pagesize).then((res: any) => {
        state.dataResult = res.data
      })
      await one.GetFyAllAsync(1, 1).then((res2: any) => {
        state.dataOne = res2.data[0]
      })
    }

    const give = async (id: any) => {
      message.info('已点赞')
      await one.GetByIdAsync(id).then((res: any) => {
        if (res.data == null) {
          // console.log(res.data);
          return
        } else {
          // console.log("1" + res.data.oneGive);
          res.data.oneGive++
          // console.log("2" + res.data.oneGive);
          one.UpdatePortionAsync(res.data, 'give')
        }
      })
    }

    // onBeforeMount(() => {
    //   console.log("one");
    //   stores.state.ifymShow = true;
    //   console.log("one" + stores.state.ifymShow);
    // })
    onMounted(async () => {
      await CountAsync()
      await getOne()
    })
    return {
      ...toRefs(state),
      getOne,
      setModal1Visible,
      give,
      CountAsync,
      currentchange,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './scss/One.scss';
</style>
