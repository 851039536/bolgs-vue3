<template>
  <div class="One">
    <Sidebarsn></Sidebarsn>
    <OneSidebar></OneSidebar>
    <div class="One-div animate__animated animate__fadeIn">
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
      <!-- 推荐列表 -->
      <div class="One-recommend">
        <div class="One-recommend-l">往期推荐!</div>
        <div class="One-recommend-r">更多推荐!</div>
      </div>
      <!-- ---------------------------------- -->
      <div class="inline-grid One-list" v-for="data in dataTest" :key="data.oneId">
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
            <div>
              <!-- <p @click="give2(data)">{{data.oneGive}}</p> -->
            </div>
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
        @cancel="give(text.OneId)"
        @ok="modal2Visible = false"
      >
        <p>{{ text.oneText }}</p>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
  import { one } from '../../api/one';
  import { reactive, toRefs, onMounted } from "vue";
  import OneSidebar from "./OneSidebar.vue";
  import { message } from "ant-design-vue";
  export default {
    name: "EverydayOne",
    components: { OneSidebar },
    setup(): { getOne: () => void; setModal1Visible: (modal2Visible: boolean, id: number) => void; give: (id: any) => void; give2: (id: any) => void; } {
      const state: any = reactive({
        dataTest: [],
        dataOne: [],
        text: [],
        modal2Visible: false,
      });
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

      const getOne = async () => {
        await one.GetFyAllAsync(1, 6).then((res: any) => {
          state.dataTest = res.data;
        })
        await one.GetFyAllAsync(1, 1).then((res2: any) => {
          state.dataOne = res2.data[0];
        })

      };

      const give2 = async (result: any) => {
        message.info(result + "功能未完成");
        // await one.UpdatePortionAsync(result, "give")
      };

      const give = (id: any) => {
        message.info(id + "功能未完成");
      };
      onMounted(async () => {
        await getOne();
      });
      return { ...toRefs(state), getOne, setModal1Visible, give, give2 };
    },
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";
  @import "../../assets/sass/uitl";
  .One {
    position: fixed;
    @include w-h(100%, 100%);
    .One-div {
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

            text-overflow: ellipsis;
            /*有些示例里需要定义该属性，实际可省略*/
            display: -webkit-box;
            -webkit-line-clamp: 5;
            /*规定超过两行的部分截断*/
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-break: break-all;
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
      .One-list {
        .One-list-div {
          position: relative;
          @include initialize(188px, 120px, 10px, null, null, null, #ffffff);
          @apply shadow rounded-sm cursor-pointer ml-4;
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
    .One .One-div {
      width: 100%;
      @apply ml-0 mb-14;
    }

    .One .One-div .One-list .One-list-div {
      width: 100%;
      @apply ml-0;
    }
  }
</style>