<template>
<div></div>
</template>

<script>
import { getComponentDetail } from "./server";
export default {
  data() {
    return {
      id: "",
      detail: {}
    }
  },
  async created() {
    // this.id = this.$route.param.id;
    // let data = await getComponentDetail(this.id);
    // console.log(data);
  }
}
</script>

<style>
</style>