import ajax from '@/common/ajax'


export async function getModuleList(param) {
  const { data } = await ajax.get('/module/list', param);
  return data;
}

export async function getModuleDetail(id) {
  const { result } = await ajax.get(`/module/detail`, { id });
  result.components = JSON.parse(result.components)
  return result;
}
export async function deleteModule(id){
  const { errCode } = await ajax.post('/module/delete',{id});
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
  const { result } = await ajax.get(`/component/detail`, { id });
//  result.components = JSON.parse(result.components)
  return result;
}
export async function deleteComponent(id){
  const { errCode } = await ajax.post('/component/delete',{id});
   return errCode == 0;
}
export async function submitComponent(id, param) {
  let newparam = JSON.parse(JSON.stringify(param))
  newparam.components = JSON.stringify(newparam.components)
  newparam.source = JSON.stringify(newparam.source)
  newparam.props = JSON.stringify(newparam.source)
  newparam.style = JSON.stringify(newparam.style)
  newparam.event = JSON.stringify(newparam.event)
  //测试
  const { errCode } = await (id ? ajax.post('/component/update', { id, ...newparam }) : ajax.post('/component/insert', newparam))
  return errCode == 0;
}
 