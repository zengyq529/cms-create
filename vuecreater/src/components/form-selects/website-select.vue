<template>
  <el-select size="mini" v-model="modelvalue" placeholder="选择站点" :multiple="multiple" @change="value=>$emit('change',value)" filterable clearable>
    <el-option v-for="(item,index) in option" :key="index" :label="item.label" :value="item.name"></el-option>
  </el-select>
</template>

<script>
import ajax from '@/common/ajax'
export default {
  name:'global-website-select',
  props:{
    propValue:{
      type:String,
      default:''
    },
    multiple:{
      type:Boolean,
      default:false
    },
  },
  model: {
    prop: "propValue",
    event: "change"
  },
  data(){
    return{
      option:[],
      modelvalue:""
    }
  },
  watch:{
    propValue(newval){
      this.modelvalue = newval;
    }
  },
  mounted(){
    this.modelvalue = this.propValue;
    this.getList();
  },
  methods:{
    async getList(){
      if(this.option.length){
        return
      }
      const { result:{list} } = await ajax.get('/website/list',{page:0,pageSize:100})
      this.option = list;
    },
  }
}
</script>

<style>

</style>