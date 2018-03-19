import Helmet from "react-helmet";
import React from "react";

import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

import "./index.css";

const Pages = () => (
  <div>
    <Helmet>
      <title>{`Design system`}</title>
    </Helmet>
    <Title>{`Design system`}</Title>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Helping digital teams efficiently create a consistent experience for service users, including children and young people.`}</Paragraph>
    </div>
    <div className="Pages-navigation">
      <Navigation
        items={[
          {
            text: "Principles",
            to: "/principles/"
          },
          {
            text: "Typography and layout",
            to: "/typography-and-layout/"
          },
          {
            text: "Colour",
            to: "/colour/"
          },
          {
            text: "Components",
            to: "/components/"
          },
          {
            text: "Gathering input",
            to: "/gathering-input/"
          }
        ]}
      />
    </div>
  </div>
);

export default Pages;
