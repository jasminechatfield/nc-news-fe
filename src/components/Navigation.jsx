import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/articles">All Articles</Link>
      <Link to="/topics">All Topics</Link>
      <Link to="/topics/football">/football</Link>
      <Link to="/topics/coding">/coding</Link>
      <Link to="/topics/cooking">/cooking</Link>
    </nav>
  );
};

export default Navigation;
