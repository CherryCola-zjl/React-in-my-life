import React from 'react'

export default class List extends React.Component{
    state = {
        mouse: false
    }
    handleMouse = (bol) => {
        this.setState({
            mouse: bol
        })
    }
    render(){
        const el = this.props.item
        return (
            <div className={`item ${this.state.mouse?'acitem':''}`} key={el.id} onMouseOver={()=>this.handleMouse(true)}  onMouseOut={()=>this.handleMouse(false)}>
                <input type="checkbox" name="todo" checked={el.done} onChange={()=>this.props.change(el.id)}/>
                {el.name}
                <button onClick={()=>this.props.delItem(el.id)} style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </div>
        )
    }
}