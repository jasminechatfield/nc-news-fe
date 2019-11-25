import React from "react";
import * as api from "../api";
import { Link } from "@reach/router";

const LoginBar = props => {
  const checkForUser = event => {
    event.preventDefault();
    console.log(event.target.usertologin.value);
    api.getUser(event.target.usertologin.value).then(user => {
      props.logIn(user.username);
    });
  };

  if (props.username === "") {
    return (
      <div id="loginBar">
        Logged out
        <Link to="/createuser">
          <button>Create a user</button>
        </Link>
        <form onSubmit={checkForUser}>
          <label>
            Username: <input type="string" id="usertologin" required></input>
          </label>
          <button>Log in</button>
        </form>
      </div>
    );
  }

  return (
    <div id="loginBar">
      Logged in as: {props.username}{" "}
      <button onClick={props.logOut}>Log out</button>
    </div>
  );
};

export default LoginBar;
