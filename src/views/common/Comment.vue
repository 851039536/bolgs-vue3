<template>
  <div class="comment">
    <a-list
      class="comment-list"
      :header="`${data.length} replies`"
      item-layout="horizontal"
      :data-source="data"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-comment :author="item.author" :avatar="item.avatar">
            <template #actions>
              {{ action }}
            </template>
            <template #content>
              <p>
                {{ item.content }}
              </p>
            </template>
            <template #datetime>
              <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                <span>{{ item.datetime.fromNow() }}</span>
              </a-tooltip>
            </template>
          </a-comment>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { toRefs } from "vue";
export default {
  setup() {
    const state = {
      data: [
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(1, "days"),
        },
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(2, "days"),
        },
      ],
      moment,
    };

    return { ...toRefs(state) };
  },
};
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/com";

  .comment {
    @include initialize(59%, null, 3px, null, 20%, null, null);
    @apply shadow rounded;
    @apply cursor-pointer bg-white text-black;
  }
</style>