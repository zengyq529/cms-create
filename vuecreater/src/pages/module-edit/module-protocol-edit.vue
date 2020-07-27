<template>
  <el-collapse   class="module-protocol-edit-container">
    <el-collapse-item title="模块编辑" name="1">
      <global-manage-edit type="module"></global-manage-edit>
    </el-collapse-item>
    <el-collapse-item title="组件props编辑" name="2">
      <global-param-protocol></global-param-protocol>
    </el-collapse-item>
    <el-collapse-item title="组件style编辑" name="3">
      <global-style-protocol></global-style-protocol>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
 
export default {
  computed:{
    currentComponent(){
      this.$store.state.moduleEdit.currentComponent;
    }
  },
  mounted(){
    
  },
  methods:{
    
  }
};
</script>
<style>
.module-protocol-edit-container {
  width: 100%;
  height: 100%;
}
</style>