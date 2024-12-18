import React, { useState } from "react";
import data from "../data/hisNotes.json";

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <section>
      <h1>Topics</h1>
      <ul>
        {Object.keys(topics).map((topic) => (
          <li key={topic} onClick={() => onSelectTopic(topic)}>
            {topics[topic].name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopicList;
