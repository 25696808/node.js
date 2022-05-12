import {Component} from 'react';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {title:'clean house',completed:false},
                {title:'sleeping',completed:false},
                {title:'movie',completed:false},
            ]
        }
        this.handleDelete = this.handleDelete.bind(this); 
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response =>response.json())
        .then(json => this.setState({tasks:[...this.state.tasks,...json]}))
    }
    handleDelete = (INDEX) =>{
        const newTasks = [...this.state.tasks];
        newTasks.splice(INDEX, 1); //刪除INDEX號碼的 用取代的方式取代一個
        //splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
        this.setState({tasks:newTasks});
    }
    render() {
        const task = {title:"None", completed:"Non Do"};
        const style={color:'lightblue'}
        const tasklist = this.state.tasks.map(
            (item, index)=>(
                <li key={index} style={style}> {index} {item.title} : {item.completed.toString()}
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
                        onChange={(e)=>{ task.title = e.target.value}}
                    ></input>
                    <button onClick={(e)=>{this.handleSubmit(task);document.getElementById('a').value=""}}>submit</button>
                </ul>
            </div>
        )
    }
}