import React from "react";
import * as api from "../api";

class CommentVoter extends React.Component {
  state = { voteChange: 0 };

  handleClick = num => {
    const { comment_id } = this.props;
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + num };
    });
    api.updateCommentVotes(comment_id, num);
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    console.log(voteChange);
    return (
      <>
        <button onClick={() => this.handleClick(1)}>Vote up</button>
        Votes: {votes + voteChange}
        <button onClick={() => this.handleClick(-1)}>Vote down</button>
      </>
    );
  }
}

export default CommentVoter;
