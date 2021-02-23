import React, { Component } from "react";
import "./App.css";
import TodoMain from "./TodoMain";
import Image from "./ImageUpload/Image";
// import Todo from "./components/Todo";
// import TodoForm from "./components/TodoForm";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        {/* <TodoMain /> */}
      </div>
    );
  }
}
