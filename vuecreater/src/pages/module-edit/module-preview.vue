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
            children: [
              {
                componentName: "el-col",
                children: [
                  {
                    componentName: "el-button"
                  },
                  {
                    componentName: "el-input"
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