<template>
  <div :class="[SnTagText,activeClass, fadeIn]">
    <div class="flex text">
      <div class="text-sidebar animate__animated" :class="[backInDown]">
        <div class="text-sidebar-forms" v-for="label in newinfo" :key="label.articleId">
          <div class="forms-1" @click="getAll1(label.articleId)">
            <a>{{ label.title }}</a>
          </div>
          <div class="forms-2">{{ label.time }}</div>
        </div>
      </div>

      <div class="text-blog">
        <div class="blog" v-html="blog"></div>
      </div>
    </div>

    <div class="SnTagText-top">
      <div class="flex flex-wrap tag-text">
        <div class="tag-text-1 w-2/16" v-for="labelss in labels" :key="labelss.labelId">
          <a @click="GetlabelsID(labelss.labelId)" variant="light">{{ labelss.labelName }}</a>
        </div>
      </div>
    </div>

    <div class="bruce flex-ct-x animate__animated animate__fadeIn">
      <div class="vertical-text">
        <!--                <h3></h3>-->
        <p>
          我见犹怜
          <br />爱不释手
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import markdown from "@/utils/markdown.js";
  import { article } from '../../api/article';
  import { labels } from '../../api/labels';
  // import $ from '../assets/js/jquery.js';//非必要
  import {

    reactive,
    toRefs,
    onMounted,
  } from "vue";
  import { useRoute } from "vue-router";
  export default {
    name: "TagText",
    setup() {
      // 加载路由
      const route = useRoute();
      const state = reactive({
        newinfo: [],
        newtext: [],
        labels: [],
        id: route.query.id,
        blog: "",
        // -----------------------------------------
        activeClass: "animate__animated",
        errorClass: "animate__fadeInRightBig",
        bounceIn: "animate__bounceIn",
        backInDown: "animate__backInDown",
        fadeInTopRight: "animate__fadeInTopRight",
        fadeIn: "animate__fadeIn",
        SnTagText: "SnTagText"
      });

      async function AsyGetTag(id: any): Promise<void> {
        if (id == null) {
          id = 1;
        }
        await article.GetTagtextAsync(id, true).then((result: any) => {
          state.newinfo = result.data;

        });
      }

      async function getAll1(id: any): Promise<void> {

        await article.GetByIdAsync(id, true).then((res: any) => {
          const result = markdown.marked(res.data.text);
          result.then((response: any) => {
            state.blog = response.content;
          });
        });

      }
      async function getAll(): Promise<void> {

        await labels.GetAllAsync().then((result: any) => {
          state.labels = result.data;
        });
      }

      async function GetlabelsID(id: any): Promise<void> {
        AsyGetTag(id);
      }
      onMounted(async () => {
        await AsyGetTag(state.id);
        await getAll();
      });

      return {
        ...toRefs(state),
        AsyGetTag,
        getAll,
        getAll1,
        GetlabelsID,
      };
    },
  };
</script>

<style lang="scss">
  @import "./TagText.scss";
</style>