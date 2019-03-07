import Helmet from "react-helmet";
import React from "react";

import Link from "../components/Link";
import Feedback from "../components/Feedback";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Teaser from "../components/Teaser";
import Teasers from "../components/Teasers";
import Section from "../components/Section";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

export default () => (
  <Page>
    <Helmet>
      <title>Barnardo’s Design System</title>
    </Helmet>
    <Main>
      <Hero>
        <Title>Barnardo’s Design System</Title>
        <Lede>
          Designing and developing digital products for everyone, especially
          children and young people.
        </Lede>
        <SignpostLink inverted href="/getting-started/">
          Getting started
        </SignpostLink>
      </Hero>
      <Section>
        <Teasers>
          <Teaser href="/standards/" heading="Standards">
            Guidelines on how to adopt our ways of working.
          </Teaser>
          <Teaser href="/components/" heading="Components">
            Create consistent and assessible products with these reusable
            building blocks.
          </Teaser>
          <Teaser href="/patterns/" heading="Patterns">
            Put the building blocks together to help users complete common
            tasks.
          </Teaser>
          <Teaser href="/principles/" heading="Principles">
            How we think about design.
          </Teaser>
          <Teaser href="/assets/" heading="Assets">
            Downloadable resources and guidance on creating your own assets.
          </Teaser>
        </Teasers>
      </Section>
      <Section>
        <Feedback heading="Give feedback">
          <Paragraph>
            Email the Design System team on{" "}
            <Link href="mailto:designsystem@barnardos.org.uk">
              designsystem@barnardos.org.uk
            </Link>
            .
          </Paragraph>
          <Paragraph>
            Contribute to the discussion on{" "}
            <Link href="https://barnardos.facebook.com/groups/design.system/">
              Workplace
            </Link>
            .
          </Paragraph>
        </Feedback>
      </Section>
    </Main>
  </Page>
);
