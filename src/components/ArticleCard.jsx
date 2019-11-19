import React from "react";

const ArticleCard = props => {
  const { article } = props;
  return (
    <li>
      <h3>{article.title}</h3>
    </li>
  );
};

export default ArticleCard;
