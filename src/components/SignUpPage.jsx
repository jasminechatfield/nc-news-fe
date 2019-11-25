import React from "react";

import { navigate } from "@reach/router";

import * as api from "../api";

class SignUpPage extends React.Component {
  state = { username: "", name: "" };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ username: "", name: "" });
    api
      .createUser(event.target.username.value, event.target.name.value)
      .then(user => {
        navigate(`/users/${user.username}`);
      });
  };

  render() {
    console.log(this.state);
    const { username, name } = this.state;
    return (
      <main>
        <h2>Create an account</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="string"
              id="username"
              value={username}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label>
            Name:
            <input
              type="string"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <button type="submit">Create account</button>
        </form>
      </main>
    );
  }
}

export default SignUpPage;
