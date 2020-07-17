import { InputNumber, Input } from 'antd';
import { Select } from 'antd';
import React, { useState, useEffect } from 'react';
const { Option } = Select;
import styles from '../index.less';

/**
 * 输出宽度
 * @param {} props
 * @param value
 * @param onChange
 * onChange(width) 包括 px  %  自定义
 * 自定义可以自己设置返回值但是要写完全比如calc(100%-10px)  ,90vh。
 */
export default function WidthPicker({ value = '', onChange }) {
  let num = '',
    unit = 'px';
  if (value) {
    let match = value.match(/(\d+)(px|%)$/);
    if (match) {
      num = match[1];
      unit = match[2];
    } else {
      num = value;
      unit = '';
    }
  }
  console.log('props,', value);
  const changeHandler = (n, u) => {
    onChange(n ? n + u : '');
  };
  return (
    <>
      {unit == '' ? (
        <Input
          value={num}
          className={styles.inputStyle}
          onChange={value => changeHandler(value, unit)}
        ></Input>
      ) : (
        <InputNumber
          value={num}
          className={styles.inputStyle}
          onChange={value => changeHandler(value, unit)}
        />
      )}
      <Select
        value={unit}
        style={{ width: 70 }}
        bordered={false}
        onChange={value => changeHandler(null, value)}
      >
        <Option value="px">px</Option>
        <Option value="%">%</Option>
        <Option value="">cust</Option>
      </Select>
    </>
  );
}
