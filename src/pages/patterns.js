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
      <title>{`Patterns`}</title>
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
        <Title>{`Patterns`}</Title>
        <DesignSystemNavigation
          items={[
            {
              text: "Asking for names",
              href: "/patterns/asking-for-names/"
            },
            {
              text: "Filtering",
              href: "/patterns/filtering/"
            },
            {
              text: "Preventing spam",
              href: "/patterns/preventing-spam/"
            }
          ]}
        />
      </Content>
    </Main>
  </Page>
);
