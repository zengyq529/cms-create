<template>
  <div class="data-panel-content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>管理端生成器</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <global-top-search-bar>
      <el-button type="primary" slot="left" @click="showEdit=true,selectedDetail={}">{{addBtn}}</el-button>
      <div slot="right">
        <component
          v-for="(item,index) in search"
          :key="index"
          :is="item.component"
          :placeholder="item.placeholder"
          v-model="item.value"
          v-bind="item.props"
          @change="getList"
          style="width:200px"
        ></component>
      </div>
    </global-top-search-bar>

    <el-table :data="listInfo.list" width="100%">
      <el-table-column v-for="(item,index) in tableParam" :key="index" :label="item.label">
        <template slot-scope="scope">
          <div v-if="item.component">
            <component :is="item.component" :propValue="scope.row[item.value]" v-bind="item.props"></component>
          </div>
          <span v-else>{{scope.row[item.value]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="editAct(scope.row)" style="margin-right: 20px;">编辑</el-button>
          <el-popconfirm title="确认删除次数据吗？" @onConfirm="detAct(scope.row.id)">
            <el-button slot="reference" type="danger" size="mini">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <global-footer-page
      :size="listInfo.pageSize"
      :total="listInfo.total"
      :page="listInfo.page"
      @sizeChange="sizeChange"
      @pageChange="pageChange"
    ></global-footer-page>
    <el-dialog :title="title" :visible="true" v-if="showEdit" @close="showEdit=false">
      <global-manage-edit
        :type="type"
        :detail="selectedDetail"
        @submit="editCallback"
        @cancel="showEdit=false"
      ></global-manage-edit>
    </el-dialog>
  </div>
</template>

<script>
import { del, getList } from "./server";
import pageConfig from "./config";

/**
 * @description vue component | 通用列表组件,展示方式：通过路由配置，独立页面，不能做子组件使用。
 * @description 通过配置路由/common-manage/:type 访问到此页面。
 * @description 页面参数配置："./config" 文件中。
 *
 */

export default {
  name: "global-manage",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "",
      addBtn: "",
      search: [],
      tableParam: [],
      listInfo: {
        list: [],
        page: 1,
        pageSize: 10,
        total: 1,
        status: "start", // 'start' //初始状态 'loading' 加载中,'loadingend' 加载完成
      },
      showEdit: false,
      selectedDetail: {},
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let { title, addBtn, search = [], tableParam } = pageConfig[this.type];
      this.title = title;
      this.addBtn = addBtn;
      this.search = search;
      this.tableParam = tableParam;
      this.getList();
    },
    // 统一拉列表接口
    async getList() {
      // TODO 列表类页面通用逻辑
      const { page, pageSize, status } = this.listInfo;
      if (status === "loading") {
        return;
      }
      let searchParam = {};
      this.search.forEach((item) => {
        if (item.value) {
          searchParam[item.name] = item.value;
        }
      });
      const { list, total } = await getList(
        this.type,
        page,
        pageSize,
        searchParam
      );
      this.listInfo.list = list;
      this.listInfo.total = total;
      this.listInfo.status = "loadingend";
    },
    async detAct(id) {
      const isSus = await del(this.type, id);
      this.getList();
    //  this.$notify.success({ message: "删除成功" });
    },
    editAct(item) {
      this.showEdit = true;
      this.selectedDetail = item;
    },
    editCallback() {
      this.getList();
      this.showEdit = false;
    },
    sizeChange(newSize) {
      this.listInfo.pageSize = newSize;
      this.listInfo.page = 1;
      this.getList();
    },
    pageChange(newPage) {
      this.listInfo.page = newPage;
      this.getList();
    },
    searchChange() {
      this.listInfo.page = 1;
      this.getList();
    },
  },
};
</script>
 <style scoped>
.data-panel-content {
  background: #fff;
  padding: 10px;
  min-height: 100%;
}
</style>