<template>
  <div class="component-wraper">
    <div class="operate-content">
      <i class="el-icon-circle-plus-outline" @click="componentHandler('add-child')"></i>
      <i class="el-icon-edit" @click="componentHandler"></i>
      <i class="el-icon-top" @click="componentHandler"></i>
      <i class="el-icon-bottom" @click="componentHandler"></i>
      <i class="el-icon-close" @click="componentHandler"></i>
    </div>
    <component :is="component.componentName" :bind="component.props">
      <component-wraper
        v-for="(item,index) in component.children"
        :key="index"
        :component="item"
        :parent="component"
        :currentIndex="index"
      ></component-wraper>
      <div class="component-placeholder" v-if="showPlaceHolder"></div>
    </component>
  </div>
</template>
<script>
import ComponetWraper from "./component-wraper";
import { EventBus } from "../event-bus";
export default {
  props: {
    component: {
      type: Object,
      default() {
        return {};
      }
    },
    parent: {
      type: Object,
      default() {
        return {};
      }
    },
    currentIndex: {
      type: Number
    }
  },
  data() {
    return {
      showPlaceHolder: false
    };
  },
  created() {
    console.log(this.currentIndex);
  },
  name: "component-wraper",
  components: { ComponetWraper },
  methods: {
    componentHandler(type) {
      switch (type) {
        case "edit":
          EventBus.$emit("componentEdit", this.component);
          break;
        case "up":
          if (this.currentIndex > 0) {
            this.parent[this.currentIndex] = this.parent.splice(
              this.currentIndex,
              1,
              this.parent[this.currentIndex]
            )[0];
          }
          break;
        case "down":
          if (this.currentIndex < this.parent.length - 1) {
            this.parent[this.currentIndex] = this.parent.splice(
              this.currentIndex + 1,
              1,
              this.parent[this.currentIndex]
            )[0];
          }
          break;
        case "del":
          this.parent.splice(this.currentIndex, 1);
          break;
        case "add-child":
          this.showPlaceHolder = true;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.component-wraper {
  display: inline;
  min-height: 5px;
  background: #efefef;
  position: relative;
  .operate-content {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1000;
  }
  .component-placeholder {
    width: 100%;
    height: 100%;
    border: 1px dotted #ccc;
  }
}
</style>