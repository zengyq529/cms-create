<template>
  <global-component-elem-list :elemList="modelValue"></global-component-elem-list> 
</template>

<script>
export default {
  name: "global-property-bytype-ComponentArray",
  props: {
    propValue: {
      type: Array,
      default(){
        return []
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
    },
    modelValue(){
      this.$emit('change',this.modelValue)
    }
  }
};
</script>

<style>
</style>