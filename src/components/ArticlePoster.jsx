import React from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

class ArticlePoster extends React.Component {
  state = { title: "", body: "", err: null };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ title: "", body: "" });
    api
      .postArticle(
        this.props.username,
        this.props.topicSlug,
        this.state.title,
        this.state.body
      )
      .then(({ article_id }) => {
        navigate(`/articles/${article_id}`);
      })
      .catch(err => {
        this.setState({ err: err.response });
      });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { username, topicSlug } = this.props;
    const { title, body } = this.state;
    return (
      <main>
        <h2>Post a new article to /{topicSlug}</h2>
        <p>Username: {username}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="string"
              id="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            Body:
            <textarea
              id="body"
              value={body}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Post article</button>
        </form>
      </main>
    );
  }
}

export default ArticlePoster;
