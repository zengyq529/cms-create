<template>
  <div class="protocol-elem">
    <div v-for="(item,index) in objList" :key="index">
      <el-input v-model="item.name" placeholder="name"></el-input>
      <component
        :is="'global-property-bytype-' + property[item].type "
        v-model="property[item].value"
      ></component>
      <global-array-edit :index="index" :array="list"></global-array-edit>
    </div>
  </div>
</template>

<script>
/**
 * 在： props / ajax 提交参数 / 其他需要得到相同格式的地方可以使用。
 * - props 协议
      - type : Number String Boolean Object Array
      - default : 默认值
      - value ：值 来自valueformat协议。

    返回 demo 
    {
      val1:{ type:"Number",default:"1",value }
      val2:{ type:"String",default:"123",value }
    }
 */
export default {
  name: "global-param-protocol",
  propValue: {
    type: Object,
    default() {
      return {};
    }
  },
  computed: {
    objList() {
      return Object.keys(this.propValue);
    }
  }
};
</script>

<style>
</style>