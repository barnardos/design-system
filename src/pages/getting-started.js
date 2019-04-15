import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Main from "../components/Main";
import NumberedList from "../components/NumberedList";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page title="Getting started">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Getting started</Title>
      <Lede>
        The Design System is for anyone creating digital products at Barnardo’s.
      </Lede>
      <Paragraph>
        It provides consistency and familiarity for our service users by solving
        common problems.
      </Paragraph>
      <Paragraph>Start by familiarising yourself with the:</Paragraph>
      <NumberedList>
        <ListItem>
          <Link href="/principles/">principles</Link>
        </ListItem>
        <ListItem>
          <Link href="/standards/">standards</Link>
        </ListItem>
        <ListItem>
          <Link href="/components/">components</Link>
        </ListItem>
        <ListItem>
          <Link href="/patterns/">patterns</Link>
        </ListItem>
      </NumberedList>
      <Paragraph>
        Then use the <Link href="/product-kit/">Product Kit</Link> to start
        designing and developing your product. If you can’t use the kit,{" "}
        <Link href="https://www.npmjs.com/package/@barnardos/components">
          install the components from GitHub
        </Link>{" "}
        on their own. Both allow you to import and update the components rather
        than copy and paste the code.
      </Paragraph>
      <Paragraph>
        If you need something that’s not in the Design System create and test a
        solution in your product, and{" "}
        <Link href="/#feedback">contribute it back</Link> if it solves a common
        problem.
      </Paragraph>
      <SignpostLink href="/">Go to the homepage</SignpostLink>
    </Main>
  </Page>
);
