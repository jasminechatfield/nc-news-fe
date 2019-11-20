import React from "react";
import * as api from "../api";
import TopicCard from "./TopicCard";

class Topics extends React.Component {
  state = { topics: [], topicCount: 0, isLoading: true, error: null };

  render() {
    const { isLoading, topics, topicCount } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main>
        <h2>Topics</h2>
        <p>Number of topics: {topicCount}</p>
        <ul>
          {topics.map(topic => {
            return <TopicCard key={topic.slug} topic={topic} />;
          })}
        </ul>
      </main>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false, topicCount: topics.length });
    });
  };
}

export default Topics;
