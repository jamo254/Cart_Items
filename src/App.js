import React, { Component } from "react";
import "./styles.css";
import "./components/counter";
import Counters from "./components/counters";


class App extends Component {
  render() {
    return (
      <div>
        <h1>This is a Simple Component </h1>
        <Counters />
      </div>
    );
  }
}

export default App;
