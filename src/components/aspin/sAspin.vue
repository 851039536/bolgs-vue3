<!--
 * @Author: your name
 * @Date: 2021-09-13 17:56:54
 * @LastEditTime: 2021-09-17 15:45:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\components\aspin\Aspin.vue
-->

<template>
  <div class="aspin_main" v-show="dataList.show">
    <div class="example">
      <a-spin
        :spinning="true"
        size="large"
        tip="加载中..."
        :indicator="indicator"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue'
import { dataList } from './data'
export default defineComponent({
  name: 'sAspin',
  setup() {
    dataList.show = true
    setTimeout(async () => {
      dataList.show = false
    }, 1500)

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: '24px',
      },
      spin: true,
    })

    return {
      indicator,
      dataList,
    }
  },
})
</script>

<style lang="scss" scoped>
.aspin_main {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  @apply w-full h-full bg-white;
  opacity: 0.6;
  .example {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>
