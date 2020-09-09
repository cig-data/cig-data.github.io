(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1265:function(n,s){n.exports={content:["article",["h1","@cig/timepicker"],["p","The Time Picker control for React."],["h2","Installation and usage"],["p","The easiest way to use @cig/timepicker is to install it from npm and build it into your app with Webpack."],["pre",{lang:"js",highlighted:'npm i <span class="token operator">-</span>S @cig<span class="token operator">/</span>timepicker'},["code","npm i -S @cig/timepicker"]],["p","Then use it in your App:"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  useState<span class="token punctuation">,</span>\n  useEffect<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> Select <span class="token keyword">from</span> <span class="token string">\'@cig/timepicker\'</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  Box<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./style\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>show<span class="token punctuation">,</span> setShow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'2020-10-01\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">\'新易互动...\'</span>\n  <span class="token keyword">const</span> confirmValue <span class="token operator">=</span> <span class="token string">\'确定\'</span>\n  <span class="token keyword">const</span> minDate <span class="token operator">=</span> <span class="token string">\'2010-01-01\'</span>\n  <span class="token keyword">const</span> maxDate <span class="token operator">=</span> <span class="token string">\'2020-12-31\'</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Box<span class="token operator">></span>\n      <span class="token operator">&lt;</span>div\n        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setShow</span><span class="token punctuation">(</span><span class="token operator">!</span>show<span class="token punctuation">)</span><span class="token punctuation">}</span>\n        role<span class="token operator">=</span><span class="token string">"button"</span>\n        onKeyUp<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n        tabIndex<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token punctuation">{</span>show <span class="token operator">?</span> <span class="token string">\'Time Pikcer Hide\'</span> <span class="token punctuation">:</span> <span class="token string">\'Time Picker Show\'</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token punctuation">{</span>\n        show\n          <span class="token operator">?</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>Select\n              title<span class="token operator">=</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span>\n              value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>\n              minDate<span class="token operator">=</span><span class="token punctuation">{</span>minDate<span class="token punctuation">}</span>\n              maxDate<span class="token operator">=</span><span class="token punctuation">{</span>maxDate<span class="token punctuation">}</span>\n              show<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setShow</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">}</span>\n              confirmValue<span class="token operator">=</span><span class="token punctuation">{</span>confirmValue<span class="token punctuation">}</span>\n              confirm<span class="token operator">=</span><span class="token punctuation">{</span>v <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setValue</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">null</span>\n      <span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>'},["code","import React, {\n  useState,\n  useEffect,\n} from 'react'\nimport Select from '@cig/timepicker'\n\nimport {\n  Box,\n} from './style'\n\nexport default () => {\n  const [show, setShow] = useState(false)\n  const [value, setValue] = useState('2020-10-01')\n  const title = '新易互动...'\n  const confirmValue = '确定'\n  const minDate = '2010-01-01'\n  const maxDate = '2020-12-31'\n\n  useEffect(() => console.log(value), [value])\n\n  return (\n    <Box>\n      <div\n        onClick={() => setShow(!show)}\n        role=\"button\"\n        onKeyUp={() => {}}\n        tabIndex={0}\n      >\n        {show ? 'Time Pikcer Hide' : 'Time Picker Show'}\n      </div>\n      {\n        show\n          ? (\n            <Select\n              title={title}\n              value={value}\n              minDate={minDate}\n              maxDate={maxDate}\n              show={v => setShow(v)}\n              confirmValue={confirmValue}\n              confirm={v => setValue(v)}\n            />\n          ) : null\n      }\n    </Box>\n  )\n}"]],["h2","Props"],["table",["thead",["tr",["th","名称"],["th","类型"],["th","必填"],["th","默认值"],["th","描述"]]],["tbody",["tr",["td","title"],["td","String"],["td","N"],["td","请选择"],["td","标题"]],["tr",["td","value"],["td","Array"],["td","Y"],["td","-"],["td","默认选项"]],["tr",["td","minDate"],["td","String"],["td","Y"],["td","-"],["td","格式"]],["tr",["td","maxDate"],["td","String"],["td","Y"],["td","-"],["td","格式"]],["tr",["td","show"],["td","Function"],["td","Y"],["td","-"],["td","是否显示"]],["tr",["td","confirmValue"],["td","String"],["td","N"],["td","确定"],["td","确定按钮文案"]],["tr",["td","confirm"],["td","Function"],["td","Y"],["td","-"],["td","确定按钮回调"]]]]],meta:{order:4,title:{"zh-CN":"移动端时间选择","en-US":"@cig/timepicker"},filename:"language/react-time-picker.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#@cig/timepicker",title:"@cig/timepicker"},"@cig/timepicker"]],["li",["a",{className:"bisheng-toc-h2",href:"#Installation-and-usage",title:"Installation and usage"},"Installation and usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#Props",title:"Props"},"Props"]]]}}}]);