<template></template>

<script>
/**
 * - event
      - type  'act' 等  
      - compoentId
      - href

        "trigger": [ //数据源触发定义
          {
            "type": "event",  //  "init" 搜索框change事件时触发。
            "componentId": "input唯一id",
            "event": "change",
          },
        ],
 */
export default {
  name: "global-event-protocol",
  model: {
    prop: "propValue",
    event: "change",
  },
};
</script>

<style>
</style>