---
order: 1
title: 
  zh-CN: 彩色多维度选择块
  en-US: '@cig/colour-block'
---
## zh-CN
支持彩色块维度选择功能，配合图表效果更加。

## en-US
Support the color block dimension selection function, which is more effective with the chart.

```jsx
import ColourBlock from "react-colour-block";

class Test extends React.Component {

	componentWillMount() {
        const colourBlock = [
            {
                "value": {
                    "label": "点击",
                    "value": "1"
                },
                "options": [
                    {
                        "label": "点击",
                        "value": "1"
                    },
                    {
                        "label": "曝光",
                        "value": "2"
                    },
                    {
                        "label": "留存",
                        "value": "3"
                    }
                ],
                "isShow": true,
                "disabled": false,
                "total": "19.23M"
            },
            {
                "value": {
                    "label": "点击率",
                    "value": "1"
                },
                "options": [
                    {
                        "label": "点击率",
                        "value": "1"
                    },
                    {
                        "label": "曝光率",
                        "value": "2"
                    },
                    {
                        "label": "留存率",
                        "value": "3"
                    }
                ],
                "isShow": true,
                "disabled": false,
                "total": "1.20%"
            },
            {
                "value": {
                    "label": "实际cpc",
                    "value": "1"
                },
                "options": [
                    {
                        "label": "实际cpc",
                        "value": "1"
                    },
                    {
                        "label": "实际cpl",
                        "value": "2"
                    },
                    {
                        "label": "到达率",
                        "value": "3"
                    }
                ],
                "isShow": false,
                "disabled": true,
                "total": "￥3.0"
            },
            {
                "value": {
                    "label": "线索",
                    "value": "1"
                },
                "options": [
                    {
                        "label": "曝光",
                        "value": "2"
                    },
                    {
                        "label": "会话/到达",
                        "value": "3"
                    },
                    {
                        "label": "线索",
                        "value": "4"
                    },
                    {
                        "label": "实际CPM",
                        "value": "5"
                    }
                ],
                "isShow": false,
                "disabled": true,
                "total": "￥68.84M"
            }
        ];
		this.setState({
			data: colourBlock
		});
	}

    handleShow(e){
        // console.log(e)
        this.setState({
            data:e
        })
    }

    handleChange(e){
        console.log(e)
        this.setState({
            data:e
        })
    }

    handleMouseEnter(e){
        // console.log(e)
    }

    handleMouseLeave(e){
        // console.log(e)
    }

	render() {
		return (
            <ColourBlock
                data={this.state.data}
                onShow={this.handleShow.bind(this)}
                onChange={this.handleChange.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
            />
		);
	}
}
ReactDOM.render(<Test />, mountNode);
```

```css


```
