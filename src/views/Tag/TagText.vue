<template>
  <div class="SnTagText1 animate__animated animate__fadeIn">
    <div class="flex SnTagText animate__animated animate__fadeIn">
      <div class="SnTagText-1">
        <div
          class="SnTagText-1-1"
          v-for="label in newinfo"
          :key="label.articleId"
        >
          <div class="SnTagText-1-1-1" @click="AsyGetTest(label.articleId)">
            <a>{{ label.title }}</a>
          </div>
          <div class="p-2 SnTagText-1-1-2">{{ label.time }}</div>
        </div>
      </div>

      <div class="SnTagText-2">
        <div class="blog" v-html="blog"></div>
      </div>
    </div>

    <div class="SnTagText2">
      <div class="flex flex-wrap tag-text">
        <div
          class="tag-text-1 w-2/16"
          v-for="labelss in labels"
          :key="labelss.labelId"
        >
          <a @click="GetlabelsID(labelss.labelId)" variant="light"
            >{{ labelss.labelName }}
          </a>
        </div>
      </div>
    </div>

    <div class="bruce flex-ct-x animate__animated animate__fadeIn">
      <div class="vertical-text">
        <!--                <h3></h3>-->
        <p>我见犹怜<br />爱不释手</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js'//导入代码高亮文件
import marked from 'marked'//解析器

export default {
  name: "TagText",
  data () {
    return {
      newinfo: [],
      newtext: [],
      labels: [],
      // 获取index主页传过来的id值
      id: this.$route.query.id,
      markdownOption: {
        bold: true, // 粗体
      },
      blog: "",
    }
  },
  created () {
    this.AsyGetTag(this.id)
    this.AsyGetTest(1);
  },
  updated () {

    this.highlighthandle()
  },

  methods: {

    async highlighthandle () {
      await hljs;
      let highlight = document.querySelectorAll('code,pre');
      highlight.forEach((block) => {
        hljs.highlightBlock(block);
      })
    },
    async AsyGetTag (id) {


      if (id == null) {
        id = 1
      }
      this.$api({
        url: '/api/SnArticle/AsyGetTestString?LabelId=' + id
      }).then(res => {
        this.newinfo = res.data;

      }).catch((e) => {
        console.log(e + '获取数据失败');

      });

    },
    async AsyGetTest (id) {
      this.$api.all([
        //查询标签
        this.$api.get('/api/SnArticle/AsyGetTestID?id=' + id),
        //查询分类
        this.$api.get('/api/SnLabels/GetLabels'),
      ]).then(this.$api.spread((res1, res2) => {
        this.labels = res2.data;
        this.blog = marked(res1.data.text)
      })
      ).catch(err => {
        console.log(err)
      });

    },
    GetlabelsID (id) {
      this.AsyGetTag(id);
    },

  }
}
</script>

<style lang="scss">
  @import "../../assets/sass/com";
  .SnTagText1 {
    position: fixed;
    width: 100%;
    height: 100%;

    .SnTagText {
      position: absolute;
      top: 21.5%;
      width: 85%;
      height: 75%;
      margin-left: 7.5%;
      border-radius: 2px;
      @apply bg-white;
      .SnTagText-1 {
        width: 32%;
        overflow: auto;
        .SnTagText-1-1 {
          @apply p-1 m-2 bg-gray-100 cursor-pointer;
          @include boxshow3;
          /*background-color: #95999c;*/
          .SnTagText-1-1-1 {
            /*background-color: #795da3;*/
            @apply bg-gray-300 text-base p-1;
          }
          .SnTagText-1-1-2 {
            // background-color: #ffffff;
          }
        }
      }
      .SnTagText-2 {
        width: 68%;
        @apply p-2  bg-gray-200;
        overflow: auto;
        /*background-color: #1e7e34;*/

        .blog {
          background: rgb(231, 231, 224);
          @include boxshow3;
          @apply antialiased m-1 p-1 rounded-sm font-mono;
          h2 {
            @apply text-xl  m-1 p-1 text-gray-700 bg-blue-200 rounded-sm shadow-sm;
          }

          h3 {
            @apply text-lg m-1 p-1  bg-blue-100 rounded-sm shadow-sm;
          }
          pre {
            @apply text-base m-1 rounded-sm shadow-sm;
          }
          code {
            color: #6390bb;
          }
          p {
            @apply text-base pl-1 m-1 rounded-sm bg-white leading-relaxed;
          }
        }
      }
    }

    .SnTagText2 {
      position: absolute;
      top: 10%;
      width: 85%;
      height: 11%;
      margin-left: 7.5%;
      @apply bg-white rounded-sm;
      .tag-text {
        height: 100%;
        .tag-text-1 {
          @include boxshow3;
          @apply m-1 bg-gray-200 text-base font-thin;
          border-radius: 3px;
          a {
            margin: 0 10px 0 10px;
          }
        }
      }
    }

    .vertical-text {
      position: absolute;
      top: 12%;
      right: 10px;
      border-radius: 2px;
      writing-mode: vertical-rl;
      h3 {
        padding-left: 20px;
        font-weight: bold;
        font-size: 18px;
        color: #f66;
      }

      p {
        line-height: 30px;
        color: #66f;
      }
    }
  }
</style>