/**
 * 封装http请求
 */
import axios from 'axios';
import { Notification } from 'element-ui';
 
const HTTP_TIMEOUT = 30000;
const apiHost = (url) => {
  return '' ; 
};

function showErrMsg(msg) {
  Notification.error({
    title: '服务端错误',
    message: msg || '未知异常',
  });
}

 
/**
 * 处理返回值
 * 1，转_驼峰
 * 2，处理通用报错信息
 */
function responseAct(resolve, reject, { status, data, statusText }) {
  if (status === 200) { // http正常返回
    if (data.code === 0) { // 接口正常返回
      resolve(data);
    } else if(data.code==10002){
      location.href = '#/login';
      reject(data);
    }
  } else {
    showErrMsg(statusText);
    reject({ status, statusText });
  }
}

/**
 * post格式 form
 * @param url
 * @param params post数据
 * @param config {}
 *                  - hump2Underline :是否params驼峰转下划线 默认false
 * @return {Promise<AxiosResponse<T> | never>}
 */
function postForm(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(apiHost(url) + url, params, {
      timeout: HTTP_TIMEOUT,
      withCredentials: true,
    }).then((resp) => {
      responseAct(resolve, reject, resp);
    }, (err) => {
      showErrMsg(err);
    });
  });
}

function get(url, params = {}) {
  return new Promise((resolve, reject) => axios.get(apiHost(url) + url, {
    params,
    timeout: HTTP_TIMEOUT,
    withCredentials: true,
  }).then((resp) => {
    responseAct(resolve, reject, resp);
  }, (err) => {
    showErrMsg(err);
  }));
}

function getJSON(url){
  return axios.get(url).then(({data})=>data)
}

/**
 * post格式 application/json
 * @param url
 * @param params
 * @return {Promise<AxiosResponse<T> | never>}
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(apiHost(url) + url, params, {
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
  postForm,
  post,
  getJSON
};
