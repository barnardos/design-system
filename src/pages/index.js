import Helmet from "react-helmet";
import React from "react";

import DesignSystemNavigation from "../components/DesignSystemNavigation";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Design system`}</title>
    </Helmet>
    <Title>{`Design system`}</Title>
    <Paragraph
    >{`Helping digital teams efficiently create a consistent experience for service users, including children and young people.`}</Paragraph>
    <div className="Pages-navigation">
      <DesignSystemNavigation
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
            text: "Linking",
            to: "/linking/"
          },
          {
            text: "Requesting information",
            to: "/requesting-information/"
          },
          {
            text: "Wayfinding",
            to: "/wayfinding/"
          },
          {
            text: "Writing content",
            to: "/writing-content/"
          }
        ]}
      />
    </div>
  </div>
);

export default Pages;
