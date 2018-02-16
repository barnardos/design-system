import React from "react";

import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

import "./index.css";

const Pages = () => (
  <div>
    <Title>{`Design system`}</Title>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Helping digital product teams create a consistent user experience and maximise efficiency.`}</Paragraph>
    </div>
    <div className="Pages-navigation">
      <Navigation />
    </div>
  </div>
);

export default Pages;
