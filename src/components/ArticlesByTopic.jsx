import React from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import formatDates from "../utils/formatDates";
import ErrorDisplayer from "./ErrorDisplayer";

class ArticlesByTopic extends React.Component {
  state = {
    articles: [],
    articleCount: 0,
    isLoading: true,
    error: null,
    sort_by: "default",
    order: "default"
  };

  useArticleSorter = event => {
    event.preventDefault();
    console.log(event.target[0].value); // sort_by
    console.log(event.target[1].value); // order
    let sort_by = "";
    let order = "";
    if (event.target[0].value === "Date") {
      sort_by = "created_at";
    } else if (event.target[0].value === "Comments") {
      sort_by = "comment_count";
    } else sort_by = "votes";
    if (event.target[1].value === "Highest / Most recent") {
      order = "desc";
    } else order = "asc";
    this.setSortBy(sort_by, order);
  };

  setSortBy = (sort_by, order) => {
    this.setState({ sort_by, order });
  };

  render() {
    const { topicSlug } = this.props;
    const { articles, articleCount, isLoading, error } = this.state;

    if (isLoading) return <p className="loading">Loading...</p>;
    if (error) return <ErrorDisplayer error={error} />;

    return (
      <main>
        <h2>/{topicSlug}</h2>
        <p>
          Number of articles: <strong>{articleCount}</strong>
        </p>
        <ArticleSorter useArticleSorter={this.useArticleSorter} />
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    const { topicSlug } = this.props;
    api
      .getArticlesByTopic(topicSlug)
      .then(articles => {
        this.setState({
          articles: formatDates(articles),
          articleCount: articles.length,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      api
        .getArticlesByTopic(
          this.props.topicSlug,
          this.state.sort_by,
          this.state.order
        )
        .then(articles => {
          this.setState({
            articles: formatDates(articles),
            articleCount: articles.length
          });
        })
        .catch(error => {
          this.setState({ error: error.response, isLoading: false });
        });
    }
    if (prevProps.topicSlug !== this.props.topicSlug) {
      api
        .getArticlesByTopic(this.props.topicSlug)
        .then(articles => {
          this.setState({
            articles: formatDates(articles),
            articleCount: articles.length,
            isLoading: false
          });
        })
        .catch(error => {
          this.setState({ error: error.response, isLoading: false });
        });
    }
  };
}

export default ArticlesByTopic;
