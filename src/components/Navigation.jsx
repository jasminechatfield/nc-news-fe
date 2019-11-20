import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/allarticles">All Articles</Link>
      <Link to="/alltopics">All Topics</Link>
      <br />
      <Link to="/topics/football">/football</Link>
      <Link to="/topics/coding">/coding</Link>
      <Link to="/topics/cooking">/cooking</Link>
    </nav>
  );
};

export default Navigation;
