<!--
 * @Author: One侧边栏
 * @Date: 2020-12-21 16:14:58
 * @LastEditTime: 2021-08-03 09:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\OneSidebar.vue
-->
<template>
  <div class="One-Sidebar">
    <div class="One-Sidebar-div">
      <!-- 文章描述 -->
      <div class="One-Sidebar-describe">
        <div class="One-Sidebar-describe-text">
          <p class>文章来源于网络,进行收集整理</p>
        </div>
      </div>
      <!-- ------------- -->
      <!--内容框-->
      <div class="One-Sidebar-textlist">
        <div class="One-Sidebar-textlist-title">推荐内容</div>
        <div class="TalkSidebar-text-4-2" v-for="result in resultOne" :key="result.oneId">
          <div class="p-1 pl-2 text-base">
            <svg class="inline-block icon" aria-hidden="true">
              <use xlink:href="#icon-liulan
" />
            </svg>
            <a @click="setModal1Visible(true, result.oneId)">{{ result.oneTitle }}</a>
          </div>
        </div>
      </div>

      <!-- -------------------------- -->

      <!-- 内容分类 -->
      <div class="sn-list5">
        <div class="sn-list5-1">分类</div>

        <div class="inline-flex" v-for="result in resultOneType" :key="result.id">
          <div
            class="flex-1 px-1 m-1 text-xs text-center text-gray-700 transition duration-500 ease-in-out transform hover: hover:scale-110 hover:text-red-600"
            @click="tagtest(result.id)"
          >{{ result.soTypeTitle }}</div>
        </div>
      </div>
      <!-- ----------------------------------------- -->

      <!-- 站点统计 -->
      <div class="sn-list8">
        <div class="sn-list8-1">站点信息</div>
        <div class="sn-list8-2">
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">文章数量:</div>
            <div class="sn-list8-2-1-2">{{ Count }}篇</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">总字数:</div>
            <div class="sn-list8-2-1-2">{{ textNum }}字</div>
          </div>
          <div class="flex sn-list8-2-1">
            <div class="sn-list8-2-1-1">访问量:</div>
            <div class="sn-list8-2-1-2">{{ readCount }}次</div>
          </div>
        </div>
      </div>
      <!-- --------------------------------- -->
    </div>

    <!-- 弹出框 -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="modal2Visible"
        :title="text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="不了"
        @ok="modal2Visible = false"
      >
        <p>{{ text.oneText }}</p>
      </a-modal>
    </div>
    <!-- ------------------------------ -->
  </div>
</template>


<script lang="ts">
  import { one } from '../../api/one';
  import { reactive, toRefs, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    name: "TalkSidebar",
    components: {},
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
      const router = useRouter();
      // 加载路由
      // const route = useRoute();
      const state = reactive({
        resultOneType: [],
        resultOne: [],
        modal2Visible: false,
        text: [],
        Count: 0,
        textNum: 0,
        readCount: 0
      });

      const getall = async () => {

        await one.GetOneTypeAllAsync().then((res: any) => {
          state.resultOneType = res.data;
        })
        await one.GetFyTypeAsync(999, 1, 10, "read").then((res: any) => {
          state.resultOne = res.data;
        })
        await one.CountAsync().then((res: any) => {
          state.Count = res.data;
        })
        await one.GetSumAsync("text").then((res: any) => {
          state.textNum = res.data;
        })
        await one.GetSumAsync("read").then((res: any) => {
          state.readCount = res.data;
        })


      };
      const setModal1Visible = async (modal2Visible: boolean, id: number) => {
        state.modal2Visible = modal2Visible;



        await one.GetByIdAsync(id).then((res: any) => {
          state.text = res.data;

          if (res.data == null) {
            console.log(res.data);
            return;
          } else {
            console.log("1" + res.data.oneRead);
            res.data.oneRead++;
            console.log("2" + res.data.oneRead);
            one.UpdatePortionAsync(state.text, "read");
          }
        })


      };
      const AsyGetTestID = (id: number) => {
        //       // .带参数跳转
        router.push({
          path: "/TalkText",
          query: {
            id: id,
          },
        });
      };
      onMounted(async () => {
        await getall();
      });
      return { ...toRefs(state), getall, AsyGetTestID, setModal1Visible };
    },
  };
</script>
<style lang="scss" scoped>
  @import "./scss/OneSidebar.scss";
</style>
