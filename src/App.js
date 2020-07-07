import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = this.state.counters.map((C) => {
      if (C.id === counter.id) C.value++;
      return C;
    });
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map((C) => {
      if (C.id === counter.id && C.value !== 0) C.value--;
      return C;
    });
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalItems={this.state.counters.length}></Navbar>

        <main
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "100vh", backgroundColor: "lightBlue" }}
        >
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
