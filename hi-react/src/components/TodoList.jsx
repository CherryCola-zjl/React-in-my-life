import { Component } from "react";
import {nanoid} from "nanoid"
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './todolist.css'

console.log()

export default class TodoList extends Component{
    state = {
        list : [{
            name: '吃饭',
            done: true,
            id:1
        },{
            name: 'do',
            done: false,
            id:2
        },{
            name: '玩游戏',
            done: false,
            id:3
        },{
            name: '逛街',
            done: false,
            id:4
        }]
    }
    addItme = (name)=>{
        let item = {
            name,
            id: nanoid(),
            done: false
        }
        this.setState({
            list: [item,...this.state.list]
        })
    }
    choseItem = (id) => {
        let list = this.state.list
        list.forEach(el=>{
            if(el.id === id){
                el.done=!el.done
            }
        })
        this.setState({
            list
        })
    }
    choseAll = (bol) => {
        this.state.list.forEach(el=>{
            el.done = bol
        })
        this.setState({
            list: this.state.list
        })
    }
    removedone = () => {
        const newlist = this.state.list.filter(el=>{
            return !el.done
        })
        this.setState({
            list: newlist
        })
    }
    delItem = (id) => {
        const newlist = this.state.list.filter(el=>{
            return el.id !== id
        })
        this.setState({
            list: newlist
        })
    }
    render(){
        return (
            <>
                <Header add={this.addItme}/>
                {this.state.list.map((el)=>{
                   return <List item={el} key={el.id} change={this.choseItem} delItem={this.delItem}/>
                })}
                <Footer list={this.state.list} choseAll={this.choseAll} removedone={this.removedone}/>    
            </>
        )
    }
}