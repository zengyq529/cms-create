<template>
  <div style="padding:0px 20px">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" size="mini">
      <el-form-item
        v-for="(item,index) in formKeys"
        :key="index"
        :label="addParam[item].label"
        :prop="item"
      >
        <component
          :is="addParam[item].component"
          v-model="form[item]"
          :placeholder="addParam[item].placeholder"
          v-bind="addParam[item].props"
          style="width:100%"
        ></component>
      </el-form-item>
    </el-form>
    <div class="bottom-absolute">
      <el-button round @click="$emit('cancel')">取消</el-button>
      <el-button round type="primary" @click="submit">确定</el-button>
    </div>
  </div>
</template>
<script>
/**
 * props传id  detail。
 * type 默认component。 只支持props传 type type支持component / module
 *  @event submit 
 *  @event cancel
 */

import { getDetail, submit, add } from "./server";
import pageConfig from "./config";

export default {
  name: "global-manage-edit",
  components: {},
  props: {
    type: {
      type: String,
      default: "component"
    },
    detail: {
      type: Object,
      default() {
        return {};
      }
    },
    id: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      currentId: "",
      showAlert: true,
      form: {},
      rules: {},
      sending: false,
      addParam: {},
      addTitle: "",
      updateTitle: ""
    };
  },
  computed: {
    formKeys() {
      return Object.keys(this.form);
    },
    editTitle() {
      return this.detail.id ? this.updateTitle : this.addTitle;
    }
  },
  watch: {
    id() {
      this.setData("id", id);
    },
    detail() {
      this.setData("detail", this.detail);
    }
  },
  created() {
    let { addParam = {}, addTitle, updateTitle } = pageConfig[this.type];
    this.addParam = addParam;
    let form = {};
    let rules = {};
    for (let key in addParam) {
      form[key] = addParam[key].defaultValue;
      if (addParam[key].check) {
        rules[key] = addParam[key].check;
      }
    }
    this.form = form;
    this.rules = rules;
    if (this.id) {
      this.setData("id", this.id);
    } else if (this.detail.id) {
      this.setData("detail", this.detail);
    }
  },
  methods: {
    async setData(type, data) {
      let detail = {};
      if (type == "id") {
        this.currentId = data;
        detail = await getDetail("component", data);
      } else if (type == "detail") {
        detail = data;
        this.currentId = data.id;
      }
      for (let key in this.form) {
        this.form[key] = detail[key];
      }
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitAct();
        } else {
          return false;
        }
      });
    },
    async submitAct() {
      this.sending = true;
      const { name, label } = this.form;
      const isSus = await (this.currentId
        ? update("component", this.currentId, this.form)
        : add("component", this.form));
      if (isSus) {
        this.$notify.success("修改成功");
        this.$emit("submit");
      }
      this.sending = false;
    }
  }
};
</script>
<style>
</style>