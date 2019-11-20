import React from "react";
import * as api from "../api";

import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import ArticleVoter from "./ArticleVoter";

class SingleArticle extends React.Component {
  state = { article: {}, comments: {}, isLoading: true, error: null };

  addComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  render() {
    const { username } = this.props;
    const { article, isLoading, comments } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main>
        <ArticleBody article={article} />
        <ArticleVoter article_id={article.article_id} votes={article.votes} />
        <h3>Comments</h3>
        <CommentAdder
          addComment={this.addComment}
          username={username}
          article_id={article.article_id}
        />
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                username={username}
                key={comment.comment_id}
                comment={comment}
              />
            );
          })}
        </ul>
      </main>
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
