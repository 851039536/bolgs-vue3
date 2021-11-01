<!--
 * @Author: your name
 * @Date: 2021-10-19 16:42:48
 * @LastEditTime: 2021-11-01 15:46:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleForm.vue
-->
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { navigation, TOKEN } from '@/api'
import { message } from 'ant-design-vue'
import { formState, stateArray } from './data'
import { useRoute } from 'vue-router'
import { Routers, go } from '@/hooks/routers'
import { navname } from '../utils/data'
const route = useRoute()
const Rid = reactive({
  id: route.query.id,
})
const onSubmit = async () => {
  await navigation.UpdateAsync(formState).then(() => {
    message.info('更新完成')
    Routers('/Admin-index/NavTable')
  })
}
async function GetAll() {
  navigation.GetSnNavigationTypeSAllAsync(false).then((res) => {
    stateArray.navResult = res.data
  })

  navigation.GetByIdAsync(Rid.id, false).then((res) => {
    formState.navId = res.data.navId
    formState.navTitle = res.data.navTitle
    formState.navText = res.data.navText
    formState.navImg = res.data.navImg
    formState.navType = res.data.navType
    formState.navUrl = res.data.navUrl
  })
}
onMounted(async () => {
  await GetAll()
  await TOKEN()
  navname.name = '内容分享'
  navname.name2 = '编辑内容'
})
</script>

<template>
  <div class="form">
    <div class="form_content">
      <a-form
        :model="formState"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 21 }"
      >
        <div class="form_content_1">
          <a-form-item label="标题" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.navTitle" />
          </a-form-item>
          <a-form-item label="内容简述">
            <a-input v-model:value="formState.navText" />
          </a-form-item>

          <a-form-item label="图片链接" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.navImg" />
          </a-form-item>

          <a-form-item label="类别" :wrapper-col="{ span: 6, offset: 0 }">
            <a-select
              v-model:value="formState.navType"
              placeholder="please select your zone"
            >
              <a-select-option
                v-for="item in stateArray.navResult"
                :key="item.title"
                :label="item.title"
                :value="item.title"
                >{{ item.navType }}</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item label="前往地址" :wrapper-col="{ span: 6, offset: 0 }">
            <a-input v-model:value="formState.navUrl" />
          </a-form-item>

          <!-- <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">更新</a-button>
            <a-button style="margin-left: 10px;" @click="go(-1)">返回</a-button>
          </a-form-item> -->
        </div>
      </a-form>
    </div>
    <div>
      <a-button type="primary" @click="onSubmit">更新</a-button>
      <a-button style="margin-left: 10px;" @click="go(-1)">返回</a-button>
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
