import React from "react";
import { Router } from "@reach/router";

import Articles from "./Articles";
import Topics from "./Topics";
import Sidebar from "./Sidebar";
import ArticlesByTopic from "./ArticlesByTopic";
import SingleArticle from "./SingleArticle";
import ArticlePoster from "./ArticlePoster";
import UserPage from "./UserPage";
import SignUpPage from "./SignUpPage";

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
        <UserPage path="/users/:username" loggedInUsername={props.username} />
        <SignUpPage path="/createuser" />
      </Router>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
