import { Component } from 'react';

class ToDo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tasks:[
            { name: 'clean house', status: 'done' },
            { name: 'reading', status: 'pending' },
            { name: 'boxing', status: 'done' }
            ],
        } 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleSubmit = (task) =>{
        this.setState({tasks:[...this.state.tasks,task]});
    }
    handleDelete = (index) =>{
        const newTasks = [...this.state.tasks];
        newTasks.splice(index,1);
        this.setState({tasks:newTasks})
    }
    
    render() {
        const task = { name:"", status:'not done'};
        const tasklist = this.state.tasks.map(
            (item,index) => (
                <li key={index}> {index} {item.name} : {item.status}</li>
            )
        )
        return ( 
            <div>
                <h1> You have {this.state.tasks.length} tasks</h1>
                <ul>
                {tasklist}
                <input type="text" id = "a"
                    onChange={(e)=>{ task.name=e.target.value}}
                />
                <button onClick={(e)=>{this.handleSubmit(task);document.getElementById('a').value=""}}>submit</button>
                </ul> 
            </div> 
        );
    }
}
export default ToDo3;