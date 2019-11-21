import React from "react";

const ArticleSorter = props => {
  return (
    <form className="articleSorter" onSubmit={props.useArticleSorter}>
      <label>
        Sort by:{" "}
        <select id="sort_by">
          <option>Date</option>
          <option>Comments</option>
          <option>Votes</option>
        </select>
      </label>{" "}
      <label>
        Order:{" "}
        <select id="order">
          <option>Highest / Most recent</option>
          <option>Lowest / Oldest</option>
        </select>
      </label>{" "}
      <button type="submit">Sort</button>
    </form>
  );
};

export default ArticleSorter;
