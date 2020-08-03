<template>
  <div class="foot-wrapper">
    <div class="tabel-footer">
      <div style="float:left">
        <slot name="left" />
      </div>
      <div v-show="showSizeControl" class="page-rank">
        <el-popover placement="top-start">
          <div>
            <div class="popup-menu-wrapper page-popup" style="position:relative;margin:-20px;">
              <div
                v-for="(item,index) in pageSizeList"
                :key="index"
                class="popup-menu"
                @click="sizeChange(item)"
              >{{ item }}条/页</div>
            </div>
          </div>
          <div slot="reference" class="cur-length">
            {{ size }}条/页
            <i class="el-icon-arrow-down"></i>
          </div>
        </el-popover>
      </div>
    </div>
    <el-pagination
      class="list-global-footer-page"
      background
      layout="prev, pager, next,jumper"
      :total="total"
      :page-size="size"
      :page-count="page"
      :current-page="page"
      @current-change="pageChange"
    />
  </div>
</template>
<script>
/**
 * @description 列表底部底部分页功能具体包括：分页，设置分页条数，左侧按钮slot。
 * @param 参考props 。
 * @emits sizeChange {size | 新的分页数}
 * @emits pageChange {page | 当前选中页数}
 * ps:
 *  slot: 需要添加属性 name="left"。
 * @example
 *         <global-footer-page  :size="listInfo.pageSize" :total="listInfo.total" :page="listInfo.page" @sizeChange="sizeChange" @pageChange="pageChange"></global-footer-page>
 */
export default {
  name: "global-footer-page",
  props: {
    size: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    showSizeControl: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageSizeList: [10, 20, 50, 100]
    };
  },
  methods: {
    sizeChange(newsize) {
      if (newsize !== this.size) this.$emit("sizeChange", newsize);
    },
    pageChange(newpage) {
      if (newpage !== this.page) this.$emit("pageChange", newpage);
    }
  }
};
</script>
<style lang="scss">
.foot-wrapper {
  border: 1px solid #e3ecf5;
  border-top: 0px;
  .tabel-footer {
    width: 100%;
    background: #f2f7fb;
    padding: 10px 0 10px 20px;
    position: relative;
    color: rgba(65, 71, 94, 0.7);
    border-bottom: 1px solid #e3ecf5;
    box-sizing: border-box;
    min-height: 41px;
    .page-rank {
      float: right;
      margin-right: 30px;
    }
  }
  .list-global-footer-page {
    text-align: center;
    margin: 20px;
  }
  /deep/.el-icon-arrow-down {
    position: relative;
    font-weight: bold;
    margin-left: 2px;
    top: 1px;
  }
  .cur-length {
    margin-right: 10px;
  }
}
</style>
