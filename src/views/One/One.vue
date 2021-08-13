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
      <div class="flex flex-wrap One-list">
        <div class="One-list-div" v-for="data in dataTest" :key="data.oneId">
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
        okText="关闭"
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
  @import "./scss/One.scss";
</style>