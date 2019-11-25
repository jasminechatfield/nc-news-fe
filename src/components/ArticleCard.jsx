import React from "react";
import { Link } from "@reach/router";
import ArticleVoter from "./ArticleVoter";

const ArticleCard = props => {
  const { article } = props;
  return (
    <li className="articleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h3 className="articleTitle">{article.title}</h3>
      </Link>
      <p className="articleAuthor">
        by <Link to={`/users/${article.author}`}>{article.author}</Link> on{" "}
        {article.created_at}
      </p>
      <Link to={`/articles/${article.article_id}`}>
        <p className="articleComments">Comments: {article.comment_count}</p>
      </Link>
      <ArticleVoter article_id={article.article_id} votes={article.votes} />
    </li>
  );
};

export default ArticleCard;
