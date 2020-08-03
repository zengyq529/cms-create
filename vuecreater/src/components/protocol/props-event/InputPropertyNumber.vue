<template>
  <el-input v-model="modelValue" placeholder="待编辑属性" @change="value=>$emit('change',value)"></el-input>
</template>

<script>
export default {
  name:"global-property-bytype-Number",
  props:{
    propValue:{
      type:String,
      default:'',
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