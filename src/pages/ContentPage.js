import React, { useState } from "react";
import TopicList from "../components/TopicList";
import SubTopicList from "../components/SubTopicList";

const ContentPage = () => {
  return (
    <section>
      <TopicList topics={data.topics}></TopicList>
    </section>
  );
};

export default ContentPage;
