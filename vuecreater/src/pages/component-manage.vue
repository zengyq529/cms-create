<template>
  <div>
    <div class="data-panel-content">
      <global-top-search-bar>
        <el-button type size="mini" slot="left" @click="showEdit=true">上传组件</el-button>
        <el-button type size="mini" slot="left" @click="batchImport">批量导入element-ui</el-button>
        <global-type-select type="components" slot="right" v-model="search.type" @change="getList();"></global-type-select>
      </global-top-search-bar>
      <el-table :data="listInfo.list" width="100%">
        <el-table-column prop="componentName" label="配置名称" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="componentDesc" label="更多描述" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editAct(scope.row)">编辑</el-button>
            <el-button size="mini" @click="detAct(scope.row.id)">删除</el-button>
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
    </div>
  </div>
</template>

<script>
import {getComponentList,deleteComponent}  from "./server";
import { getElementComponent } from "./elementui-import"
export default {
  name: "conponent-manage",
  data() {
    return {
      search: {
        website: "",
        type:""
      },
      listInfo: {
        list: [],
        page: 1,
        pageSize: 10,
        total: 1,
        status: "start" // 'start' //初始状态 'loading' 加载中,'loadingend' 加载完成
      },
      currentId: ""
    };
  },
  watch: {},
  components: {
  },
  mounted() {
    this.getList();
  },
  methods: {
    // 统一拉列表接口
    async getList() {
      // TODO 列表类页面通用逻辑
      const { page, pageSize, status } = this.listInfo;
      const { website,type } = this.search;
      if (status === "loading") {
        return;
      }
      let param = { page, pageSize };
      if (website) param.website = website;
      if(type) param.type = type;
      const { list, total } = await getComponentList(param);
      this.listInfo.list = list;
      this.listInfo.total = total;
      this.listInfo.status = "loadingend";
    },
    async detAct(id) {
      this.$confirm("确认删除").then(async ()=> {
        const isSus = await deleteComponent(id);
        if (isSus) {
          this.getList();
          this.$notify.success({ message: "删除成功" });
        }
      });
    },
    batchImport(){
      let componentList = getElementComponent();
    },
    editAct(item) {
      this.$router.push('/component/' + item.id);
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

  }
};
</script>
 
