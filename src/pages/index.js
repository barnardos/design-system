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
          <Teaser href="/product-kit/" heading="Product kit">
            Design, prototype and build your product.
          </Teaser>
        </Teasers>
      </Section>
      <Section>
        <Feedback heading="Get involved!">
          <Paragraph>
            Email the team at{" "}
            <Link href="mailto:designsystem@barnardos.org.uk">
              designsystem@barnardos.org.uk
            </Link>
            .
          </Paragraph>
          <Paragraph>
            Participate in the discussion on{" "}
            <Link href="https://barnardos.facebook.com/groups/design.system/">
              Workplace
            </Link>
            .
          </Paragraph>
          <Paragraph>
            Contribute to the Design System on{" "}
            <Link href="https://github.com/barnardos/design-system/blob/master/.github/CONTRIBUTING.md">
              Github
            </Link>
            .
          </Paragraph>
        </Feedback>
      </Section>
    </Main>
  </Page>
);
