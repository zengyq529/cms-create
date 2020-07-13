<template>
  <el-select
    v-model="modelvalue"
    placeholder
    :multiple="multiple"
    @change="gameChange"
    filterable
    clearable
    size="mini"
  >
    <el-option v-for="(item,index) in option" :key="index" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>
/**
 * 组件类型  模块类型 模块展示类型
 */
import commonData  from "@/common/data";
 //commonData =  { componentsType,pageType,showType,checkform } 
export default {
  name: "global-type-select",
  props: {
    propValue: {
      type: [String,Array],
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ""
    },
  },
  model: {
    prop: "propValue",
    event: "change"
  },
  mounted() {
    this.modelvalue = this.propValue;
  },
  watch: {
    propValue(newval) {
      this.modelvalue = newval;
    }
  },
  data() {
    return {
      option: commonData[this.type + 'Type'],
      modelvalue: ""
    };
  },
  methods: {
    getGame() {
      if (this.option.length) {
        return;
      }
    },
    gameChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>

<style>
</style>