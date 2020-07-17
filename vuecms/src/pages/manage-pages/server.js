
/**
 * @author zengyuqin
 * 2020-07-11
 * 通用表的增删改查支持类型包括：
 * 1，user 用户表。
 */


import ajax from '@/common/ajax';


function timestampToTime(timestamp) {
  timestamp = timestamp * 1000;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let date = new Date(timestamp);
  var Y = date.getFullYear() + '-';

  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

  var D = date.getDate() + ' ';

  var h = date.getHours() + ':';

  var m = date.getMinutes() + ':';

  var s = date.getSeconds();
  return Y + M + D + h + m + s;

}


function postFormat(param) {
  return param;
}

function getFormat(param) {
  if (param.post_time) { param.post_time = timestampToTime(param.post_time) }
  if (param.modify_time) { param.modify_time = timestampToTime(param.modify_time) }
  if (param.create_time) { param.create_time = timestampToTime(param.create_time) }
  console.log(param.post_time)
  return param;
}

/**
 * 查询列表接口
 * @param {*} type 查询类型 ： user / 
 * @param {*} page 
 * @param {*} page_size 
 * @param {*} searchParam 
 */
export async function getList(type, page, page_size, searchParam) {
  let param = {
    page,
    page_size,
    ...searchParam
  }
  const { data } = await ajax.get(`/api/${type}/list`, param);
  data.list  = data.list || []
  data.list.forEach(item=>{
    getFormat(item);
  })
  return data;
}


export async function add(type, addParam) {
  let param = postFormat({
    ...addParam
  })
  const { code } = await ajax.post(`/api/${type}/add`, param);
  return code == 0;
}


export async function update(type, id, updateParam) {
  let param = postFormat({
    id,
    ...updateParam
  })
  const { code } = await ajax.post(`/api/${type}/update`, param);
  return code == 0;
}


export async function del(type, id) {
  const { code } = await ajax.post(`/api/${type}/delete`, { id });
  return code == 0;
}

export default {
  getList,
  add,
  update,
  del
}