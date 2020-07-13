<template>
  <div style="display:inline">
    <el-cascader
      :options="option"
      v-model="modelvalue"
      placeholder="组件选择"
      @change="componentChange"
      filterable
      clearable
    ></el-cascader>
    <el-button type size="mini" @click="showEdit=true">编辑组件属性</el-button>
    <el-dialog
      title="编辑组件属性"
      v-if="showEdit"
      :visible="true"
      append-to-body
      @close="showEdit=false"
    >
      <div>
        <el-tag size="mini">属性编辑</el-tag>
        <div v-for="item in propertyKeys">
          {{item}}
          <component
            :is="'global-property-bytype-' + property[item].type "
            v-model="property[item].value"
          ></component>
        </div>

        <el-tag size="mini">事件编辑</el-tag>
        <div v-for="item in eventKeys">
          {{item}}
          <component :is="'global-input-event-' + event[item].type " v-model="event[item].value"></component>
        </div>
      </div>
      <el-button size="mini" @click="submit">保存</el-button>
    </el-dialog>
  </div>
</template>

<script>
/**
 * 组件选择器 功能：
 * 1，选择组件
 * 2，设置组件属性。组件属性在组件编辑中保存。
 * {
      componentType: "", //组件name
      property: {},//组件属性 定义的
      event:{}, //组件事件定义的
    }
 */

import ajax from "@/common/ajax";
import { componentsType } from "@/common/data";
export default {
  name: "global-components-select",
  props: {
    componentType: {
      type: String,
      default: ""
    },
    propValue: {
      type: Object,
      default() {
        return {
          componentType: "",
          property: {},
          event: {}
        };
      }
    }
  },
  data() {
    return {
      option: [], //组件列表
      modelvalue: ["", ""], //选择组件
      property: {}, //组件属性
      event: {},
      showEdit: false,
      originList: []
    };
  },
  computed: {
    propertyKeys() {
      return this.property ? Object.keys(this.property) : [];
    },
    eventKeys() {
      return this.event ? Object.keys(this.event) : [];
    }
  },
  async created() {
    this.initData();
    setTimeout(() => {
      console.log(this.propValue);
    }, 2000);
  },
  watch: {
    propValue(newval) {
      this.initData();
    }
  },
  methods: {
    async initData() {
      await this.getComponentList();
      if (!this.propValue.componentType) {
        return;
      }
      // 一下 是吧 elem的module中设置的值和组件默认的定义进行对比，原因：组件入参会更新，另外拼module设置的值。
      //比如 module里面设置的值是： {"a":{type:'String',value:'124'}}  组件里面的值是：{"a":{type:'String'}} 没有 value 属性。 需要添加
      let property = this.propValue.property
        ? JSON.parse(JSON.stringify(this.propValue.property))
        : {};
      let event = this.propValue.event
        ? JSON.parse(JSON.stringify(this.propValue.event))
        : {};
      let newproperty = {};
      let newevent = {};
      let temp = this.originList.filter(
        item => item.value == this.propValue.componentType
      )[0];
      let componentProperty = JSON.parse(temp.property);
      let componentEvent = JSON.parse(temp.event);
      for (let key in componentProperty) {
        //组件属性更新的情况下 需要做个 输入属性和现有组件属性的合并
        componentProperty[key].value = undefined;
        newproperty[key] = property[key] || componentProperty[key];
      }
      for (let key in componentEvent) {
        //组件属性更新的情况下 需要做个 输入属性和现有组件属性的合并
        componentEvent[key].value = { actType: "", target: "" };
        newevent[key] = property[key] || componentEvent[key];
      }
      this.modelvalue = [temp.type, this.propValue.componentType];
      this.property = newproperty;
      this.event = newevent;
    },
    async getComponentList() {
      if (this.option.length) {
        return;
      }
      const {
        result: { list }
      } = await ajax.get("/component/list", {
        page: 1,
        pageSize: 1000
      });
      this.originList = list;
      list.forEach(item => {
        item.label = item.label;
        item.value = item.name;
      });
      componentsType.forEach(({ label, value }) => {
        let children = list.filter(item => item.type == value);
        this.option.push({ label, value, children });
      });
    },
    submit() {
      this.$emit("change", {
        componentType: this.modelvalue[1],
        property: this.property,
        event: this.event
      });
      this.showEdit = false;
    },
    componentChange(value) {
      let {
        property: componentProperty,
        event: componentEvent
      } = this.originList.filter(item => item.name == value[1])[0];
      let property = JSON.parse(componentProperty);
      let event = JSON.parse(componentEvent);

      for (let key in property) {
        property[key].value = undefined;
      }
      this.property = property;
      for (let key in event) {
        event[key].value = { actType: "", target: "" };
      }
      this.event = event;
      this.showEdit = true;
      this.$emit("change", {
        componentType: this.modelvalue[1],
        property: this.property,
        event: this.event
      });
    }
  }
};
</script>

<style>
</style>