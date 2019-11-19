import React from "react";
import { Router } from "@reach/router";

import Articles from "./Articles";
import Topics from "./Topics";
import Sidebar from "./Sidebar";
import ArticlesByTopic from "./ArticlesByTopic";
import SingleArticle from "./SingleArticle";

const Dashboard = () => {
  return (
    <main>
      <Router>
        <Articles path="/allarticles" />
        <Topics path="/alltopics" />
        <ArticlesByTopic path="/topics/:topicSlug" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
      <Sidebar />
    </main>
  );
};

export default Dashboard;
