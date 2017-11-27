import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// function TasksList(props) {
//   const strings = props.strings;
//   const listItems = strings.map((string) =>
//     <li>{string}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   )
// }
// const todos = [
//   "Learn React",
//   "Clean Mt. Everest",
//   "Run a marathon",
//   "Feed the dogs"
// ]
// ReactDOM.render(
//   <TasksList strings={todos} />,
//   document.getElementById('list')
// );

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Dojo!</h1>
        </header>
        <p className="App-intro">
          Things I need to do:
        </p>
      </div>
    );
  }
}

export default App;
