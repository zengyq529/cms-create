//导入element-ui 组件到组件库。
import all from 'element-ui';
import { lowerCase } from 'lodash'


//设置配置
const importCustom = true;
const importElementUI = false;





let componentList = []
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
  for (let key in componentList) {
    if (/[A-Z]/.test(key)) {
      let { props, name = '' } = componentList[key]
      let propsObj = {};

      for (key in props) {
        let def = typeof props[key].default == 'function' ? props[key].default() : props[key].default
        propsObj[key] = {
          type: props[key].type && props[key].type.name || 'String',
          default: def,
          value: def
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
  return array;
  // array.forEach(item => {
  //   ajax.post('/component/insert', item);
  // })
}
