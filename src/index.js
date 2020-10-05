import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import TodoList from "./TodoList";
//import registerServiceWorker from './registerServiceWorker';

var destination = document.getElementById("container");

ReactDOM.render(<TodoList />, destination);