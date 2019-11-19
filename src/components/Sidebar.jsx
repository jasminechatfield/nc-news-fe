import React from "react";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <p>
        Welcome to Northcoders News! This is a news website where you can view
        and post articles, explore topics of your choosing, leave comments on
        articles and vote your favourite or least favourite articles and
        comments up and down!
      </p>
      <Navigation />
      <p>Maybe some links? Social media?</p>
      <p>Images, etc.</p>
    </aside>
  );
};

export default Sidebar;
