import { SketchPicker } from 'react-color';
import React, { useState, useEffect } from 'react';
import { Input, Popconfirm } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';
import styles from '../index.less';
/**
 * 输出宽度
 * @param {} props
 * @param value
 * @param onChange
 * onChange(width) 包括 px  %  自定义
 * 自定义可以自己设置返回值但是要写完全比如calc(100%-10px)  ,90vh。
 */
export default function ColorPicker({ value = '#cfcfcf', onChange }) {
  const [color, setColor] = useState(value);
  return (
    <>
      {/* <Input
        className={styles.inputStyle}
        value={value}
        onChange={value => {
          onChange(value);
        }}
      ></Input> */}
      <Popconfirm
        title={
          <SketchPicker
            color={color}
            onChange={({ rgb: { r, g, b, a } }) => {
              setColor(`rgba(${r},${g},${b},${a})`);
            }}
          />
        }
        onConfirm={() => onChange(color)}
        icon={null}
      >
        <BgColorsOutlined style={{ color: value, fontSize: '18px' }} />
      </Popconfirm>
    </>
  );
}
