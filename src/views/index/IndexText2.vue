<template>
  <div class="animate__animated animate__fadeIn">
    <!--        <sidebarsn></sidebarsn>-->
    <!--左侧边栏-->
    <div class="article-text">
      <div class="article-text-1">
        <p class="text-base text-center py-1 text-gray-800 font-medium">
          最新随笔
        </p>
      </div>
      <div class="article-text-2">
        <div v-for="articles in article" :key="articles.articleId">
          <svg class="inline-block icon" aria-hidden="true">
            <use
              xlink:href="#icon-liulan
"
            ></use>
          </svg>
          <a @click="AsyGetTestID(articles.articleId)">{{ articles.title }}</a>
        </div>
      </div>
    </div>

    <!--标题-->
    <div class="article-title">
      <a class="cursor-default text-lg" @click="houtui">&lt;</a>
      <p class="text-center text-lg">
        {{ newinfo.title }}
      </p>
    </div>
    <!--内容-->
    <div class="editor-text">
      <!-- <mavon-editor
        :toolbars="markdownOption"
        :subfield="false"
        :boxShadow="true"
        :ishljs="true"
        boxShadowStyle="1px 2px 3px 1px rgba(0, 0, 0, 0.2)"
        defaultOpen="preview"
        :toolbarsFlag="false"
        :navigation="true"
        v-model="newinfo.text"
      /> -->
      <div class="blog" v-html="blog"></div>
    </div>
    <!--底部信息-->
    <div class="article-3">
      <div class="article-3-1">
        <div>版权属于：少年</div>
        <div>本文链接：原创文章转载请注明</div>
        <div>
          作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
          进行许可
        </div>
      </div>
      <div class="article-3-2 flex">
        <div class="">
          <a @click="UpGive(newinfo)">
            <svg class="inline-block icon" aria-hidden="true">
              <use
                xlink:href="#icon-qinggan
"
              ></use>
            </svg>
            {{ newinfo.give }}</a
          >
        </div>
        <div class="">
          <svg class="inline-block icon" aria-hidden="true">
            <use xlink:href="#icon-liulan"></use>
          </svg>
          ({{ newinfo.read }})
        </div>

        <div class="">xxx</div>
        <div class="">xxx</div>
        <div class="">{{ newinfo.time }}</div>
      </div>
    </div>

    <!--回到顶部-->
    <div
      id="backtop"
      class="transition duration-500 ease-in-out hover:bg-blue-200 transform hover:-translate-y-1 hover:scale-110"
    >
      <p @click="backtop">
        <svg class="icons" aria-hidden="true">
          <use xlink:href="#icon-globaltop"></use>
        </svg>
      </p>
    </div>
  </div>
</template>


<script>
// 组件导入
import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js'//导入代码高亮文件
import marked from 'marked'//解析器


export default {
  name: 'IndexText2',
  components: {},
  data () {
    return {
      newinfo: [],
      // 获取index主页传过来的id值
      id: this.$route.query.id,
      markdownOption: {
        bold: true, // 粗体
      },
      article: [],
      timebool: true,
      fullscreenLoading: false,
      blog: ""
    }

  },

  created () {
    this.AsyGetTest()
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
    houtui () {
      this.$router.go(-1);
    },
    async AsyGetTest () {


      this.$api.all([
        // 读取详情页数据
        this.$api.get('/api/SnArticle/AsyGetTestID?id=' + this.id),
        //查询最新发布前十文章
        this.$api.get('/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=10&isDesc=true'),
      ]).then(this.$api.spread((res1, res2) => {
        this.newinfo = res1.data;
        this.article = res2.data;
        this.UpRead(this.newinfo);

        this.blog = marked(this.newinfo.text)
      })
      ).catch(err => {
        console.log(err)
      });
    },
    //  更新操作
    async UpRead (info) {
      if (info == null) {
        console.log(info)
        return
      } else {
        info.read++
        this.$api({
          // 更新
          url: "/api/SnArticle/AysUpArticle",
          method: "put",
          data: {
            articleId: info.articleId,
            userId: Number(info.userId),
            title: info.title,
            titleText: info.titleText,
            text: info.text,
            time: info.time,
            labelId: info.labelId,
            read: Number(info.read),
            give: Number(info.give),
            comment: info.comment,
            sortId: info.sortId,
            typeTitle: info.typeTitle,
            urlImg: info.urlImg
          }
        })
          .then(res => {
            if (res.status === 200) {
              console.log("1")
            } else {
              alert("更新失败");
            }
          })
          .catch(console.error.bind(console)); // 异常
      }

    },
    UpGive (info) {
      var timebools = this.timebool
      if (info == null || timebools == false) {
        console.log(info, this.timebool)
        return
      } else {
        info.give++
        this.$api({
          // 更新
          url: "/api/SnArticle/AysUpArticle",
          method: "put",
          data: {
            articleId: info.articleId,
            userId: Number(info.userId),
            title: info.title,
            titleText: info.titleText,
            text: info.text,
            time: info.time,
            labelId: info.labelId,
            read: Number(info.read),
            give: Number(info.give),
            comment: info.comment,
            sortId: info.sortId,
            typeTitle: info.typeTitle,
            urlImg: info.urlImg
          }
        })
          .then(res => {
            if (res.status === 200) {

              this.timebool = false
              var time = 10;
              var timer = setInterval(function () {
                time--;
                console.log(time)
                if (time == 0) {
                  this.timebool = true
                  // alert(this.timebool)
                  clearInterval(timer);
                }
              }, 1000);
            } else {
              alert("更新失败");
            }
          })
          .catch(console.error.bind(console)); // 异常
      }

    },

    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backtop () {
      {
        var timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          if (osTop === 0) {
            clearInterval(timer);
          }
        }, 30)

      }
    },


    // 博客详情
    AsyGetTestID (id) {
      // .带参数跳转
      this.$router.push({
        path: '/Indextext',
        query: {
          id: id
        }
      })
      location.reload()
    },

  }

}

</script>

<style lang="scss">
@import "../../assets/sass/com";

/* 回到顶部*/
#backtop {
  top: 92%;
  right: 5%;
  position: fixed;
}

/*底部*/
.article-3 {
  background-color: #ffffff;
  width: 59%;
  margin: 3px 0 0 20%;
  @include boxshow;
  @apply cursor-pointer;
  .article-3-1 {
    /*background-color: #55ff00;*/
    @apply p-1;
    div {
      border-bottom: 1px dashed #f1f1f1;
      /*background-color: #4eb687;*/
      @apply p-1 m-1 text-sm font-light;
    }
  }

  .article-3-2 {
    div {
      /*background-color: #795da3;*/
      @apply text-center px-1 py-2 m-2 text-sm font-light;
    }
  }
}

.icons {
  width: 1.5em;
  height: 1.5em;
}

/*编译器组件*/
.editor-text {
  width: 59%;
  margin: 3px 0 0 20%;
}

/*左侧边栏*/
.article-text {
  position: fixed;
  top: 60px;
  left: 1%;
  background-color: #ffffff;
  width: 17%;
  @include boxshow;
  @apply font-mono;

  .article-text-1 {
    background-color: #4eb687;
    @apply font-semibold bg-gray-200 cursor-pointer;
  }

  .article-text-2 {
    /*background-color: #9a6e3a;*/
    @apply m-1 cursor-pointer  text-base;

    div {
      /*background-color: #55a532;*/
      @apply m-1 p-1 px-3 text-sm;
      border-bottom: 1px dashed #f1f1f1;
    }
  }
}

/*返回上一页*/
.article-title {
  position: relative;
  margin: 60px 0 0 20%;
  height: 40px;
  width: 59%;
  background-color: #ffffff;
  @include boxshow;

  p {
    line-height: 40px;
    font-weight: 800;
  }

  a {
    position: absolute;
    top: 7px;
    left: 8px;
  }
}

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
    @apply text-base pl-2  rounded-sm bg-white leading-relaxed;
  }
}
</style>