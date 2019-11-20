import React from "react";
import * as api from "../api";

class CommentCard extends React.Component {
  state = { isDeleted: false };

  handleClick = () => {
    const { comment } = this.props;
    // put in axios request to delete comment
    // then artificially delete comment from the page
    const question = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (question === true) {
      api.deleteComment(comment.comment_id).then(() => {
        this.setState({ isDeleted: true });
      });
    }
  };

  render() {
    const { isDeleted } = this.state;
    if (isDeleted) return <li>COMMENT DELETED</li>;
    const { comment } = this.props;
    return (
      <li>
        <p>
          {comment.created_at} by {comment.author}
        </p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
        {comment.author === this.props.username ? (
          <button id={comment.comment_id} onClick={this.handleClick}>
            Delete
          </button>
        ) : (
          <></>
        )}
      </li>
    );
  }
}

export default CommentCard;
