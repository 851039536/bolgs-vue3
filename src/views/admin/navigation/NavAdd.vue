<!--
 * @Author: your name
 * @Date: 2021-10-19 16:42:48
 * @LastEditTime: 2021-11-18 16:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleForm.vue
-->
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { navigation, TOKEN } from '@/api'
  import { message } from 'ant-design-vue'
  import { formState, stateArray } from './data'
  import { Routers, go, reloads } from '@/hooks/routers'
  import { navname } from '../utils/data'
  import { storage } from '@/utils/storage/storage'

  const onSubmit = async () => {
    formState.userId = storage.get('userId')
    await navigation.AddAsync(formState).then(() => {
      message.info('添加成功')
      Routers('/Admin-index/NavTable')
    })
  }
  async function GetAll() {
    navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
      stateArray.navResult = res.data
    })
  }

  onMounted(async () => {
    await GetAll()
    await TOKEN()
    navname.name = '内容分享'
    navname.name2 = '新增内容'
  })
</script>

<template>
  <div class="form">
    <div class="form_content">
      <a-form :model="formState" :label-col="{ span: 2 }" :wrapper-col="{ span: 21 }">
        <div class="form_content_1">
          <a-form-item label="标题" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.title" />
          </a-form-item>
          <a-form-item label="内容简述">
            <a-input v-model:value="formState.describe" />
          </a-form-item>

          <a-form-item label="图片链接" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.img" />
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select v-model:value="formState.typeId" placeholder="please select your zone">
              <a-select-option v-for="item in stateArray.navResult" :key="item.id" :label="item.id" :value="item.id">{{
                item.title
              }}</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="前往地址" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.url" />
          </a-form-item>
        </div>
      </a-form>
    </div>
    <div>
      <a-button type="primary" @click="onSubmit">添加</a-button>
      <a-button style="margin-left: 10px" @click="go(-1)">返回</a-button>
      <a-button style="margin-left: 10px" @click="reloads">刷新</a-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .form {
    @apply w-full h-full;

    .form_content {
      height: 480px;

      @apply bg-white overflow-auto;

      .form_content_1 {
        @apply mt-3;
      }
    }
  }
</style>
