import React from "react";
import * as api from "../api";

class ArticleVoter extends React.Component {
  state = { voteChange: 0 };

  handleClick = num => {
    const { article_id } = this.props;
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + num };
    });
    api.updateArticleVotes(article_id, num);
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

export default ArticleVoter;
