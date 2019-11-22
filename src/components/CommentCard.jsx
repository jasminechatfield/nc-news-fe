import React from "react";
import * as api from "../api";

import CommentVoter from "./CommentVoter";

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
    const { comment } = this.props;

    if (isDeleted)
      return (
        <li>
          <p>
            {comment.created_at} by {comment.author}
          </p>
          <p>COMMENT DELETED</p>
        </li>
      );

    return (
      <li className="commentCard">
        <CommentVoter comment_id={comment.comment_id} votes={comment.votes} />
        <p id="commentBy">
          {comment.created_at} by {comment.author}
        </p>
        <p id="commentBody">{comment.body}</p>
        {comment.author === this.props.username ? (
          <p id="commentDelete">
            <button id={comment.comment_id} onClick={this.handleClick}>
              Delete
            </button>
          </p>
        ) : (
          <></>
        )}
      </li>
    );
  }
}

export default CommentCard;
