<template>
  <span class="form-elem-edit">
    <i class="el-icon-circle-plus-outline" @click="editElem('add')"></i>
    <i class="el-icon-sort-up" @click="editElem('up')"></i>
    <i class="el-icon-sort-down" @click="editElem('down')"></i>
    <i class="el-icon-delete" @click="editElem('delete')"></i>
  </span>
</template>

<script>
export default {
  name: "global-array-edit",
  props: ["index", "array"],
  methods: {
    editElem(oper) {
      switch (oper) {
        case "up":
          if (this.index != 0) {
            this.array.splice(
              this.index - 1,
              0,
              this.array.splice(this.index, 1)[0]
            );
          }
          break;
        case "down":
          this.array.splice(
            this.index + 1,
            0,
            this.array.splice(this.index, 1)[0]
          );
          break;
        case "delete":
          this.array.splice(this.index, 1);
          break;
        case "add":
          this.array.push({...this.array[this.index]});
          break;
        default:
      }
    }
  }
};
</script>

<style>
.form-elem-edit i {
  margin: 0 10px;
}
</style>