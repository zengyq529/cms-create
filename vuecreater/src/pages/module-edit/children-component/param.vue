<template>
  <div class="protocol-elem">
    <div v-for="(item,index) in propValueList" :key="index">
      <label>{{item}}:</label>
      <el-checkbox-group v-model="from">
        <el-checkbox label="souce"></el-checkbox>
        <el-checkbox label="component"></el-checkbox>
        <el-checkbox label="固定值"></el-checkbox>
      </el-checkbox-group>
      <div v-if="from=='source'">
        <el-select v-model="source" placeholder @change="change" filterable clearable>
          <el-option
            v-for="(item,index) in sourceList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input placeholder="source字段"></el-input>
      </div>
      <div v-if="from=='component'">
        <el-select v-model="source" placeholder @change="change" filterable clearable>
          <el-option
            v-for="(item,index) in componentList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input placeholder="source字段"></el-input>
      </div>
      <component
        v-if="from=='fixed'"
        :is="'global-property-bytype-' + propValue[item].type "
        v-model="propValue[item].value"
      ></component>
    </div>
  </div>
</template>

<script>
/**
 * 在： props / ajax 提交参数 / 其他需要得到相同格式的地方可以使用。
 * - props 协议
      - type : Number String Boolean Object Array
      - default : 默认值
      - value ：值 来自 固定值 ， source  component 。三种

    返回 demo 
    {
      val1:{ type:"Number",default:"1",value }
      val2:{ type:"String",default:"123",value }
    }
 */
export default {
  name: "param-protocol",
  props: {
    propValue: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    detail() {
      return this.$store.state.moduleEdit.sourceList;
    },
  },
  data() {
    return {
      from: "fixed",
    };
  },
  model: {
    prop: "propValue",
    event: "change",
  },
  computed: {
    propValueList() {
      return Object.keys(this.propValue);
    },
  },
};
</script>

<style>
</style>