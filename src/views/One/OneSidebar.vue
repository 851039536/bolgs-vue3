<!--
 * @Author: One侧边栏
 * @Date: 2020-12-21 16:14:58
 * @LastEditTime: 2021-09-29 14:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\One\OneSidebar.vue
-->
<script setup lang="ts">
import { one } from '@/api/index'
import { reactive, onMounted } from 'vue'
import SStatistics from '@/components/sidebarModule/sstatistics/sStatistics.vue'
import OneCategory from './components/OneCategory.vue'

interface State {
  resultOneType: any
  resultOne: any
  modal2Visible: boolean
  text: any
  Count: number
  textNum: number
  readCount: number
}

const state: State = reactive({
  resultOneType: [],
  resultOne: [],
  modal2Visible: false,
  text: [],
  Count: 0,
  textNum: 0,
  readCount: 0,
})

const getall = async () => {
  await one.GetOneTypeAllAsync().then((res: any) => {
    state.resultOneType = res.data
  })
  await one.GetFyTypeAsync(999, 1, 10, 'read').then((res: any) => {
    state.resultOne = res.data
  })
  await one.CountAsync().then((res: any) => {
    state.Count = res.data
  })
  await one.GetSumAsync('text').then((res: any) => {
    state.textNum = res.data
  })
  await one.GetSumAsync('read').then((res: any) => {
    state.readCount = res.data
  })
}
const setModal1Visible = async (modal2Visible: boolean, id: number) => {
  state.modal2Visible = modal2Visible

  await one.GetByIdAsync(id).then((res: any) => {
    state.text = res.data

    if (res.data == null) {
      return
    } else {
      res.data.oneRead++
      one.UpdatePortionAsync(state.text, 'read')
    }
  })
}
onMounted(async () => {
  await getall()
})
</script>

<template>
  <div class="One-Sidebar">
    <div class="One-Sidebar-div">
      <!-- 文章描述 -->
      <div class="One-Sidebar-describe">
        <div class="One-Sidebar-describe-text">
          <p class>内容来源于网络</p>
        </div>
      </div>
      <!-- end文章描述 -->
      <!--内容框-->
      <div class="One-Sidebar-textlist">
        <div class="One-Sidebar-textlist-title">舔狗最爱</div>
        <div
          class="TalkSidebar-text-4-2"
          v-for="result in state.resultOne"
          :key="result.oneId"
        >
          <div class="p-1 pl-2 text-base">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-liulan
"
              />
            </svg>
            <a @click="setModal1Visible(true, result.oneId)">{{
              result.oneTitle
            }}</a>
          </div>
        </div>
      </div>
      <!-- end内容框 -->

      <!-- 内容分类 -->
      <OneCategory :result="state.resultOneType"></OneCategory>
      <!-- end 内容分类 -->

      <!-- 站点统计 -->
      <SStatistics
        :ArticleCount="state.Count"
        :TextCount="state.textNum"
        :reReadCount="state.readCount"
      ></SStatistics>
      <!-- end 站点统计 -->
    </div>

    <!-- 弹出框 -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="state.modal2Visible"
        :title="state.text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="不了"
        @ok="state.modal2Visible = false"
      >
        <p class="bg-white">{{ state.text.oneText }}</p>
      </a-modal>
    </div>
    <!-- end 弹出框 -->
  </div>
</template>

<style lang="scss" scoped>
@import './OneSidebar.scss';
</style>
