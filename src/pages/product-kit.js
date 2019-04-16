import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Lede from "../components/Lede";
import ListItem from "../components/ListItem";
import Main from "../components/Main";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page title="Product Kit">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Product Kit</Title>
      <Lede>
        A toolkit you should use to design, prototype and build your product
        using page templates.
      </Lede>
      <Paragraph>It includes:</Paragraph>
      <BulletedList>
        <ListItem>all the components</ListItem>
        <ListItem>tools to enforce the standards</ListItem>
      </BulletedList>
      <SignpostLink href="https://barnardos-product-kit.netlify.com/">
        View the Product Kit (External)
      </SignpostLink>
    </Main>
  </Page>
);
