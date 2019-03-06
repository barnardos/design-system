import Helmet from "react-helmet";
import React from "react";

import Link from "../components/Link";
import Feedback from "../components/Feedback";
import Page from "../components/Page";
import Hero from "../components/Hero";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Promo from "../components/Promo";
import Promos from "../components/Promos";
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
        <Promos>
          <Promo href="/standards/" title="Standards">
            Guidelines on how to adopt our ways of working.
          </Promo>
          <Promo href="/components/" title="Components">
            Create consistent and assessible products with these reusable
            building blocks.
          </Promo>
          <Promo href="/patterns/" title="Patterns">
            Put the building blocks together to help users complete common
            tasks.
          </Promo>
          <Promo href="/principles/" title="Principles">
            How we think about design.
          </Promo>
          <Promo href="/assets/" title="Assets">
            Downloadable resources and guidance on creating your own assets.
          </Promo>
        </Promos>
      </Section>
      <Section>
        <Feedback title="Give feedback">
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
