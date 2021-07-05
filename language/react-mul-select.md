---
order: 7
title:
  zh-CN: 二级多选块
  en-US: '@cig/mult-select-block'
category:
  zh-CN: pc
  en-US: pc
---

## 怎么使用

### 安装

```bash
$ npm i react-mul-select -S
```

## 组件基本参数说明

以下描述 @cig/mult-select-block 里可使用的基本参数。
  

## API 介绍

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| containerClassName | 组件外层容器className | string | - |
| popClass | 弹框容器className | string | - |
| isOpen | 是否展开 - showInput为false时生效；使用场景：自定义外部input框;需在onOk控制props isOpen | bool | - |
| showInput | 是否展示input | bool | true |
| selectAllMainValue | value all | object | - |
| selectAllSubValue | subValue all | object | - |
| value | value list | array | - |
| options | original options | array | - |
| onOk | 关闭下拉框的事件 | func | - |
| disabled | 禁止点击 | bool | true |
| onChange | change事件 | bool | true |


> 以上为 @cig/mult-select-block 里可支持的参数
