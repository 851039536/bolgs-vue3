<!--
 * @Author: App.vue
 * @Date: 2020-12-07 18:59:37
 * @LastEditTime: 2021-11-23 11:25:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\App.vue
-->
<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import SnBootom from './components/bootom/Bootom.vue'
  import { storage } from '@/utils/storage/storage'
  import { useStore } from 'vuex'
  import Header from './components/header/Header.vue'
  const router = useRouter()
  const store = useStore()
  store.state.Roles = storage.get('rolres')
</script>

<template>
  <div id="app">
    <Header></Header>
    <!-- vue3.0配置 -->
    <router-view v-slot="{ Component }">
      <!-- 需要缓存的视图组件 -->
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <SnBootom></SnBootom>
  </div>
</template>

<style lang="scss">
  @import './design/methodCss.scss';

  @include scroll; //滚动条美化
</style>
