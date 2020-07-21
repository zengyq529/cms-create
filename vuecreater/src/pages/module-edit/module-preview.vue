<template>
  <div class="module-container">
    <component-wraper
      v-for="(item,index) in detail.components"
      :key="index"
      :component="item"
      :parent="{chilren:detail.components}"
      :currentIndex="index"
    ></component-wraper>
  </div>
</template>

<script>
import ComponentWraper from "./children-component/component-wraper";
export default {
  data() {
    return {
      detail: {
        components: [
          {
            componentName: "el-row",
            hasChildren:1,
            children: [
              {
                componentName: "el-col",
                children: [
                  { 
                    componentName: "el-input",
                    hasChildren:0,
                  },
                  {
                    componentName: "el-input",
                    hasChildren:0,
                  }
                ]
              } 
            ]
          }
        ]
      }
    };
  },
  components: {
    ComponentWraper
  },
  created() {}
};
</script>

<style>
.module-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>