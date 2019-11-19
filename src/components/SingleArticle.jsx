import React from "react";
import * as api from "../api";

import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class SingleArticle extends React.Component {
  state = { article: {}, comments: {}, isLoading: true, error: null };

  addComment = comment => {
    // currently returning a 404, need to find out why
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    console.log(this.state);
    const { username } = this.props;
    const { article, isLoading, comments } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <ArticleBody article={article} />
        <h3>Comments</h3>
        <CommentAdder
          addComment={this.addComment}
          username={username}
          article_id={article.article_id}
        />
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
  };
}

export default SingleArticle;
