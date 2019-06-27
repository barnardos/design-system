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
  <Page title="Home">
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
            Approach to take.
          </Teaser>
          <Teaser href="/standards/" heading="Standards">
            Rules to follow.
          </Teaser>
          <Teaser href="/components/" heading="Components">
            Reusable building blocks.
          </Teaser>
          <Teaser href="/patterns/" heading="Patterns">
            Solutions to common problems.
          </Teaser>
          <Teaser href="/assets/" heading="Assets">
            Downloadable resources.
          </Teaser>
          <Teaser href="/product-kit/" heading="Product Kit">
            Toolkit to create your product.
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
              <Link href="https://barnardos.facebook.com/groups/design.system/">
                participate in the discussion
              </Link>{" "}
              on Workplace
            </ListItem>
            <ListItem>
              <Link href="/getting-started/contribute/">
                contribute to the Design System
              </Link>
            </ListItem>
          </BulletedList>
        </Feedback>
      </Section>
    </Main>
  </Page>
);
