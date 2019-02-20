import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Page from "../components/Page";
import DesignSystemNavigation from "../components/DesignSystemNavigation";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";

export default () => (
  <Page>
    <Helmet>
      <title>{`Assets`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Content>
        <Title>{`Assets`}</Title>
        <DesignSystemNavigation
          items={[
            {
              text: "Web assets",
              href: "/assets/web-assets/"
            },
            {
              text: "Sketch assets",
              href: "/assets/sketch-assets"
            },
            {
              text: "Images and videos",
              href: "/assets/images-and-videos/"
            },
            {
              text: "Iconography",
              href: "/assets/iconography/"
            }
          ]}
        />
      </Content>
    </Main>
  </Page>
);
