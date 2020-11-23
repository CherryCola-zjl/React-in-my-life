import React from 'react';    // react 核心库
import ReactDOM from 'react-dom';   //react dom渲染库

// jsx 语法
ReactDOM.render(
  <h1 className="title" style={{color:'red'}}>
    <span>hello</span>world
  </h1>,
  document.getElementById('root')
);

let element = React.createElement("h1", {
  className: 'title',
  style: {
    color:'#ddd'
  }
}, "Hello")
console.log(JSON.stringify(element,null,2))

ReactDOM.render(
  element,
  document.getElementById('root')
);
// {
//   "type": "h1",
//   "key": null,
//   "ref": null,
//   "props": {
//     "className": "title",
//     "style": {
//       "color": "#ddd"
//     },
//     "children": "Hello"
//   },
//   "_owner": null,
//   "_store": {}
// }
/**
 * 
 * @param {*} type  元素类型 
 * @param {*} config  配置对象
 * @param {*} children  子元素
 */
function createElement(type,config,children) {
  let props = {...config} // 展开运算符对对象实例浅拷贝
  if(arguments.length>3){
    children = Array.prototype.slice.call(arguments,2);
    
  }
}