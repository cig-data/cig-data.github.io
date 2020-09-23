---
order: 2
title: 
  zh-CN: 拖拽块
  en-US: '@cig/dnd-block'
---
## zh-CN
支持拖拽标签功能。

## en-US
Support drag and drop label function.

```jsx
import DNDBlock from "react-dnd-block";

class Test extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data1:Array.from({length:6}).map((v,i) => ({label:'item' + i,value:i})),
			data2:Array.from({length:6}).map((v,i) => ({label:'item' + i,value:i})),
			data3:Array.from({length:6}).map((v,i) => ({label:'item' + i,value:i}))
		}
		this.changeBlock = this.changeBlock.bind(this);
	}

    changeBlock(i,v){
        // console.log(v,i)
        this.setState({
            ['data'+i]: v
        })
    }

	render() {
	    const { data1, data2, data3 } = this.state;
		return (
            <div>
				<h3 className="title">例1</h3>
				<DNDBlock
					data={data1}
					onChange={this.changeBlock.bind(this,1)}
				/>
				<h3 className="title">例2</h3>
				<div className="dndContent">
					<DNDBlock
						width={'80%'}
						data={data2}
						tagBorderRadius={['6px','6px']}
						clearButtonBorderRadius={'6px'}
						tagColor={'rgb(16, 142, 233)'}
						onChange={this.changeBlock.bind(this,2)}
					/>
				</div>	
				<h3 className="title">例3</h3>
				<DNDBlock
					width={'360px'}
					data={data3}
					title={''}
					hint={''}
					tagBorderRadius={['6px','6px']}
					clearButtonBorderRadius={'6px'}
					tagColor={'rgb(16, 233, 173)'}
					onChange={this.changeBlock.bind(this,3)}
				/>
			</div>
		);
	}
}
ReactDOM.render(<Test />, mountNode);
```

```css
.title{
	padding: 6px;
}
.dndContent {
    z-index: 100;
    position: relative;
}
```
