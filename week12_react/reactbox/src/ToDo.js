import {Component} from 'react';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {name:'clean house',state:'done'},
                {name:'sleeping',state:'done'},
                {name:'movie',state:'done'},
            ]
        }
    }
    render() {
        const tasklist = this.state.tasks.map(
            (item, index)=>(<li key={index}> {item.name}:{item.state}</li>)
        )
        return (
            <div>
                <ul>
                    {tasklist}
                </ul>
            </div>
        )
    }
}