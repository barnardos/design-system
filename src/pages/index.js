import React from "react";

import BulletedList from "../components/BulletedList";
import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
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
          <Teaser href="/principles/" heading="Principles">
            How we think about design.
          </Teaser>
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
          <Teaser href="/assets/" heading="Assets">
            Downloadable resources and guidance on creating your own assets.
          </Teaser>
          <Teaser href="/product-kit/" heading="Product Kit">
            Design, prototype and build your product.
          </Teaser>
        </Teasers>
      </Section>
      <Section>
        <Feedback heading="Get involved!">
          <Paragraph>You can:</Paragraph>
          <BulletedList>
            <ListItem>
              email the team at{" "}
              <Link href="mailto:designsystem@barnardos.org.uk">
                designsystem@barnardos.org.uk
              </Link>
            </ListItem>
            <ListItem>
              participate in the discussion on{" "}
              <Link href="https://barnardos.facebook.com/groups/design.system/">
                Workplace
              </Link>
            </ListItem>
            <ListItem>
              contribute to the Design System on{" "}
              <Link href="https://github.com/barnardos/design-system/blob/master/.github/CONTRIBUTING.md">
                Github
              </Link>
            </ListItem>
          </BulletedList>
        </Feedback>
      </Section>
    </Main>
  </Page>
);
