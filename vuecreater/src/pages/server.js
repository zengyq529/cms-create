import ajax from '@/common/ajax'



export async function getDetail(type, id) {
  const { data } = await ajax.get(`/${type}/detail`, { id });
  return data;
}

export async function getList(type, page, pageSize, searchParam) {
  let param = {
    page,
    pageSize,
    ...searchParam
  }
  const { data } = await ajax.get(`/${type}/list`, param);
  data.list = data.list || []
  // data.list.forEach(item=>{
  //   getFormat(item);
  // })
  return data;
}


export async function add(type, addParam) {
  let param = postFormat({
    ...addParam
  })
  const { code } = await ajax.post(`/${type}/add`, param);
  return code == 0;
}


export async function update(type, id, updateParam) {
  let param = postFormat({
    id,
    ...updateParam
  })
  const { code } = await ajax.post(`/${type}/update`, param);
  return code == 0;
}


export async function del(type, id) {
  const { code } = await ajax.post(`/${type}/delete`, { id });
  return code == 0;
}

export default {
  getList,
  add,
  update,
  del
}