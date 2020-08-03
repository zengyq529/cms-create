import ColorPicker from '../../pickers/color-picker';
import WidthPicker from '../../pickers/width-picker';
import LinePicker from '../../pickers/line-picker';
/**
 * 支持样式类型包括以下几种：
 *
 */
export default [
  {
    name: 'width',
    label: '宽度',
    Component: WidthPicker,
  },
  {
    name: 'height',
    label: '高度',
    Component: WidthPicker,
  },
  {
    name: 'backgroundColor',
    label: '背景色',
    Component: ColorPicker,
  },
  {
    name: 'margin',
    label: '外边距',
    Component: WidthPicker,
    sub: [
      { name: 'Left', label: '左', Component: WidthPicker },
      { name: 'Top', label: '上', Component: WidthPicker },
      { name: 'Right', label: '右', Component: WidthPicker },
      { name: 'Bottom', label: '下', Component: WidthPicker },
    ],
  },
  {
    name: 'padding',
    label: '内边距',
    Component: WidthPicker,
    sub: [
      { name: 'Left', label: '左', Component: WidthPicker },
      { name: 'Top', label: '上', Component: WidthPicker },
      { name: 'Right', label: '右', Component: WidthPicker },
      { name: 'Bottom', label: '下', Component: WidthPicker },
    ],
  },
  {
    name: 'borderRadius',
    label: '弧度',
    Component: WidthPicker,
  },
  {
    name: 'border',
    label: '边线',
    Component: LinePicker,
    sub: [
      { name: 'Left', label: '左', Component: LinePicker },
      { name: 'Top', label: '上', Component: LinePicker },
      { name: 'Right', label: '右', Component: LinePicker },
      { name: 'Bottom', label: '下', Component: LinePicker },
    ],
  },
];
