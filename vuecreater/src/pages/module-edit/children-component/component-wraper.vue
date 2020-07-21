<template>
  <div class="component-wraper">
    <div class="component-label"> {{component.componentName}}</div>
    <div class="operate-content">
      <i class="el-icon-circle-plus-outline" v-if="component.hasChildren" @click="componentHandler('add-child')"></i>
      <i class="el-icon-edit" @click="componentHandler('edit')"></i>
      <i class="el-icon-top" @click="componentHandler('up')"></i>
      <i class="el-icon-bottom" @click="componentHandler('down')"></i>
      <i class="el-icon-close" @click="componentHandler('del')"></i>
    </div>
    <component :is="component.componentName" :bind="component.props">
      <component-wraper
        v-for="(item,index) in component.children"
        :key="index"
        :component="item"
        :parent="component"
        :currentIndex="index"
      ></component-wraper>
      <div class="component-placeholder" v-if="showPlaceHolder">将组件拖入到该位置</div>
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
      let componentsList = this.parent.children;
      switch (type) {
        case "edit":
          EventBus.$emit("componentEdit", this.component);
          break;
        case "up":
          if (this.currentIndex > 0) {
            componentsList[this.currentIndex] = componentsList.splice(
              this.currentIndex,
              1,
              componentsList[this.currentIndex]
            )[0];
          }
          break;
        case "down":
          if (this.currentIndex < componentsList.length - 1) {
            componentsList[this.currentIndex] = componentsList.splice(
              this.currentIndex + 1,
              1,
              componentsList[this.currentIndex]
            )[0];
          }
          break;
        case "del":
          componentsList.splice(this.currentIndex, 1);
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
  min-height: 5px;
  position: relative;
  padding: 10px;
  .operate-content {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 1000;
    width: 90px;
    height: 20px;
    background: #ff000020;
  }
  .component-label{
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .component-placeholder {
    width: 100%;
    min-width: 100px;
    height: 40px;
    border: 1px dotted darksalmon;

  }
}
</style>