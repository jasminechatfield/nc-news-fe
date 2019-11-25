import React from "react";

class SignUpPage extends React.Component {
  state = { username: "", name: "" };

  handleChange = event => {};

  handleSubmit = event => {};

  render() {
    return (
      <main>
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:<input type="string" required></input>
          </label>
          <label>
            Name:<input type="string" required></input>
          </label>
          <button type="submit">Create account</button>
        </form>
      </main>
    );
  }
}

export default SignUpPage;
