import React from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

class ArticlesByTopic extends React.Component {
  state = { articles: [], articleCount: 0, isLoading: true, error: null };

  render() {
    const { topicSlug } = this.props;
    const { articles, articleCount, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <h2>{topicSlug}</h2>
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
    const { topicSlug } = this.props;
    api.getArticlesByTopic(topicSlug).then(articles => {
      this.setState({
        articles,
        articleCount: articles.length,
        isLoading: false
      });
    });
  };
}

export default ArticlesByTopic;
