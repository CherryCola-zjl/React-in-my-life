import React from 'react';    // react 核心库
import ReactDOM from 'react-dom';   //react dom渲染库

// 组件
// function Welcome(props) {
//   return React.createElement('h1',{
//     className:'title'
//   },props.name)
// }
// let element  = Welcome({name:'你好'})
// let element = <Welcome name='zhufeng' />
function Welcome(props) {
  return <h1>
    Yue
    <span className='title'>xiang</span>
  </h1>
}
let element = React.createElement(Welcome,{name:123})
console.log(element)
ReactDOM.render(
  element,
  document.getElementById('root')
);

// 组件可能是 字符串（原生dom），函数，类
// 类组件
class Hellow extends React.Component {
  // constructor(props){
  //   super(props);
  //   // this.props = props
  // }
  render(){
  return <h1 className="title">classComponent {this.props.name}</h1>
  }

}
let element1 = <Hellow name='lalal'></Hellow>
console.log(element1)

ReactDOM.render(
  new Hellow({name:'3333'}).render(),
  document.getElementById('root')
)