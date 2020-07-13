import axios from 'axios';
import { Notification } from 'element-ui';
const HTTP_TIMEOUT = 30000;
function showErrMsg(msg) {
  Notification.error({
    title: '服务端错误',
    message: msg || '未知异常',
  });
}
 
function responseAct(resolve, reject, { status, data, statusText }) {
  if (status === 200) { // http正常返回
    if (data.errCode === 0) { // 接口正常返回
      resolve(data);
    } else {
      showErrMsg(data.errMsg || data.msg);
      reject(data);
    }
  } else {
    showErrMsg(statusText);
    reject({ status, statusText });
  }
}

function get(url, params = {}) {
  return new Promise((resolve, reject) => axios.get( '/node' + url, {
    params,
    timeout: HTTP_TIMEOUT,
    withCredentials: true,
  }).then((resp) => {
    responseAct(resolve, reject, resp);
  }, (err) => {
    showErrMsg(err);
  }));
}
/**
 * post格式 application/json
 * @param url
 * @param params
 * @return {Promise<AxiosResponse<T> | never>}
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post( '/node' + url, params, {
      headers: { 'Content-Type': 'application/json' },
      timeout: HTTP_TIMEOUT,
      withCredentials: true,
    }).then((resp) => {
      responseAct(resolve, reject, resp);
    }, (err) => {
      showErrMsg(err);
    });
  });
}
export default {
  get,
  post,
};
