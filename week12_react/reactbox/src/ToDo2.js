import React from 'react';

export default class ToDo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {name:'clean house',state:'done'},
                {name:'sleeping',state:'done'},
                {name:'movie',state:'done'},
            ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //bind 的使用方法是 fn.bind(this, arg1, arg2..., argn)
    }
    handleSubmit = (TASK) =>{
        this.setState({tasks:[...this.state.tasks,TASK]})
        //?????????????
    }
    handleDelete = (INDEX) =>{
        const newTasks = [...this.state.tasks];
        newTasks.splice(INDEX, 1); //刪除INDEX號碼的 用取代的方式取代一個
        //splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
        this.setState({tasks:newTasks});
    }

    render() {
        const task = {name:"None", state:"Non Do"};
        const style={color:'lightblue'}
        const tasklist = this.state.tasks.map(
            (item, index)=>(
                <li key={index} style={style}> {index} {item.name} : {item.state}
                    <button onClick={()=>this.handleDelete(index)}> x </button>
                </li>
            )
        )
        return (
            <div>
                <ul>
                    {tasklist}
                    <input
                        id = "a" 
                        type="text"
                        onChange={(e)=>{ task.name = e.target.value}}
                    ></input>
                    <button onClick={(e)=>{this.handleSubmit(task);document.getElementById('a').value=""}}>submit</button>
                </ul>
            </div>
        )
    }

}