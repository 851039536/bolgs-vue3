<!--
 * @Author: your name
 * @Date: 2020-12-17 18:04:43
 * @LastEditTime: 2021-09-30 11:33:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\one\one.vue
-->
<script setup lang="ts">
import OneSidebar from './OneSidebar.vue'
import { method, state } from './index'
import OneTop from './components/OneTop.vue'
import OneContent from './components/OneContent.vue'
method.Count()
method.getOne()
</script>

<template>
  <div class="one">
    <blog-sidebar></blog-sidebar>
    <OneSidebar></OneSidebar>
    <div class="one-div animate__animated animate__fadeIn">
      <!-- 头部 -->
      <OneTop
        :title="state.dataOne.oneTitle"
        :oneText="state.dataOne.oneText"
        :oneRead="state.dataOne.oneRead"
      ></OneTop>
      <!-- end 头部 -->

      <!-- 推荐列表 -->
      <div class="one-recommend">
        <div class="one-recommend-l">往期推荐!</div>
        <div class="one-recommend-r">更多推荐!</div>
      </div>
      <!-- end 推荐列表 -->

      <OneContent :resultData="state.resultData"></OneContent>

      <!-- 分页 -->
      <div class="">
        <a-pagination
          size="small"
          @change="method.currentchange"
          :total="state.count"
          :pageSize="state.pagesize"
          show-quick-jumper
        />
      </div>
      <!-- end 分页-->
    </div>

    <!-- 点赞提示框 -->
    <div id="components-modal-demo-position">
      <a-modal
        v-model:visible="state.modal2Visible"
        :title="state.text.oneTitle"
        centered
        cancelText="赞"
        :closable="false"
        okText="关闭"
        @cancel="method.give(state.text.oneId)"
        @ok="state.modal2Visible = false"
      >
        <p>{{ state.text.oneText }}</p>
      </a-modal>
    </div>
    <!-- end 点赞提示框 -->
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
