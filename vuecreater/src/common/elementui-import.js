//导入element-ui 组件到组件库。
import all from 'element-ui';
import {lowerCase} from 'lodash'
import ajax from '@/common/ajax';
import { Notification } from 'element-ui';
export function getElementComponent() {
  let array = [];
  for (let key in all) {
    if (/[A-Z]/.test(key)) {
      let { props, name } = all[key]
      let propsObj = {};
      for (key in props) {
        propsObj[key] = {
          type: props[key].type && props[key].type.name || 'String',
          default: props[key].default,
          value: props[key].default
        }
      }
      array.push({
        props:JSON.stringify(propsObj),
        componentDesc: 'element-ui 原生组件',
        componentName: lowerCase(name).replace(/\s/g,'-'),
        type: 'element-ui',
        source: '[]',
        event: '{}',
        hasChildren: 0,
      })
    }
  }
  array.forEach(item=>{
    ajax.post('/component/insert',item);
  })
}
