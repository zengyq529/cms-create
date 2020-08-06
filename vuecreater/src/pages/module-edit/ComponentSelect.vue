
<template>
  <div class="component-container" style="height:100%;">
    <el-input v-model="search" placeholder></el-input>
    <ul style="background:#fff;overflow-y:scroll;height:calc(100% - 100px)">
      <li class="list-item" v-for="(item,index) in listFilter" :key="index">
        {{item.name}}
        <el-button  @click="clickHandler(item)">选择</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
 
import { ifValueIsJsonStr2Json } from "@/common/utils";
import {getElementComponent} from '@/common/elementui-import';
export default {
  data() {
    return {
      search: "",
      list: [],
    };
  },
  computed: {
    listFilter() {
      return this.list.filter(
        (item) =>
          item.name.indexOf(this.search) > -1 || this.search == ""
      );
    },
  },
  async created() {
    this.list = getElementComponent()
  },
  methods: {
    clickHandler(currentItem) {
      let currentComponent = ifValueIsJsonStr2Json({ ...currentItem })
      this.$store.commit('moduleEdit/pushNewComponent', currentComponent);
    },
  },
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