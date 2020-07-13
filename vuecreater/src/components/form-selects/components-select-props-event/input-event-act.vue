<template>
  <div style="display:inline">
    <global-type-select type="act" v-model="modelValue.actType" @change="change"></global-type-select>
    <el-input  v-model="modelValue.target" placeholder="动作目标" @change="change"></el-input>
  </div>
</template>

<script>
/**
 * 组件 事件
 * 调用方式 v-model 
 *  输入和回调格式:{
          actType:String,
          target:String,
        }
 */
export default {
  name: "global-input-event-act",
  props: {
    propValue: {
      type: Object,
      default() {
        return {
          actType: "",
          target: ""
        };
      }
    }
  },
  model: {
    prop: "propValue",
    event: "change"
  },
  data() {
    return {
      modelValue: this.propValue
    };
  },
  watch: {
    propValue() {
      this.modelValue = this.propValue;
    }
  },
  methods: {
    change() {
      let { actType, target } = this.modelValue;
      this.$emit("change", {
        actType,
        target
      });
    }
  }
};
</script>

<style>
</style>