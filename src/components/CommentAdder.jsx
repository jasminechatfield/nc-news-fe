import React from "react";
import * as api from "../api";

class CommentAdder extends React.Component {
  state = { body: "" };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, username } = this.props;
    api
      .postComment(article_id, username, this.state.body)
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ body: "" });
      })
      .catch(console.log);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea
            onChange={this.handleChange}
            placeholder={"Write your comment here..."}
            value={this.state.body}
          />
          <button onSubmit={this.handleSubmit}>Submit comment</button>
        </label>
      </form>
    );
  }
}

export default CommentAdder;
