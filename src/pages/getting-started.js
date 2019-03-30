import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Link from "../components/DesignSystemLink";
import Lede from "../components/Lede";
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
        Try to adopt as much of the Design System as possible. Depending on your
        needs and constraints, you may not be able to adopt all of it. It’s not
        all or nothing.
      </Paragraph>
      <Paragraph>
        If something isn’t in the Design System, don’t let it stop you. Design a
        solution, test it and use it in your product. If you think it solves a
        common problem{" "}
        <Link href="/#feedback">let the Design System team know</Link>.
      </Paragraph>
      <SignpostLink href="/">Explore the Design System</SignpostLink>
    </Main>
  </Page>
);
