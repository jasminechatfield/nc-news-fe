import React from "react";
import "./App.css";
import Header from "./components/Header";
import LoginBar from "./components/LoginBar";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  state = { username: "jazzchatfield" };

  render() {
    return (
      <div className="App">
        <Header>
          <LoginBar username={this.state.username} />
        </Header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
