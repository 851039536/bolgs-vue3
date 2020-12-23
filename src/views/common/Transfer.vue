<!--
 * @Author: 文章详情中转站
 * @Date: 2020-12-23 12:08:52
 * @LastEditTime: 2020-12-23 12:22:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\common\Transfer.vue
-->
<template>
  <div></div>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state: any = reactive({
      id: route.query.id,
    });
    const tz = (id: number) => {
      // .带参数跳转
      router.push({
        path: "/Indextext2",
        query: {
          id: id,
        },
      });
    };
    onMounted(async () => {
      await tz(state.id);
    });
    return { ...toRefs(state), tz };
  },
};
</script>