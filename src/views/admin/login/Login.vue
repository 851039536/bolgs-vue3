<!--
 * @Author: your name
 * @Date: 2021-09-30 14:42:38
 * @LastEditTime: 2021-11-23 11:45:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\login\Login.vue
-->

<script setup lang="ts">
  import { Routers } from '@/hooks/routers'
  import { user } from '@/api/index'
  import { onMounted, reactive } from 'vue'
  import { storage } from '@/utils/storage/storage'
  import { useStore } from 'vuex'
  import useCurrentInstance from '@/utils/common/useCurrentInstance'
  const store = useStore()
  const state = reactive({
    name: '',
    pwd: '',
    result: []
  })
  const { proxy }: any = useCurrentInstance()
  async function login() {
    user.Login(state.name, state.pwd).then((res) => {
      if (res.data === '用户或密码错误' || res.data === '用户密码不能为空') {
        proxy.$mes.error(res.data)
        return
      }

      state.result = res.data.split(',')
      storage.remove('rolres')
      storage.remove('userId')
      storage.remove('user')

      storage.set('rolres', state.result[0]) //存角色名
      store.state.Roles = storage.get('rolres')
      storage.set('userId', state.result[2]) // 用于全局用户主键
      storage.set('user', state.result[3]) //村用户名
      storage.set(store.state.Roles, 'Bearer ' + state.result[1]) //token

      proxy.$mes.success('成功!')
      Routers('/Admin-index/ArticleTable')
    })
  }
  onMounted(async () => {
    if (storage.get(store.state.Roles)) {
      await proxy.$mes.loading('已登录,跳转中')
      await Routers('/Admin-index/ArticleTable')
    }
  })
</script>
<template>
  <div class="login-box animate__animated animate__fadeIn">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" v-model="state.name" />
        <label>User</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="state.pwd" />
        <label>Pwd</label>
      </div>
      <a href="#" @click="login"> Submit </a>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    width: 400px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    transform: translate(-50%, -50%);
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    margin-bottom: 30px;
    padding: 10px 0;
    color: #fff;
    font-size: 16px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }

  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    color: #fff;
    font-size: 16px;
    transition: 0.5s;
    pointer-events: none;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    margin-top: 40px;
    padding: 10px 20px;
    overflow: hidden;
    color: #03e9f4;
    font-size: 16px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.5s;
  }

  .login-box a:hover {
    color: #fff;
    background: #c8dcdd;
    border-radius: 5px;
    // box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4;
  }

  .login-box a span {
    position: absolute;
    display: block;
  }
</style>
