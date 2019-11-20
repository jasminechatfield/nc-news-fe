import React from "react";
import { Link } from "@reach/router";
import ArticleVoter from "./ArticleVoter";

const ArticleCard = props => {
  const { article } = props;
  return (
    <li>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>
        by {article.author} on {article.created_at}
      </p>
      <p>Comments: {article.comment_count}</p>
      <ArticleVoter article_id={article.article_id} votes={article.votes} />
    </li>
  );
};

export default ArticleCard;
