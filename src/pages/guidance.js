import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import DesignSystemNavigation from "../components/DesignSystemNavigation";
import Layout from "../components/Layout";
import Title from "../components/Title";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Guidance`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Guidance`}</Title>
    <div className="Pages-designSystemNavigation">
      <DesignSystemNavigation
        title="Foundation"
        items={[
          {
            text: "Accessibility",
            to: "/guidance/accessibility/"
          },
          {
            text: "Colour",
            to: "/guidance/colour/"
          },
          {
            text: "Developer tools",
            to: "/guidance/developer-tools/"
          },
          {
            text: "Film and photography",
            to: "/guidance/film-and-photography/"
          },
          {
            text: "Iconography",
            to: "/guidance/iconography/"
          },
          {
            text: "Layout and typography",
            to: "/guidance/layout-and-typography/"
          },
          {
            text: "Writing content",
            to: "/guidance/writing-content/"
          }
        ]}
      />
      <DesignSystemNavigation
        title="Common problems"
        items={[
          {
            text: "Displaying information",
            to: "/guidance/displaying-information/"
          },
          {
            text: "Navigating",
            to: "/guidance/navigating/"
          },
          {
            text: "Patterns",
            to: "/guidance/patterns/"
          },
          {
            text: "Requesting information",
            to: "/guidance/requesting-information/"
          }
        ]}
      />
    </div>
  </Layout>
);

export default Pages;
