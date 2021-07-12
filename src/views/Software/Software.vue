<template>
  <div id="software">
    <Sidebarsn></Sidebarsn>
    <fav-sidebar></fav-sidebar>
    <div class="software_main animate__animated animate__fadeIn">
      <!-- ---------------------------------- -->
      <div class="software_content" v-for="data in dataTest" :key="data.oneId">
        <div class="One-list-div">
          <div class="One-list-div-frame">
            <p class="One-list-div-frame-title">
              <a @click="setModal1Visible(true, data.oneId)">
                {{
                data.oneTitle
                }}
              </a>
            </p>
            <!-- <p class="EverydayOne-3-p2">xxx</p> -->
            <p class="One-list-div-frame-text">{{ data.oneText }}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="modal2Visible"
        :title="text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="不了"
        @cancel="give()"
        @ok="modal2Visible = false"
      >
        <p>{{ text.oneText }}</p>
      </a-modal>
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
      @include initialize($w, 90%, $Text_height, null, $ml, null, #ffffff);
      @apply shadow-sm rounded-sm;
      overflow: auto;
      .One-top {
        @include w-h(100%, 55%);
        .One-top-img {
          @include w-h(45%, 76.5%);
          float: left;
          img {
            @include w-h(100%, 100%);
          }
        }

        .One-top-text {
          @include w-h(55%, 100%);

          float: right;

          .One-top-text-title {
            @apply text-center m-1 pt-2;
            height: 14%;
          }
          .One-top-give {
            height: 60%;
            @apply m-1 px-4 py-4  font-thin leading-loose tracking-wide text-center shadow-2xl;
          }
          .One-top-give-div {
            @apply m-1 cursor-pointer;
            height: 17%;
            div {
              @apply px-2 py-2 m-1 text-center text-gray-700;
            }
          }
        }
      }

      .One-recommend {
        @include w-h(100%, 30px);
        margin-top: 5px;
        @apply px-2 my-1 shadow bg-gray-100;
        .One-recommend-l {
          float: left;
          @apply text-lg;
        }

        .One-recommend-r {
          float: right;
          @apply text-lg;
        }
      }
      .software_content {
        .One-list-div {
          // position: relative;
          @include initialize(100%, 120px, 10px, null, null, null, #ffffff);
          @apply shadow rounded-sm cursor-pointer;
          .One-list-div-frame {
            @include w-h(100%, 100%);
            .One-list-div-frame-title {
              height: 23%;
              @apply m-1 px-1 text-base font-semibold bg-gray-100;
              @include line-ome;
            }

            .EverydayOne-3-p2 {
              height: 15%;
              @apply px-3 text-xs;
            }

            .One-list-div-frame-text {
              @apply px-2  m-1 p-1 text-sm font-thin;
              height: 51%;
              text-overflow: ellipsis;
              /*有些示例里需要定义该属性，实际可省略*/
              display: -webkit-box;
              -webkit-line-clamp: 3;
              /*规定超过两行的部分截断*/
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
              /*在任何地方换行*/
            }
          }
        }
      }
    }
  }
  @screen xp {
    .OneSidebar {
      @apply hidden;
    }
    .One .software_main {
      width: 100%;
      @apply ml-0 mb-14;
    }

    .One .software_main .software_content .One-list-div {
      width: 100%;
      @apply ml-0;
    }
  }
</style>