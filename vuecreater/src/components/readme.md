- module 固定携带协议 （独立功能的模块，可以是页面，或者是弹框之类的）
  - id
  - props
  - moduleDesc
  - moduleName
  - source []
  - style { width:'100%' } 之类的正常style 样式
  - components [component]
 

- component 携带固定协议 ：可以是 element-ui ant-design 或者自定义组件 
  - id
  - componentName
  - componentDesc
  - props
  - source []
  - style {}
  - text 文字类slot 避免再次嵌套
  - events:[event]
  - components[]
 