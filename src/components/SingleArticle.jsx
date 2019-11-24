import React from "react";
import * as api from "../api";

import ArticleBody from "./ArticleBody";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import ArticleVoter from "./ArticleVoter";

import formatDates from "../utils/formatDates";
import ErrorDisplayer from "./ErrorDisplayer";
import PageChooser from "./PageChooser";

class SingleArticle extends React.Component {
  state = {
    commentCount: 0,
    article: {},
    comments: [],
    isLoading: true,
    error: null,
    page: 0
  };

  addComment = comment => {
    this.setState(currentState => {
      return {
        comments: [comment, ...currentState.comments],
        page: 0,
        commentCount: currentState.commentCount + 1
      };
    });
  };

  updatePage = page => {
    this.setState({ page });
  };

  render() {
    const { username } = this.props;
    const {
      article,
      isLoading,
      comments,
      error,
      page,
      commentCount
    } = this.state;
    if (isLoading) return <p className="loading">Loading...</p>;
    if (error) return <ErrorDisplayer error={error} />;
    return (
      <main>
        <ArticleBody article={article} />
        <ArticleVoter article_id={article.article_id} votes={article.votes} />
        <h3>Comments: {commentCount}</h3>
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
        <PageChooser
          page={page}
          updatePage={this.updatePage}
          count={commentCount}
        />
      </main>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      api
        .getCommentsForArticle(this.props.article_id, this.state.page)
        .then(([comments]) => {
          this.setState({ comments: formatDates(comments) });
        });
    }
  };

  componentDidMount = () => {
    Promise.all([
      api.getCommentsForArticle(this.props.article_id),
      api.getSingleArticle(this.props.article_id)
    ])
      .then(([[comments, commentCount], article]) => {
        this.setState({
          commentCount,
          comments: formatDates(comments),
          article: formatDates([article])[0],
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
  };
}

export default SingleArticle;
