import React from "react";
import { Link } from "@reach/router";

const ArticleBody = props => {
  const { article } = props;
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.created_at}</p>
      <p>
        by <Link to={`/users/${article.author}`}>{article.author}</Link>
      </p>
      <p>{article.body}</p>
    </>
  );
};

export default ArticleBody;
