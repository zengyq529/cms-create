const component = {
  name: '组件',
  title: '组件列表',
  addBtn: '添加',
  search: [
    { component: 'el-input', placeholder: '名称搜索', name: 'componentName', value: "" }
  ],
  addParam: {
    componentName: {
      label: '组件名称',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
    componentDesc: {
      label: '组件描述',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
    type: {
      label: '组件类型',
      default: '',
      component: 'global-type-select',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: { type: 'component' }
    },
    props: {
      label: 'props',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
    },
    event: {
      label: 'event',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
    },
    hasChildren: {
      label: 'hasChildren',
      default: 1,
      component: 'el-checkbox',
      placeholder: '',
      props:{
        'true-label':1,
        'false-label':0,
      },
      check: [{ required: true, message: '', trigger: 'change' }],
    }
  },
  tableParam: [
    { label: '组件名称', value: 'componentName', },
    { label: '组件类型', value: 'type', },
    { label: '组件描述', value: 'componentDesc', },
  ]
}

const module = {
  name: '模块',
  title: '模块列表',
  addBtn: '添加',
  search: [],
  tableParam: [
    { label: '模块名称', value: 'componentName', },
    { label: '模块类型', value: 'type', },
    { label: '模块描述', value: 'componentDesc', },
    { label: '编辑组件', value: "id", component: 'global-module-link', },
  ],
  addParam: {
    moduleName: {
      label: '组件名称',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
    moduleDesc: {
      label: '组件描述',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
  }
}
export default {
  component,
  module,

}
