---
order: 2
title:
  zh-CN: 拖拽块
  en-US: react-dnd-block
---

## 怎么使用

### 安装

```bash
$ npm i react-dnd-block -S
```

## 组件基本参数说明

以下描述 react-dnd-block 里可使用的基本参数。


## data 拖拽块数据

    data: [],  注入组件数据
    
    data数据模型 ==>
    
            [{
                label:'',
                value:0
              },
              {
                  ...同上
              },
               {
                  ...同上
               },
               {
                  ...同上
               }
            ]
    
## function 选择

    onChange: ()=> {},  返回最新的data数据，注意在此方法里将返回的data数据设置为最新的data数据；

## API 介绍

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| data | 设置组件数据 | array | - |
| width | 设置拖拽区域宽度 | string | 100% |
| className | 增加拖拽区域自定义class | string | '' |
| title | 拖拽区域label文字 | string | 已选 |
| tagColor | 拖拽区域标签颜色自定义 | string | '#fd9f2f' |
| tagBorderRadius | 拖拽区域标签自定义圆角 | array | ['0px', '0px'] |
| clearButtonBorderRadius | 拖拽区域清空标签自定义圆角 | string | '0px' |
| clearButton | 是否开启全部清除按键 | bool | true |
| hint | 拖拽区域底部提示段落 | string | '可随意拖拽改变标签顺序' |
| onChange | 拖拽排序及删除操作 | function(e){} | - |


> 以上为 react-dnd-block 里的动画可支持的参数
