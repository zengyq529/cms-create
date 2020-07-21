
<template>
  <div class="component-container" style="height:100%;">
    <el-input v-model="search" placeholder></el-input>
    <ul style="background:#fff;overflow-y:scroll;height:calc(100% - 100px)">
      <li class="list-item" v-for="(item,index) in listFilter" :key="index">
        {{item.componentName}}
        <el-button size="mini" @click="clickHandler(item)">选择</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
import { getList } from "@/components/common-manage/server";
import eventBus from "./event-bus";

export default {
  data() {
    return {
      search: "",
      list: []
    };
  },
  computed: {
    listFilter() {
      return this.list.filter(
        item =>
          item.componentName.indexOf(this.search) > -1 || this.search == ""
      );
    }
  },
  async created() {
    let { list } = (await getList("component", 1, 1000)) || "";
    this.list = list;
  },
  methods: {
    clickHandler(currentItem) {
      eventBus.$emit("addComponent", { ...currentItem });
    }
  }
};
</script>

<style lang="scss">
.component-container {
  .list-item {
    height: 30px;
    text-align: 30px;
    button {
      float: right;
    }
  }
}
</style>