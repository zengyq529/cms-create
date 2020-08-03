<template>
  <div class="module-container" @click="$store.commit('moduleEdit/setCurrentComponent',{})">
    <div class="title-bar">
      <el-button type @click="saveAll">保存</el-button>
    </div>
    <div style="border:1px solid #ccc;height:100%">
      <component-wraper
        v-for="(item,index) in detail.components"
        :key="index"
        :component="item"
        :parent="{children:detail.components}"
        :currentIndex="index"
      ></component-wraper>
       <global-drag-holder-place v-if="showPlaceHolder"></global-drag-holder-place>
    </div>
  </div>
</template>

<script>
import ComponentWraper from "./children-component/ComponentWraper";
import server from "../../components/common-manage/server";

export default {
  data() {
    return {
      id: "",
      type: "module",
      needJsonTransfer: ["props", "components", "event", "style", "source"],
    };
  },
  components: {
    ComponentWraper,
  },
  computed: {
    detail() {
      return this.$store.state.moduleEdit.detail;
    },
     showPlaceHolder(){
      return !this.$store.state.moduleEdit.currentComponent.componentName;
    }
  },
  async created() {
    //拉数据
    let { id } = this.$route.params;
    if (id && id != -1) {
      this.id = id;
      let detail = await server.getDetail(this.type, id);
      this.$store.commit("moduleEdit/setDetail", detail);

      // 测试代码自动触发选中第一个
      setTimeout(() => {
        this.$store.commit(
          "moduleEdit/setCurrentComponent",
          this.detail.components[0] || {}
        );
      });
    }
  },
  mounted() {},
  methods: {
    async saveAll() {
      let detail = { ...this.detail };
      this.needJsonTransfer.forEach((item) => {
        detail[item] = JSON.stringify(detail[item] || {});
      });
      await (this.id
        ? server.update(this.type, this.id, detail)
        : server.add(this.type, detail));
    },
  },
};
</script>

<style lang="scss">
.module-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
  padding-top: 40px;
  box-sizing: border-box;
  .title-bar {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
}
</style>