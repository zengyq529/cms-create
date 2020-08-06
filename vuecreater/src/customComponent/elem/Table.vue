<template>
  <div>
    <el-table
      :data="list"
      width="100%"
      @selection-change="value=>{$emit('selection-change',value);selectionList=value}"
    >
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

    <div style="text-align:center">
      <div style="float:left">
        <el-button
          v-for="(item,index) in leftBtn"
          :key="index"
          @click="$emit('pagination-btn-click',{name:item.name,selectionList})"
        >{{item.label}}</el-button>
      </div>
      <el-pagination
        @size-change="value=>$emit('size-change',value)"
        @current-change="value=>{$emit('current-change',value)}"
        :current-page="currentPage"
        background
        :page-sizes="pageSizes"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
/**
 * @param list
 * @param option
 * @param needSelection 是否需要多选列
 * @emits('selection-change',itemlist);
 *
 */
export default {
  name: "CustomElTable",
  props: {
    list: {
      type: Array,
      default() {
        return [
          { id: "1", name: "名字1" },
          { id: "2", name: "名字2" },
        ];
      },
    },
    option: {
      type: Array,
      default() {
        return [
          { label: "数据ID", value: "id" },
          { label: "名称", value: "name" },
        ];
      },
    },
    needSelection: {
      type: Boolean,
      default: true,
    },
    needPagination: {
      type: Boolean,
      default: true,
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50, 100];
      },
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    leftBtn: {
      type: Array,
      default() {
        return [{ label: "删除", name: "delete" }];
      },
    },
  },
  data() {
    return {
      selectionList: [],
    };
  },
};
</script>

<style>
</style>