<template>
  <div class="protocol-elem">
    <div v-for="(item,index) in list" :key="index">
      <el-input v-model="item.name" placeholder="name"></el-input>
      <el-input v-model="item.url" placeholder="url"></el-input>
      <global-type-select type="ajaxMethod" v-model="item.method"></global-type-select>
      <param-protocol v-model="item.param"></param-protocol>
      <global-array-edit :index="index" :array="list"></global-array-edit>
    </div>
  </div>
</template>

<script>
/**
 * 输出协议
 * {
 * "source": [ //module component都可有source 链接数据源属性。
      {
        "name": "getList",
        "url": "/api/demo",
        "method": "GET",
        "param": { //url 的参数。
           key:valueFormat 来自valueFormat 协议。
          },
        },
      },
    ],
  }
 */
import { ParamProtocol } from "./Param";
export default {
  components: { ParamProtocol },
  name: "source-protocol",
  props: {
    propValue: {
      type: Array,
      default() {
        return [
          {
            name: "ajax1",
            url: "/url1",
            param: {
              page: {},
              pageSize: {},
            },
          },
          {
            name: "ajax2",
            url: "/url2",
            param: {
              name: {},
              hahah: {},
            },
          },
        ];
      },
    },
  },
  data() {
    return {
      list: [],
    };
  },
};
</script>

<style>
</style>