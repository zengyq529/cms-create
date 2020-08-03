<template>
  <el-link :href="'#/module/' + propValue" type="primary">编辑模块</el-link>
</template>
<script>
export default {
  props:['propValue'],
  name:"global-module-link"
}
</script>

<style>

</style>