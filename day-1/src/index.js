import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Comp1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {a: 1}
  }

  render() {
    return(
      <div>
        <h4> Value of a: {this.state.a}</h4>
        <button onClick={() => this.setState({a: this.state.a+1})}> Increment variable a </button> <br/> <br/>
        <button onClick={() => this.setState({a: this.state.a-1})}> Decrement variable a </button>
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(Comp1),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();