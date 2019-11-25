import React from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

import formatDates from "../utils/formatDates";

import ArticleCard from "./ArticleCard";
import PageChooser from "./PageChooser";
import ErrorDisplayer from "./ErrorDisplayer";

class UserPage extends React.Component {
  state = {
    user: {},
    articles: [],
    articleCount: 0,
    page: 0,
    error: null,
    isLoading: true
  };

  updatePage = page => {
    this.setState({ page });
  };

  deleteUser = username => {
    const question = window.confirm(
      "Are you sure you want to delete your account? This cannot be undone."
    );
    if (question === true) {
      api.deleteUser(username).then(() => {
        navigate(`/`);
      });
    }
  };

  render() {
    const { user, articles, articleCount, page, isLoading, error } = this.state;
    const { loggedInUsername } = this.props;

    if (isLoading) return <p className="loading">Loading...</p>;
    if (error) return <ErrorDisplayer error={error} />;

    return (
      <main>
        <h2>{user.username}'s user page</h2>
        {user.username === loggedInUsername ? (
          <button
            onClick={() => {
              this.deleteUser(user.username);
            }}
          >
            Delete your account
          </button>
        ) : (
          <></>
        )}
        <br />
        <img
          className="avatar"
          alt={`${user.username}'s avatar`}
          src={`${user.avatar_url}`}
        />
        <div className="facts">
          <p>Name: {user.name}</p>
          <p>Articles: {articleCount}</p>
        </div>
        <h2>Articles by {user.username}</h2>
        <PageChooser
          count={articleCount}
          page={page}
          updatePage={this.updatePage}
        />
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    const { username } = this.props;
    const getUser = api.getUser(username);
    const getArticlesByUser = api.getArticlesByUser(username);
    Promise.all([getUser, getArticlesByUser]).then(
      ([user, [articles, articleCount]]) => {
        this.setState({
          user,
          articles: formatDates(articles),
          articleCount,
          isLoading: false
        });
      }
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      api
        .getArticlesByUser(this.props.username, this.state.page)
        .then(([articles, count]) => {
          this.setState({ articles });
        });
    }
  };
}

export default UserPage;
