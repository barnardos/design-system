import React from "react";

import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import Link from "../components/Link";
import Main from "../components/Main";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import SignpostLink from "../components/SignpostLink";
import Teaser from "../components/Teaser";
import Teasers from "../components/Teasers";

export default () => (
  <Page title="Barnardo’s Design System">
    <Main>
      <Hero
        title="Barnardo’s Design System"
        lede="Designing and developing digital products for everyone, especially children and young people."
      >
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
