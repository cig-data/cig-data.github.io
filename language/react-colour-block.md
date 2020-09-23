---
order: 1
title:
  zh-CN: 彩色块
  en-US: '@cig/colour-block'
category:
  zh-CN: pc
  en-US: pc
---

### 安装

```bash
$ npm i react-colour-block -S
```

## 组件基本参数说明

以下描述 @cig/colour-block 里可使用的基本参数。

## data 彩色块数据 

data: [],  注入组件数据

data数据模型 ==>

        [{
                 value:{
                     label:'',
                     value:0
                 },//彩色块里下拉框所选择的value值
                 options:[{
                     label:'',
                     value:0
                 },{},....],//彩色块里下拉框options值
                 isShow:true,//为true彩色块背景色为彩色，false默认白色
                 disabled:false,//为true代表彩色块的下拉框可点击，false不可点击
                 total:''//彩色块里的标题文字部分
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

## function 展示

onShow: ()=> {},  返回最新的data数据已更改data里的相应的isShow的值，注意在此方法里将返回的data数据设置为最新的data数据；

## function 选择

onChange: ()=> {},  返回最新的data数据已更改data里的相应的value的值，注意在此方法里将返回的data数据设置为最新的data数据；

## function 鼠标移入事件
onMouseEnter: (e)=> {}, 鼠标移入任一彩色块时触发，返回彩色块索引

## function 鼠标移出事件
onMouseLeave: ()=> {}, 鼠标移出任一彩色块时触发，返回彩色块索引

## 全部参数

|     参数名称       |    	说明     |   	Type     |
|-------------------|---------------------|
|   data       | 设置组件数据 | array |
|   onShow           | 点击彩色块的操作,返回最新的data数据，注意将返回的数据设置为最新的data数据 | function(e){} |
|   onChange       | 点击彩色块里的下拉框维度选择的操作,返回最新的data数据，注意将返回的数据设置为最新的data数据 | function(e){} |
|   onMouseEnter          | 移入彩色块的操作,返回移入的彩色块索引 | function(e){} |
|   onMouseLeave      | 移出彩色块的操作,返回移出的彩色块索引 | function(e){} |

> 以上为@cig/colour-block目前可支持的参数。
