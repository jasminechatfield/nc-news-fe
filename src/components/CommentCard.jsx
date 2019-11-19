import React from "react";

const CommentCard = props => {
  const { comment } = props;
  return (
    <li>
      <p>
        {comment.created_at} by {comment.author}
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
};

export default CommentCard;
