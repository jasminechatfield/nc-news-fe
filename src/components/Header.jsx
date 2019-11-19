import React from "react";
import Navigation from "./Navigation";

const Header = props => {
  return (
    <header>
      {props.children}
      <h1>Northcoders News</h1>
      <Navigation />
    </header>
  );
};

export default Header;
