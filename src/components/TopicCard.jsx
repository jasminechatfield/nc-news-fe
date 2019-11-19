import React from "react";

export const TopicCard = props => {
  return (
    <li>
      <h3>{props.topic.slug}</h3>
      <p>{props.topic.description}</p>
    </li>
  );
};

export default TopicCard;
