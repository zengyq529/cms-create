<template>
  <el-row :gutter="5" style="height:100vh">
    <el-col :span="4" style="height:100vh">
      <component-select></component-select>
    </el-col>
    <el-col :span="16" style="height:100vh" >
      <module-preview></module-preview>
    </el-col>
    <el-col :span="4" style="height:100vh" >
      <module-protocol-edit></module-protocol-edit>
    </el-col>
  </el-row>
</template>

<script>
import ComponentSelect from './component-select.vue'
import ModulePreview from './module-preview.vue'
import moduleProtocolEdit from './module-protocol-edit'
export default {
  components:{ComponentSelect,ModulePreview,moduleProtocolEdit},
};
</script>

<style>
</style>