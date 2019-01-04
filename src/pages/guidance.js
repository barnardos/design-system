import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import DesignSystemNavigations from "../components/DesignSystemNavigations";
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
      <DesignSystemNavigations
        items={[
          {
            title: "Foundation",
            items: [
              {
                text: "Brand assets",
                to: "/guidance/brand-assets/"
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
                text: "Layout and typography",
                to: "/guidance/layout-and-typography/"
              }
            ]
          },
          {
            title: "Common problems",
            items: [
              {
                text: "Navigating",
                to: "/guidance/navigating/"
              },
              {
                text: "Displaying content",
                to: "/guidance/displaying-content/"
              },
              {
                text: "Requesting information",
                to: "/guidance/requesting-information/"
              },
              {
                text: "Triggering events",
                to: "/guidance/triggering-events/"
              },
              {
                text: "Filtering",
                to: "/guidance/filtering/"
              }
            ]
          },
          {
            title: "Documentation",
            items: [
              {
                text: "Accessibility",
                to: "/guidance/accessibility/"
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
                text: "Writing content",
                to: "/guidance/writing-content/"
              }
            ]
          }
        ]}
      />
    </div>
  </Layout>
);

export default Pages;
