---
order: 3
title:
  zh-CN: 移动端下拉框选择
  en-US: '@cig/select'
---

# @cig/select
The Select control for React.

## Demo
[https://codesandbox.io/s/cigselect-vsk7i](https://codesandbox.io/s/cigselect-vsk7i)

## Installation and usage
The easiest way to use @cig/select is to install it from npm and build it into your app with Webpack.

```js
npm i -S @cig/select
```

Then use it in your App:

```js
import React, {
  useState,
  useEffect,
} from 'react'
import Select from '@cig/select'

export default () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(['a', 'b', 'c', 'd', 'e', 'f'])
  const title = '新易互动...'
  const confirmValue = '确定'
  const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  useEffect(() => console.log(value), [value])

  return (
    <Box>
      <div
        onClick={() => setShow(!show)}
        role="button"
        onKeyUp={() => {}}
        tabIndex={0}
      >
        {show ? 'Select Hide' : 'Select Show'}
      </div>
      {
        show
          ? (
            <Select
              title={title}
              value={value}
              data={[data, data, data, data]}
              show={v => setShow(v)}
              update={v => setValue(v)}
              confirmValue={confirmValue}
              confirm={v => setValue(v)}
            />
          ) : null
      }
    </Box>
  )
}
```

## Props
| 名称 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| title | String | N | 请选择 | 标题 |
| value | Array | N | - | 默认选项 |
| data | Arrar/Object | Y | - | 数据 |
| show | Function | N | - | 是否显示 |
| update | Function | N | - | 数据更新回调 |
| confirmValue | String | N | 确定 | 确定按钮文案 |
| confirm | Function | Y | - | 确定按钮回调 |

