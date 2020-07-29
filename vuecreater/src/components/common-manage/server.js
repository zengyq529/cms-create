import ajax from '@/common/ajax'
import { ifValueIsJsonStr2Json } from "@/common/utils";


export async function getDetail(type, id) {
  const { data } = await ajax.get(`/${type}/detail`, { id });
  ifValueIsJsonStr2Json(data);
  return data;
}

/**
 * 通用获取列表功能
 * @param {String} type - 列表类型支持： module / component
 * @param {Number} page - 当前页default = 1
 * @param {Number} pageSize - 分页 default = 20
 * @param {Object} searchParam - 搜索项
 * @returns {list,total} 
 */
export async function getList(type, page = 1, pageSize = 10, searchParam) {
  let param = {
    page,
    pageSize,
    ...searchParam
  }
  const { data } = await ajax.get(`/${type}/list`, param);
  data.list = data.list || []
  return data;
}


export async function add(type, addParam) {
  let param = {
    ...addParam
  }
  const { errCode } = await ajax.post(`/${type}/insert`, param);
  return errCode == 0;
}


export async function update(type, id, updateParam) {
  let param = {
    id,
    ...updateParam
  }
  const { errCode } = await ajax.post(`/${type}/update`, param);
  return errCode == 0;
}


export async function del(type, id) {
  const { errCode } = await ajax.post(`/${type}/delete`, { id });
  return errCode == 0;
}

export default {
  getList,
  add,
  update,
  del,
  getDetail
}