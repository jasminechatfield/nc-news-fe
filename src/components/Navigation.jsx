import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/allarticles">All Articles</Link>
      <Link to="/alltopics">All Topics</Link>
    </nav>
  );
};

export default Navigation;
