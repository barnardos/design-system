import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Lede from "../components/Lede";
import Link from "../components/Link";
import Main from "../components/Main";
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
      <Paragraph>
        Start by familiarising yourself with the{" "}
        <Link href="/principles/">principles</Link>,{" "}
        <Link href="/standards/">standards</Link>,{" "}
        <Link href="/components/">components</Link> and{" "}
        <Link href="/patterns/">patterns</Link>.
      </Paragraph>
      <Paragraph>
        Then <Link href="/product-kit/">use the Product Kit</Link> to start
        designing and developing your product. If you can’t use the kit,{" "}
        <Link href="https://www.npmjs.com/package/@barnardos/components">
          install the components (technical)
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
      <SignpostLink href="/">Explore the Design System</SignpostLink>
    </Main>
  </Page>
);
