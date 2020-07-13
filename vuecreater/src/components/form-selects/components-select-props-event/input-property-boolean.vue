<template>
  <el-radio-group v-model="modelValue" @change="value=>$emit('change',value)">
    <el-radio :label="true"></el-radio>
    <el-radio :label="false"></el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name:"global-property-bytype-Boolean",
  props:{
    propValue:{
      type:Boolean,
      default:true,
    }
  },
   model: {
    prop: "propValue",
    event: "change"
  },
  data(){
    return{
      modelValue:this.propValue,
    }
  },
  watch:{
    propValue(){
      this.modelValue = this.propValue
    }
  }
}
</script>

<style>

</style>