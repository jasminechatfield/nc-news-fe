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
    return (
      <div className="vote">
        {this.state.voteChange > 0 ? (
          <button classname="no" disabled>
            XX
          </button>
        ) : (
          <button className="up" onClick={() => this.handleClick(1)}>
            +1
          </button>
        )}
        <p>{votes + voteChange}</p>
        {this.state.voteChange < 0 ? (
          <button classname="no" disabled>
            XX
          </button>
        ) : (
          <button className="down" onClick={() => this.handleClick(-1)}>
            -1
          </button>
        )}
      </div>
    );
  }
}

export default ArticleVoter;
