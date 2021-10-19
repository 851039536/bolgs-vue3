<!--
 * @Author: your name
 * @Date: 2021-10-19 16:42:48
 * @LastEditTime: 2021-10-19 17:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\admin\article\ArticleForm.vue
-->
<template>
  <div class="form" style="padding: 0 24px 24px;">
    <div class="form_title">
      <a-breadcrumb style="margin: 16px 0;">
        <a-breadcrumb-item>文章展示</a-breadcrumb-item>
        <a-breadcrumb-item>文章列表</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="form_content">
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item label="Activity name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Activity zone">
          <a-select
            v-model:value="formState.region"
            placeholder="please select your zone"
          >
            <a-select-option value="shanghai">Zone one</a-select-option>
            <a-select-option value="beijing">Zone two</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Activity time">
          <a-date-picker
            v-model:value="formState.date1"
            show-time
            type="date"
            placeholder="Pick a date"
            style="width: 100%;"
          />
        </a-form-item>
        <a-form-item label="Instant delivery">
          <a-switch v-model:checked="formState.delivery" />
        </a-form-item>
        <a-form-item label="Activity type">
          <a-checkbox-group v-model:value="formState.type">
            <a-checkbox value="1" name="type">Online</a-checkbox>
            <a-checkbox value="2" name="type">Promotion</a-checkbox>
            <a-checkbox value="3" name="type">Offline</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources">
          <a-radio-group v-model:value="formState.resource">
            <a-radio value="1">Sponsor</a-radio>
            <a-radio value="2">Venue</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form">
          <a-input v-model:value="formState.desc" type="textarea" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">Create</a-button>
          <a-button style="margin-left: 10px;">Cancel</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Moment } from 'moment'
import { defineComponent, reactive, toRaw, UnwrapRef } from 'vue'
interface FormState {
  name: string
  region: string | undefined
  date1: Moment | undefined
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    })
    const onSubmit = () => {
      console.log('submit!', toRaw(formState))
    }
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    }
  },
})
</script>
<style lang="scss" scoped>
.form {
  @apply w-full h-full;

  .form_content {
    @apply bg-white;
  }
  // .form_title {
  //   @apply m-5;
  // }
}
</style>
