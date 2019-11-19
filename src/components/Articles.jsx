import React from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

class Articles extends React.Component {
  state = { articleCount: 0, articles: [], isLoading: true, error: null };

  render() {
    const { isLoading, articles, articleCount } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <h2>All articles</h2>
        <p>
          Number of articles: <strong>{articleCount}</strong>
        </p>
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount = () => {
    api.getArticles().then(articles => {
      console.log(articles);
      this.setState({
        articles,
        isLoading: false,
        articleCount: articles.length
      });
    });
  };
}

export default Articles;
