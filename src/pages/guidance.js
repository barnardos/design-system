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
        items={[
          {
            text: "Filtering",
            to: "/guidance/filtering/"
          },
          {
            text: "Linking",
            to: "/guidance/linking/"
          },
          {
            text: "Requesting information",
            to: "/guidance/requesting-information/"
          },
          {
            text: "Wayfinding",
            to: "/guidance/wayfinding/"
          }
        ]}
      />
    </div>
  </Layout>
);

export default Pages;
