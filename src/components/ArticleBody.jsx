import React from "react";

const ArticleBody = props => {
  const { article } = props;
  return (
    <>
      <h2>{article.title}</h2>
      <p>by {article.author}</p>
      <p>{article.body}</p>
    </>
  );
};

export default ArticleBody;
