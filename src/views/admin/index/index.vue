<!--
 * @Author: your name
 * @Date: 2021-10-18 14:22:33
 * @LastEditTime: 2021-10-21 17:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\index\index.vue
-->

<script lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, nextTick, provide, reactive, ref } from 'vue'
import { Routers } from '@/hooks/routers'
import { storage } from '@/utils/storage/storage'
import { message } from 'ant-design-vue'
import store from '@/store'

export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },

  setup() {
    async function zx() {
      storage.remove(store.state.Roles)
      if (!storage.get(store.state.Roles)) {
        message.info('注销成功')
        Routers('/Login')
      }
    }

    const state = reactive({
      showRouter: true,
    })
    function reload() {
      state.showRouter = false
      nextTick(() => {
        state.showRouter = true
      })
    }
    provide('reload', reload)
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      openKeys: ref<string[]>(['sub1']),
      Routers,
      storage,
      zx,
      state,
    }
  },
})
</script>
<template>
  <div class="admin_index animate__animated animate__fadeIn">
    <a-layout>
      <header class="header">
        <a href="" class="logo">控制台</a>
        <label class="menu-icon" for="menu-btn"
          ><span class="navicon"></span
        ></label>
        <ul class="menu">
          <li><a href="#work">Our Work</a></li>

          <li><a href="#careers" @click="Routers('/')">主页</a></li>
          <li><a href="#about" @click="zx()">注销</a></li>
          <li>
            <a href="#contact"><a-avatar>USER</a-avatar></a>
          </li>
        </ul>
      </header>
      <!-- <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys1"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="4" @click="Routers('/')">主页</a-menu-item>

          <a-menu-item key="5" @click="Routers('/')" class="avatar"
            ><a-avatar size="large">USER</a-avatar></a-menu-item
          >
        </a-menu>
      </a-layout-header> -->
      <a-layout>
        <a-layout-sider
          breakpoint="lg"
          collapsed-width="0"
          width="200"
          style="background: #fff;"
        >
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  文章展示
                </span>
              </template>
              <a-menu-item key="1" @click="Routers('/Admin-index/ArticleTable')"
                >文章列表</a-menu-item
              >
              <a-menu-item key="2" @click="Routers('/Admin-index/Logins')"
                >类别</a-menu-item
              >
              <a-menu-item key="3" @click="Routers('/Admin-index/Logins')"
                >标签</a-menu-item
              >
              <a-menu-item key="4" @click="Routers('/Admin-index/Logins')"
                >Login</a-menu-item
              >
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  内容分享
                </span>
              </template>
              <a-menu-item key="5" @click="Routers('/Admin-index/NavTable')"
                >导航列表</a-menu-item
              >
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <!-- 子路由 -->
        <router-view
          v-if="state.showRouter"
          class="animate__animated animate__fadeIn"
        ></router-view>
        <!-- end 子路由 -->
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.admin_index {
  @apply fixed w-full h-full;

  z-index: 10;

  @apply bg-gray-100;

  /* header */

  .header {
    // position: fixed;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .header ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    background-color: #fff;
  }

  .header li a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    border-right: 1px solid #f4f4f4;
  }

  .header li a:hover,
  .header .logo {
    display: block;
    float: left;
    padding: 10px 20px;
    font-size: 2em;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    position: relative;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    cursor: pointer;
    user-select: none;
  }

  .header .menu-icon .navicon {
    position: relative;
    display: block;
    width: 18px;
    height: 2px;
    background: #333;
    transition: background 0.2s ease-out;
  }

  .header .menu-icon .navicon::before,
  .header .menu-icon .navicon::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #333;
    transition: all 0.2s ease-out;
    content: '';
  }

  .header .menu-icon .navicon::before {
    top: 5px;
  }

  .header .menu-icon .navicon::after {
    top: -5px;
  }

  /* menu btn */

  /* 48em = 768px */

  @media (min-width: 48em) {
    .header li {
      float: left;
    }

    .header li a {
      padding: 20px 30px;
    }

    .header .menu {
      float: right;
      clear: none;
      max-height: none;
    }

    .header .menu-icon {
      display: none;
    }
  }
}
</style>
