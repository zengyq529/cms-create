<template>
  <el-tabs class="module-protocol-edit-container" v-model="activeName">
    <el-tab-pane label="模块编辑" name="1" >
      <global-manage-edit type="module"></global-manage-edit>
    </el-tab-pane>
    <el-tab-pane label="组件props编辑" name="2">
      <global-param-protocol v-model="currentComponent.props"></global-param-protocol>
    </el-tab-pane>
    <el-tab-pane label="组件style编辑" name="3">
      <global-style-protocol></global-style-protocol>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
  computed: {
    currentComponent() {
      return this.$store.state.moduleEdit.currentComponent;
    },
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.module-protocol-edit-container {
  width: 100%;
  height: 100%;
}
</style>