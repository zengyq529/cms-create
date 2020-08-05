//导入element-ui 组件到组件库。
import all from 'element-ui';
import { lowerCase } from 'lodash'
import ajax from '@/common/ajax';

//设置配置
const importCustom = true;
const importElementUI = false;





const componentList = []
if (importElementUI) componentList = all;
if (importCustom) {
  const components = require.context('../customComponent/', true, /\w+.vue$/);
  components.keys().forEach((key) => {
    const comp = components(key).default || components(key);
    const compPreName = comp.name;
    if (compPreName) {
      componentList[compPreName] = comp;
    }
  });
}


export function getElementComponent() {
  let array = [];
  for (let key in all) {
    if (/[A-Z]/.test(key)) {
      let { props, name = '' } = all[key]
      let propsObj = {};
      for (key in props) {
        propsObj[key] = {
          type: props[key].type && props[key].type.name || 'String',
          default: props[key].default,
          value: props[key].default
        }
      }
      array.push({
        props: JSON.stringify(propsObj),
        desc: 'element-ui 原生组件',
        name: lowerCase(name).replace(/\s/g, '-'),
        type: name.indexOf('El') == 0 ? 'element-ui' : 'custom-element-ui',
        source: '[]',
        event: '{}',
        hasChildren: 0,
      })
    }
  }
  array.forEach(item => {
    ajax.post('/component/insert', item);
  })
}
