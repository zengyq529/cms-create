<template>
  <el-select v-model="modelvalue" placeholder @change="change" filterable clearable size="mini">
    <el-option v-for="(item,index) in option" :key="index" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>
/**
 * 组件类型  模块类型 模块展示类型
 */
export default {
  name: "custom-el-select",
  props: {
    propValue: {
      type: [String,Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    option: {
      type: Array,
      default() {
        return [{ label: "选项1", value: "1" }];
      },
    },
  },
  model: {
    prop: "propValue",
    event: "change",
  },
  mounted() {
    this.modelvalue = this.propValue;
  },
  watch: {
    propValue(newval) {
      this.modelvalue = newval;
    },
  },
  data() {
    return {
      modelvalue: "",
    };
  },
  methods: {
    getGame() {
      if (this.option.length) {
        return;
      }
    },
    change(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style>
</style>