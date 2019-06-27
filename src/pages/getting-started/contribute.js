import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import SignpostLink from "../../components/SignpostLink";
import Title from "../../components/Title";

export default () => (
  <Page title="Contribute">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Getting started",
          href: "/getting-started/"
        }
      ]}
    />
    <Main>
      <Title>Contribute</Title>
      <Lede>
        Anyone creating digital products can contribute to the Design System.
      </Lede>
      <Paragraph>You should check whether:</Paragraph>
      <BulletedList>
        <ListItem>
          the right <Link href="/components/">component</Link> already exists
        </ListItem>
        <ListItem>
          you can adapt your needs to use an existing component
        </ListItem>
      </BulletedList>
      <Paragraph>If the right component doesn’t exist you should:</Paragraph>
      <BulletedList>
        <ListItem>
          check if there’s an{" "}
          <Link href="https://github.com/barnardos/design-system/issues">
            existing GitHub issue
          </Link>
        </ListItem>
        <ListItem>create a new issue if one doesn’t exist </ListItem>
        <ListItem>add detail including your research and user needs</ListItem>
      </BulletedList>
      <Paragraph />
      <Paragraph>
        When you’re ready to work on an issue, read the guidance on{" "}
        <Link href="https://github.com/barnardos/design-system/blob/master/.github/CONTRIBUTING.md">
          how to contribute code
        </Link>{" "}
        on Github.
      </Paragraph>
      <SignpostLink href="/">Go to the homepage</SignpostLink>
    </Main>
  </Page>
);
