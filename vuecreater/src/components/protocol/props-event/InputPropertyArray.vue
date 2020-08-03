<template>
  <el-input v-model="modelValue" placeholder="待编辑属性输入json" @change="change"></el-input>
</template>

<script>
// 输入 输出都是 Array 格式。
export default {
  name:"global-property-bytype-Array",
  props:{
    propValue:{
      type:Array,
      default(){
        return []
      },
    } 
  },
   model: {
    prop: "propValue",
    event: "change"
  },
  data(){
    return{
      modelValue: JSON.stringify( this.propValue ),
    }
  },
  watch:{
    propValue(){
      this.modelValue = JSON.stringify(this.propValue)
    }
  },
  methods:{
    change(newval){
      this.$emit('change',JSON.parse(newval))
    }
  }
}
</script>

<style>

</style>