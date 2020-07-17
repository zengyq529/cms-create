import React from 'react';
import { Collapse, Row, Col, Form, Popover } from 'antd';
import styleConfigList from './config';
const { Panel } = Collapse;
import { RightOutlined } from '@ant-design/icons';
import styles from './index.less';
/**
 * style 配置组件页面功能：
 *   1,面板可折叠。
 *   2,onChange(styleObj,currentStyle) styleObj 完整style样式。 currentStyle当前变化的样式。
 *   3，样式返回驼峰结构例如： marginTop。
 * demo :
 * styleObj:{
 *  width:'100px',
 *  marginTop:'10',
 * }
 * 调用demo:
 * <StylePanel styleProp={参数} onChange={(styleObj,currentStyle)=>{ } } />
 */

export default function StylePanel({ styleProp = {}, onChange }) {
  console.log(styleProp);

  const styleObj = { ...styleProp };

  const itemChange = (name, value, isSub) => {
    if (typeof value == 'string') {
      value ? (styleObj[name] = value) : delete styleObj[name];
      onChange && onChange({ ...styleObj }, { name, value });
    }
    // else if (typeof value == 'object') { // 有子属性的 将紫属性拆开放到style中返回。
    //  onChange && onChange({ ...styleObj, ...value }, { ...value });
    // }
  };

  const StyleValue = Item => {
    return (
      <Item.Component
        value={styleObj[Item.name]}
        onChange={value => itemChange(Item.name, value)}
      />
    );
  };

  const SubItem = Item => {
    return (
      <div key={Item.name}>
        <span>{Item.label || Item.name}:</span>
        <Item.Component
          value={styleObj[Item.name]}
          //怎么设置点击不影响下层
          onChange={value => itemChange(Item.name, value)}
        />
      </div>
    );
  };

  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="基础样式" key="1">
          <Form>
            {styleConfigList.map((Item, index) => (
              <Form.Item label={Item.label || Item.name} key={index}>
                {StyleValue(Item)}
                {Item.sub ? (
                  <Popover
                    content={Item.sub.map(Sub =>
                      SubItem({
                        label: Sub.label,
                        name: Item.name + Sub.name,
                        Component: Sub.Component,
                      }),
                    )}
                    title="全部设置"
                    trigger="click"
                  >
                    <span className={styles.more}>
                      更多
                      <RightOutlined />
                    </span>
                  </Popover>
                ) : null}
              </Form.Item>
            ))}
          </Form>
        </Panel>
      </Collapse>
    </>
  );
}
