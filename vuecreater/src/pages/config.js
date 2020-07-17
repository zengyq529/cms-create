export default {
  component: {
    name: '组件',
    title: '组件列表',
    addBtn:'添加',
    search: [],
    addParam: {
      componentName: {
        label: '组件名称',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: {}
      },
      componentDesc: {
        label: '组件描述',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: {}
      },
      type: {
        label: '组件类型',
        defaultValue: '',
        component: 'global-type-select',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: { type: 'component' }
      },
      props: {
        label: 'props',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
      },
      event: {
        label: 'event',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
      },
      hasChildren: {
        label: 'hasChildren',
        defaultValue: 1,
        component: 'el-checkbox',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
      }
    },
    tableParam: [
      { label: '组件名称', value: 'componentName',  },
      { label: '组件类型', value: 'type',  },
      { label: '组件描述', value: 'componentDesc',  },
    ]
  },
  module:{
    name: '模块',
    title: '模块列表',
    addBtn:'添加',
    search: [],
    tableParam: [
      { label: '模块名称', value: 'componentName',  },
      { label: '模块类型', value: 'type',  },
      { label: '模块描述', value: 'componentDesc',  },
    ]
  }
}
