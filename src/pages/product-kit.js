import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Main from "../components/Main";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page title="Product kit">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Product kit</Title>
      <Lede>Design, prototype and build your product.</Lede>
      <Paragraph>It includes:</Paragraph>
      <BulletedList>
        <ListItem>all the components of the Design System</ListItem>
        <ListItem>page templates that you can duplicate and use</ListItem>
        <ListItem>
          tools that help you adhere to the{" "}
          <Link href="/standards/code-quality/">development standards</Link>
        </ListItem>
      </BulletedList>
      <SignpostLink href="https://barnardos-product-kit.netlify.com/">
        View the product kit
      </SignpostLink>
    </Main>
  </Page>
);
