import React from "react";
import * as api from "../api";

import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";

//about to move all of the stuff into ArticleBody

class SingleArticle extends React.Component {
  state = { article: {}, comments: {}, isLoading: true, error: null };

  render() {
    console.log(this.state);
    const { article, isLoading, comments } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <ArticleBody article={article} />
        <h3>Comments</h3>
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </>
    );
  }

  componentDidMount = () => {
    Promise.all([
      api.getCommentsForArticle(this.props.article_id),
      api.getSingleArticle(this.props.article_id)
    ]).then(([comments, article]) => {
      this.setState({ comments, article, isLoading: false });
    });

    // api.getCommentsForArticle(this.props.article_id).then(comments => {
    //   this.setState({ comments });
    // });

    // api.getSingleArticle(this.props.article_id).then(article => {
    //   this.setState({ article, isLoading: false });
    // });
  };
}

export default SingleArticle;
