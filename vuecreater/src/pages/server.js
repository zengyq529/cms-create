import ajax from '@/common/ajax'

export const pageConfig = {
  component:{
    addParam: {
      componentName: {
        label: '组件名称',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: { }
      },
      componentDesc: {
        label: '组件描述',
        defaultValue: '',
        component: 'el-input',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: { }
      },
      type: {
        label: '组件类型',
        defaultValue: '',
        component: 'global-type-select',
        placeholder: '',
        check: [{ required: true, message: '', trigger: 'change' }],
        props: { type:'component'}
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
    }
  }


}

export async function getModuleList(param) {
  const { data } = await ajax.get('/module/list', param);
  return data;
}

export async function getModuleDetail(id) {
  const { result } = await ajax.get(`/module/detail`, { id });
  result.components = JSON.parse(result.components)
  return result;
}
export async function deleteModule(id) {
  const { errCode } = await ajax.post('/module/delete', { id });
  return errCode == 0;
}
export async function submitModule(id, param) {
  let newparam = JSON.parse(JSON.stringify(param))
  newparam.components = JSON.stringify(newparam.components)
  newparam.source = JSON.stringify(newparam.source)
  newparam.props = JSON.stringify(newparam.source)
  newparam.style = JSON.stringify(newparam.style)
  newparam.event = JSON.stringify(newparam.event)
  //测试
  const { errCode } = await (id ? ajax.post('/module/update', { id, ...newparam }) : ajax.post('/module/insert', newparam))
  return errCode == 0;
}



export async function getComponentList(param) {
  const { data } = await ajax.get('/component/list', param);
  return data;
}

export async function getComponentDetail(id) {
  const { data } = await ajax.get(`/component/detail`, { id });
  //  data.components = JSON.parse(result.components)
  return data;
}
export async function deleteComponent(id) {
  const { errCode } = await ajax.post('/component/delete', { id });
  return errCode == 0;
}
export async function submitComponent(id,param) {
  //测试
  const { errCode } = await (id ? ajax.post('/component/update', {id,...param }) : ajax.post('/component/insert', {...param}))
  return errCode == 0;
}
