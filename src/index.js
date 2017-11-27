import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
function TasksList(props){
    const strings = props.strings;
    const listItems = strings.map((string)=>
        <li>{string}</li>
    );
    return (
        <ul>{listItems}</ul>
    )
}
const todos = [
    "Learn React",
    "Clean Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
]
ReactDOM.render(
    <TasksList strings={todos} />,
    document.getElementById('list')
);

registerServiceWorker();
