import React from './react';    // react 核心库
import ReactDOM from './react-dom';   //react dom渲染库

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
