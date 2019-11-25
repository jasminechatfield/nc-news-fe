import React from "react";
import "./App.css";
import Header from "./components/Header";
import LoginBar from "./components/LoginBar";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  state = { username: "jessjelly" };

  logOut = event => {
    this.setState({ username: "" });
  };

  logIn = username => {
    this.setState({ username });
  };

  render() {
    return (
      <div className="App">
        <Header>
          <LoginBar
            username={this.state.username}
            logOut={this.logOut}
            logIn={this.logIn}
          />
        </Header>
        <Dashboard username={this.state.username} />
      </div>
    );
  }
}

export default App;
