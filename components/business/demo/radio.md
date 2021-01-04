---
order: 6
title: 
  zh-CN: 单选块
  en-US: '@cig/radio-block'
---
## zh-CN
支持单选功能，更美观的单选块样式，更优雅的交互动效。

## en-US
Support single selection function.

```jsx
import BeautyRadio from "react-beautiful-radio";

class Test extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked1 : true,
			checked2 : true
		}
	}

    handleChange1 = () => {
        this.setState({
			checked1: !this.state.checked1
        })
	}
	
	handleChange2 = () => {
        this.setState({
            checked2: !this.state.checked2
        })
    }

	render() {
	    const { checked1, checked2 } = this.state;
		return (
            <div>
				<div>
					<p>单选按钮</p>
					<BeautyRadio
						checked={checked1}
						value={''}
						onClick={this.handleChange1}
					/>
				</div>
				<div>
					<p>禁用单选按钮</p>
					<BeautyRadio
						disabled
						checked={true}
						value={''}
						onClick={this.handleChange1}
					/>
				</div>
				<div>
					<p>带label的单选按钮</p>
					<BeautyRadio
						checked={checked2}
						value={'apple'}
						onClick={this.handleChange2}
					/>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<Test />, mountNode);
```

```css
.an-radio-inner {
    width: 14px;
    height: 14px;
    border-radius: 14px;
}
```
