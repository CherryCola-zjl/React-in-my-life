import React from 'react'

export default class Header extends React.Component{
    add = ()=>{
        this.props.add(this.refInput.value)
        this.refInput.value = ''
    }
    render(){
        return (
            <>
                <input ref={(a)=>this.refInput = a} type="text" />
                <button onClick={this.add}>sure</button>
            </>
        )
    }
}