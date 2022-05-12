import React from 'react';
class Timer extends React.Component {
 constructor(props) {
 super(props);
 this.state = { seconds: 0,
    date : new Date().toLocaleString() };
 }
 
 tick() {
 this.setState(state => ({
 seconds: state.seconds + 1,
 date: new Date().toLocaleString()
 }));
 }
 
 componentDidMount() {
 this.interval = setInterval(() => this.tick(), 1000);
 }
 
 componentWillUnmount() {
 clearInterval(this.interval);
 }
 
 render() {
 return (
 <div>
 <h1>Seconds: {this.state.seconds}</h1>
 <h1>Date: {this.state.date}</h1>
 </div>
 );
 }
 }
 export default Timer;