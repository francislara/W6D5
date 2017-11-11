import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(){
    super();
    this.state = {date: new Date()};
    this.hours = this.state.date.getHours();
    this.mins = this.state.date.getMinutes();
    this.secs = this.state.date.getSeconds();
    this.tick = this.tick.bind(this);
    this.date = this.state.date.toDateString();
    // this.render = this.render.bind(this);
  }

  render(){
    // const hours = this.state.getHours();
    // const mins = this.state.getMinutes();
    // const secs = this.state.getSeconds();
    return (
      <div className="date-time">
          <h1>{this.date}</h1>
          <h2>{this.hours}:{this.mins}:{this.secs}</h2>
      </div>
    );
  }

  tick(){
    this.setState({ date: new Date()});
    this.hours = this.state.date.getHours();
    this.mins = this.state.date.getMinutes();
    this.secs = this.state.date.getSeconds();
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = 0;
  }
}



export default Clock;
