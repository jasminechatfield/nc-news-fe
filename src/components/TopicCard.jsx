import React from "react";
import { Link } from "@reach/router";

export const TopicCard = props => {
  return (
    <li>
      <h3>
        <Link to={`/topics/${props.topic.slug}`}>{props.topic.slug}</Link>
      </h3>
      <p>{props.topic.description}</p>
    </li>
  );
};

export default TopicCard;
