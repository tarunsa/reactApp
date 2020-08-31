import React, { Component } from "react";
import Calc from "./Calculator/Calc";
import Movies from "./Movie/Movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        {/* <Calc /> */}

        <Movies />
      </div>
    );
  }
}
export default App;
