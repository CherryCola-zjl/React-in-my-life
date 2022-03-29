import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
      const len = this.props.list.length
      const done = this.props.list.reduce((pre,cur) => {
        return cur.done?++pre:pre
      },0)
    return (
      <div>
          <input onChange={()=>this.props.choseAll(this.checkbox.checked)} ref={(a)=>this.checkbox= a} checked={done===len && len!==0} type="checkbox" name="checkall" />
          {`${done}/${len}`}

          <button onClick={this.props.removedone}>清除已完成</button>
      </div>
    )
  }
}