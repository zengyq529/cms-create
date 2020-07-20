<template>
  <el-row :gutter="5" style="height:100vh">
    <el-col :span="4" style="height:100vh">
      <component-select></component-select>
    </el-col>
    <el-col :span="16" >
      <module-preview></module-preview>
    </el-col>
    <el-col :span="4" ></el-col>
  </el-row>
</template>

<script>
import ComponentSelect from './component-select.vue'
import ModulePreview from './module-preview.vue'
export default {
  components:{ComponentSelect,ModulePreview},
};
</script>

<style>
</style>