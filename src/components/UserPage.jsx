import React from "react";
import * as api from "../api";

import ArticleCard from "./ArticleCard";
import PageChooser from "./PageChooser";

class UserPage extends React.Component {
  state = { user: {}, articles: [], articleCount: 0, page: 0, error: null };

  updatePage = page => {
    this.setState({ page });
  };

  render() {
    const { user, articles, articleCount, page } = this.state;
    return (
      <main>
        <h2>{user.username}'s user page</h2>
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
        this.setState({ user, articles, articleCount });
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
