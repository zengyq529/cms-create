<template>
  <el-table :data="list" width="100%" @selection-change="$emit('selectionChange',item)">
    <el-table-column type="selection" width="55" v-if="needSelection"></el-table-column>
    <el-table-column v-for="(item,index) in option" :key="index" :label="item.label">
      <template slot-scope="scope">
        <div v-if="item.component">
          <component :is="item.component" :propValue="scope.row[item.value]" v-bind="item.props"></component>
        </div>
        <span v-else>{{scope.row[item.value]}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "CustomElTable",
  props: {
    list: {
      type: Array,
      default: [
        { id: "1", name: "名字1" },
        { id: "2", name: "名字2" },
      ],
    },
    option: {
      type: Array,
      default: [
        { label: "数据ID", value: "id" },
        { label: "名称", value: "name" },
      ],
    },
    needSelection: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>