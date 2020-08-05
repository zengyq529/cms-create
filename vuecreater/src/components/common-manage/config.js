const component = {
  name: '组件',
  title: '组件列表',
  addBtn: '添加',
  search: [
    { component: 'el-input', placeholder: '名称搜索', name: 'name', value: "" },
    { component: 'global-type-select', placeholder: '类型搜索', name: 'type', props:{type:'component'} , value: "" }
  ],
  addParam: {
    name: {
      label: '组件名称',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
    desc: {
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
    { label: '组件名称', value: 'name', },
    { label: '组件类型', value: 'type', },
    { label: '组件描述', value: 'desc', },
  ]
}

const module = {
  name: '模块',
  title: '模块列表',
  addBtn: '添加',
  search: [],
  tableParam: [
    { label: '模块名称', value: 'name', },
    { label: '模块类型', value: 'type', },
    { label: '模块描述', value: 'desc', },
    { label: '编辑组件', value: "id", component: 'global-module-link', },
  ],
  addParam: {
    name: {
      label: '模块名称',
      default: '',
      component: 'el-input',
      placeholder: '',
      check: [{ required: true, message: '', trigger: 'change' }],
      props: {}
    },
    desc: {
      label: '模块描述',
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
