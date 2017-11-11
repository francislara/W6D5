import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component{
  constructor(tabs){
    super(tabs);
    this.tabs = tabs;
    this.state = { index: 0 };
  }
  render(){
    return (
      <article>
        <ul>

          <h1></h1>
        </ul>
      </article>
    );
  }
}

export default Tabs;
