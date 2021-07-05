---
order: 7
title: 
  zh-CN: 二级多选块
  en-US: '@cig/mult-select-block'
---
## zh-CN
支持多选下拉框功能，更美观的多选块样式，更丰富的自定义模式。

## en-US
Support multiple selection function.

```jsx
import React, { useEffect, useState } from "react";
import ReactMulSelect from "react-mul-select";

const MulSelectDemo = () => {
	const [selectValue, setSelectValue] = useState(['0-0']);
	const [selectLable, setselectLable] = useState('Click Me');
	const [isOpen, setIsOpen] = useState(false);
	const options = [
	  {
		"children": [
		  {
			"value": "00",
			"label": "水果-苹果"
		  },
		  {
			"value": "01",
			"label": "水果-香蕉"
		  },
		  {
			"value": "02",
			"label": "水果-葡萄"
		  },
		  {
			"value": "03",
			"label": "水果-梨"
		  }
		],
		"value": "0",
		"label": "水果"
	  },
	  {
		"children": [
		  {
			"value": "10",
			"label": "蔬菜-玉米"
		  },
		  {
			"value": "11",
			"label": "蔬菜-紫薯"
		  },
		  {
			"value": "12",
			"label": "蔬菜-地瓜"
		  }
		],
		"value": "1",
		"label": "蔬菜"
	  }
	]
	const selectAllMainValue = {value:'-1',label:'一级全部'};
	const selectAllSubValue = {value:'-1',label:'二级全部'};
  
	const handleOk1 = (v) => {
	  console.log(v)
	  setIsOpen(false)
	  if(v!==undefined) setselectLable(v.showLabel)
	}
  
	const handleOk2 = (v) => {
	  console.log(v)
	}
  
	const openEffectPlan = () => {
	  setIsOpen(!isOpen)
	}
  
	return (
		<div>
			<div>
				<h5>示例一：（自定义筛选框）</h5>
				<div style={{width: '120px',position: 'relative'}}>
					<ReactMulSelect
						showInput={false}
						isOpen={isOpen}
						value={selectValue}
						options={options}
						onOk={handleOk1}>
						<h5 style={{margin: 0, textDecoration: 'underline', width: '200px', cursor: 'pointer'}} onClick={openEffectPlan}>{selectLable}</h5>
					</ReactMulSelect>
				</div>
			</div>

			<div>
				<h5 style={{marginTop: '20px'}}>示例二：(使用默认筛选框)</h5>
				<div style={{width: '120px',position: 'relative'}}>
					<ReactMulSelect
					showInput
					value={selectValue}
					options={options}
					onOk={handleOk2} />
				</div>
			</div>

			<div>
				<h5 style={{marginTop: '20px'}}>示例三：(自定义筛选框列表内的全部选项)</h5>
				<div style={{width: '120px',position: 'relative'}}>
					<ReactMulSelect
					showInput
					selectAllMainValue={selectAllMainValue}
					selectAllSubValue={selectAllSubValue}
					value={selectValue}
					options={options}
					onOk={handleOk2} />
				</div>
			</div>

			<div>
				<h5 style={{marginTop: '20px'}}>示例四：(禁止点击)</h5>
				<div style={{width: '120px',position: 'relative'}}>
					<ReactMulSelect
					showInput
					disabled
					value={selectValue}
					options={options}
					onOk={handleOk2} />
				</div>
			</div>

			<div>
				<h5 style={{marginTop: '20px'}}>示例五：(自定义筛选框框样式以及弹层样式)</h5>
				<div style={{width: '120px',position: 'relative'}}>
					<ReactMulSelect
					showInput
					containerClassName={'outStyle'}
					popClass={'selectModalStyle'}
					value={selectValue}
					options={options}
					onOk={handleOk2} />
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(<MulSelectDemo />, mountNode);
```

```css
.code-box-wrapper .code-box-demo {
    width: 46%;
}
```
