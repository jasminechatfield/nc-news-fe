import React from "react";
import { Link } from "@reach/router";

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
      <p>
        Votes: {article.votes} Comments: {article.comment_count}
      </p>
    </li>
  );
};

export default ArticleCard;
