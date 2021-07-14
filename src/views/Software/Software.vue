<template>
  <div id="software">
    <Sidebarsn></Sidebarsn>
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
            <p
              class="oftware_content__frame-2"
            >时隔30个小时，你终于发了信息给我，你说“宝贝，我想你了。”，我很开心，我终于以为我的舔狗日子到了，可没想到信息发出来两秒都没有，你就撤回了，你说发错了，当我说准备要回没关系的时候，我看见了红色的感叹号。</p>

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
            <img
              src="https://media.creatorsdaily.com/QmVbZPz82JrqYkVnyfMeRuTkrbDQyyQWAQYNntqc7BuSR7-160-160-contain"
            />
          </div>
          <div class="oftware_content__frame">
            <p class="oftware_content__frame-1">
              <a @click="setModal1Visible(true, data.oneId)">
                {{
                data.oneTitle
                }}
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
  import { getCurrentInstance, reactive, toRefs, onMounted } from "vue";
  // import OneSidebar from "./OneSidebar.vue";
  import { message } from "ant-design-vue";
  import FavSidebar from '../Navigation/FavSidebar.vue';
  export default {
    name: "EverydayOne",
    components: { FavSidebar },
    setup(): { getOne: () => void; setModal1Visible: (modal2Visible: boolean, id: number) => void; give: (id: number) => void; } {
      const { proxy }: any = getCurrentInstance();
      const state: any = reactive({
        dataTest: [],
        dataOne: [],
        text: [],
        modal2Visible: false,
      });
      const setModal1Visible = (modal2Visible: boolean, id: number) => {
        state.modal2Visible = modal2Visible;
        proxy
          .$api({
            url: "/api/SnOne/GetByIdAsync?id=" + id,
          })
          .then((res: any) => {
            state.text = res.data;
          })

      };

      const getOne = () => {
        proxy.$api
          .all([
            // 读取一条内容
            proxy.$api.get(
              "/api/SnOne/GetFyAllAsync?pageIndex=1&pageSize=1&isDesc=true"
            ),
            //查询最新发布前十内容
            proxy.$api.get(
              "/api/SnOne/GetFyAllAsync?pageIndex=1&pageSize=6&isDesc=true"
            ),
          ])
          .then(
            proxy.$api.spread((res1: any, res2: any) => {
              state.dataOne = res1.data[0];
              state.dataTest = res2.data;
            })
          )

      };

      const give = (id: number) => {
        message.info(id + "功能未完成");
      };
      onMounted(async () => {
        await getOne();
      });
      return { ...toRefs(state), getOne, setModal1Visible, give };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  #software {
    // position: fixed;
    @include w-h(100%, 100%);
    .software_main {
      @include initialize($w, 90%, $Text_height, null, $ml, null, #fafafa);
      @apply shadow-sm rounded-sm;
      overflow: auto;

      .software_content {
        @apply m-2;
        .software_content_div {
          // position: relative;
          @include initialize(100%, 125px, 10px, null, null, null, #ffffff);
          @apply shadow rounded-sm cursor-pointer;

          .software_content_img {
            @include w-h(20%, 100%);
            @apply p-2;
            img {
              @include w-h(100%, 100%);
            }
          }
          .oftware_content__frame {
            @include w-h(80%, 100%);
            .oftware_content__frame-1 {
              @apply m-1 px-1 text-base font-semibold;
              @include line-ome;
            }

            .oftware_content__frame-2 {
              @apply px-2  m-1 p-1 text-sm font-thin;
              height: 51%;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
            }

            .oftware_content__frame-3 {
              @apply m-1 px-1  font-semibold;
              span {
                @apply p-1;
              }
            }
          }
        }
      }
    }
  }
  @screen xp {
  }
</style>