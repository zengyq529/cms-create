<template>
  <global-manage :type="type"></global-manage>
</template>

<script>
export default {

  created() {
    this.type = this.$route.params.type;
  }
};
</script>

<style>
</style>