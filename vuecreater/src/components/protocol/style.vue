<template>
  <div></div>
</template>

<script>
/**
 * 支持 width height
 * {
 *  style:{
 *    width
 *    height
 *  }
 * }
 */
export default {
  name: "global-style-protocol",
  propValue: {
    type: Object,
    default() {
      return {};
    },
  },
  model: {
    prop: "propValue",
    event: "change",
  },
};
</script>

<style>
</style>