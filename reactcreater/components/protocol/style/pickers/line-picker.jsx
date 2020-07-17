import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
import WidthPicker from './width-picker';
import ColorPicker from './color-picker';
const { Option } = Select;
import styles from '../index.less';
/**
 * 边框线样式 格式 1px solid #aaa
 * @param {} props
 * @param value
 * @param onChange
 */
export default function LinePicker({ value, onChange }) {
  let borderWidth = '',
    borderStyle = '',
    borderColor = '';
  if (value && /^\d+/.test(value)) {
    [borderWidth, borderStyle = 'solid', borderColor] = value.split(' ');
  }
  const borderStyleList = ['none', 'solid', 'dashed', 'dotted'];

  const changeHandler = () => {
    borderWidth && onChange(`${borderWidth} ${borderStyle} ${borderColor}`);
  };
  return (
    <>
      <WidthPicker
        value={borderWidth}
        onChange={value => ((borderWidth = value), changeHandler())}
      ></WidthPicker>
      <Select
        value={borderStyle || 'solid'}
        style={{ width: 85 }}
        bordered={false}
        onChange={value => ((borderStyle = value), changeHandler())}
      >
        {borderStyleList.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <ColorPicker
        value={borderColor}
        onChange={value => ((borderColor = value), changeHandler())}
      ></ColorPicker>
    </>
  );
}
