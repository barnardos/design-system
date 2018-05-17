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
    >{`The Barnardo’s Design System is a central resource that helps you create great digital experiences with us.`}</Paragraph>
    <div className="Pages-navigation">
      <DesignSystemNavigation
        items={[
          {
            text: "Principles",
            to: "/principles/"
          },
          {
            text: "Layout and typography",
            to: "/layout-and-typography/"
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
            text: "Filtering",
            to: "/filtering/"
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
    <Paragraph>{`This living resource exists to guide, not limit.`}</Paragraph>
    <Paragraph>
      {`Everyone’s welcome to `}
      <a href="https://github.com/barnardos/design-system">{`contribute and give feedback`}</a>
      {`.`}
    </Paragraph>
  </div>
);

export default Pages;
