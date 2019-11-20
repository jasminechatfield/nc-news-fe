import React from "react";
import { Router } from "@reach/router";

import Articles from "./Articles";
import Topics from "./Topics";
import Sidebar from "./Sidebar";
import ArticlesByTopic from "./ArticlesByTopic";
import SingleArticle from "./SingleArticle";

const Dashboard = props => {
  return (
    <div id="dashboard">
      <Router>
        <Articles path="/allarticles" />
        <Topics path="/alltopics" />
        <ArticlesByTopic path="/topics/:topicSlug" />
        <SingleArticle path="/articles/:article_id" username={props.username} />
      </Router>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
