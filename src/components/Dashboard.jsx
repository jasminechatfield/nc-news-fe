import React from "react";
import { Router } from "@reach/router";

import Articles from "./Articles";
import Topics from "./Topics";
import Sidebar from "./Sidebar";
import ArticlesByTopic from "./ArticlesByTopic";
import SingleArticle from "./SingleArticle";
import ArticlePoster from "./ArticlePoster";

const Dashboard = props => {
  return (
    <div id="dashboard">
      <Router>
        <Articles path="/articles" default />
        <Topics path="/topics" />
        <ArticlesByTopic path="/topics/:topicSlug" />
        <SingleArticle path="/articles/:article_id" username={props.username} />
        <ArticlePoster
          path="/topics/:topicSlug/new"
          username={props.username}
        />
      </Router>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
