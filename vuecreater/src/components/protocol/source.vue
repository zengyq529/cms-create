<template>

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
        "trigger": [ //数据源触发定义
          {
            "type": "event",  //  "init" 搜索框change事件时触发。
            "componentId": "input唯一id",
            "event": "change",
          },
        ],
        "param": { //url 的参数。
           key:valueFormat 来自valueFormat 协议。
          },
        },
      },
    ],
  }
 */
export default {

}
</script>

<style>

</style>