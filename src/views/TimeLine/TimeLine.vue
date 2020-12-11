<template>
  <div class="timeline animate__animated animate__fadeIn">
    <sidebarsn></sidebarsn>
    <div class="timeline-img">
      <h4>Archive</h4>
      <p>最后更新于2020年11月26日</p>
    </div>
    <div class="timeline-title">
      <div class="timeline-title-1">
        <ul>
          <li>分类 : 14+</li>
          <li>标签 : 76+</li>
          <li>文章 : 46+</li>
          <li>阅读 : 46+</li>
          <li>留言 : 100+</li>
        </ul>
      </div>
    </div>

    <div class="timeline-time">
      <div class="block">
        <a-timeline v-for="(activity, index) in items" :key="index">
          <div class="block-1">
            <a-timeline-item>
              <h4>
                <a>{{ activity.title }} </a>
              </h4>
            </a-timeline-item>
            <a-timeline-item color="green">
              <p>提交于 {{ activity.time }}</p>
            </a-timeline-item>
          </div>
        </a-timeline>
      </div>

      <IndexSidebar></IndexSidebar>

      <!-- 回到顶部 -->
      <a-back-top />
    </div>
  </div>
  <div>
    <a-spin :spinning="spinning" :delay="200">
      <div class=""></div>
    </a-spin>
  </div>
</template>

<script>

export default {
  name: "TimeLine",
  components: {},
  data () {
    return {
      items: [
      ],
      reverse: true,
      spinning: true,
    }
  },
  created () {
    this.AsyGetTest()
  },
  methods: {
    //加载文章
    AsyGetTest () {

      this.$api({
        url: '/api/SnArticle/GetfyTest?label=00&pageIndex=1&pageSize=500&isDesc=true'
      }).then(res => {
        this.items = res.data;
        for (var i = 0; i < res.data.length; i++) {
          this.items[i].content = res.data[i].title
          this.items[i].tag = res.data[i].time
          // console.log(res.data[i].title);
          this.spinning = false;
        }

      }).catch((e) => {
        console.log(e + '获取数据失败');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .timeline {
    width: 49%;
    margin: 0 auto;
    margin-top: 60px;
    margin-left: 23%;
    @apply text-base bg-white;
    .timeline-img {
      position: relative;
      height: 100px;
      width: 100%;
      background: no-repeat center/100% url("../../assets/img/timebg.jpg");
      @include boxshow;

      h4 {
        position: absolute;
        top: 16%;
        left: 45%;
        color: white;
        font-weight: 300;
      }

      p {
        position: absolute;
        top: 53%;
        left: 39%;
        color: #7f828f;
        font-weight: 300;
        font-size: 15px;
      }
    }

    .timeline-title {
      margin-top: 10px;

      .timeline-title-1 {
        margin: 0 auto;
        @include boxshow;

        ul li {
          display: inline-block;
          padding-left: 6.8%;
          color: #666;
          text-align: center;
          height: 80px;
          line-height: 90px;
        }
      }
    }

    .timeline-time {
      position: relative;
      margin: 10px auto 0 auto;
      @include boxshow;
      .block {
        @apply mx-4 mt-2;

        .block-1 {
          @apply m-2;
          h4 {
            @apply text-base;
          }
        }
      }
    }
  }
</style>
