<!--
 * @Author: 博客侧边栏
 * @Date: 2020-12-08 11:27:26
 * @LastEditTime: 2021-09-10 14:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Sidebarsn.vue
-->
<template>
  <div id="blogSidebar">
    <div class="si_scroll">
      <div class="si_img">
        <img src="@/assets/img/si.jpg" alt />
      </div>
      <div class="si_text" v-for="(item, index) in state.resultList" :key="index">
        <p @click="nav(item.path)" v-if="item.identity">{{ item.title }}</p>
      </div>

      <div class="si_website">
        <a href="http://oykperson.xyz">http://oykperson.xyz</a>
      </div>
      <div class="si_described">
        <p
          class="si_described_text"
        >SN © 2019. All Rights Reserved. 粤ICP备19130826号 2017 - 2020 Junior</p>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { useRouter } from "vue-router";
import { interfaces } from '../../api/interfaces';
import {
  reactive,
  toRefs,
  onMounted,
  defineComponent,
} from "vue";

export default defineComponent({
  name: "Sidebarsn",
  setup() {

    interface State {
      resultList: any
    }
    const state: State = reactive({
      resultList: [],
    });
    const router = useRouter();
    let nav = async (num: string) => {
      router.push({
        path: num,
        query: {
          t: +new Date()
        }
      })
    };
    const queryAll = async () => {
      await interfaces.GetTypeAsync(4, 2).then((res: any) => {
        state.resultList = res.data;
      })
    };
    onMounted(async () => {
      await queryAll();
    });
    return {
      ...toRefs(state),
      state,
      nav,
    };
  },
});
</script>
<style lang="scss" >
@import "./index.scss";
</style>