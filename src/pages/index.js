import Helmet from "react-helmet";
import React from "react";

import Link from "../components/Link";
import Feedback from "../components/Feedback";
import ComponentsIndex from "../components/ComponentsIndex";
import ComponentsIndexes from "../components/ComponentsIndexes";
import Page from "../components/Page";
import DesignSystemNavigations from "../components/DesignSystemNavigations";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Promo from "../components/Promo";
import Promos from "../components/Promos";
import Section from "../components/Section";
import SignpostLink from "../components/SignpostLink";
import Title from "../components/Title";

import { indexItems as contentItems } from "./content";
import { indexItems as navigationItems } from "./navigation";
import { indexItems as formsItems } from "./forms";
import { indexItems as structureItems } from "./structure";

export default () => (
  <Page>
    <Helmet>
      <title>{`Barnardo’s Design System`}</title>
    </Helmet>
    <Main>
      <Hero>
        <Title>{`Barnardo’s Design System`}</Title>
        <Lede>{`Designing and developing digital products for everyone, especially children and young people.`}</Lede>
        <SignpostLink
          inverted
          href="/getting-started/"
        >{`Getting started`}</SignpostLink>
      </Hero>
      <Section>
        <Heading>{`Standards`}</Heading>
        <Paragraph>{`Guidelines on how to adopt our ways of working.`}</Paragraph>
        <DesignSystemNavigations
          items={[
            {
              title: "Accessibility",
              items: [
                {
                  text: "Considerations",
                  href: "/considerations/"
                },
                {
                  text: "Viewport scale",
                  href: "/viewport-scale/"
                }
              ]
            },
            {
              title: "Design",
              items: [
                {
                  text: "Colour",
                  href: "/colour/"
                },
                {
                  text: "Typography",
                  href: "/typography/"
                },
                {
                  text: "Spacing and layout",
                  href: "/spacing-and-layout/"
                }
              ]
            },
            {
              title: "Writing",
              items: [
                {
                  text: "Voice and tone",
                  href: "/voice-and-tone/"
                },
                {
                  text: "Formatting",
                  href: "/formatting/"
                },
                {
                  text: "Spelling",
                  href: "/spelling/"
                },
                {
                  text: "Maintenance",
                  href: "/maintenance/"
                }
              ]
            },
            {
              title: "Development",
              items: [
                {
                  text: "Code quality",
                  href: "/code-quality/"
                },
                {
                  text: "Future-proof code",
                  href: "/future-proof-code/"
                },
                {
                  text: "Performance",
                  href: "/performance/"
                }
              ]
            }
          ]}
        />
      </Section>
      <Section>
        <Heading>{`Components`}</Heading>
        <Paragraph>{`Build consistent and assessible products with these reusable building blocks.`}</Paragraph>
        <ComponentsIndexes>
          <ComponentsIndex
            items={structureItems}
            href="/structure/"
            title="Structure"
          />
          <ComponentsIndex
            items={navigationItems}
            href="/navigation/"
            title="Navigation"
          />
          <ComponentsIndex
            items={contentItems}
            href="/content/"
            title="Content"
          />
          <ComponentsIndex items={formsItems} href="/forms/" title="Forms" />
        </ComponentsIndexes>
        <SignpostLink href="https://www.npmjs.com/package/@barnardos/components">{`Install components (technical)`}</SignpostLink>
      </Section>
      <Section>
        <Promos>
          <Promo
            href="/patterns"
            title="Patterns"
          >{`Put the building blocks together to help users complete common tasks.`}</Promo>
          <Promo
            href="/assets"
            title="Assets"
          >{`Downloadable resources and guidance on creating your own assets.`}</Promo>
        </Promos>
      </Section>
      <Section>
        <Heading>{`Principles`}</Heading>
        <Paragraph>{`How we think about design.`}</Paragraph>
        <Promos>
          <Promo
            href="/principles/#start-small"
            title="Start small"
          >{`Put work in front of real people early and often.`}</Promo>
          <Promo
            href="/principles/#be-inclusive"
            title="Be inclusive"
          >{`Strive to support all who need the product.`}</Promo>
          <Promo
            href="/principles/#keep-it-simple"
            title="Keep it simple"
          >{`Do the hard work so the user doesn't have to.`}</Promo>
          <Promo
            href="/principles/#embrace-digital"
            title="Embrace digital"
          >{`Make the most of the medium's benefits.`}</Promo>
          <Promo
            href="/principles/#be-consistent"
            title="Be consistent"
          >{`Build trust and familiarity across products.`}</Promo>
          <Promo
            href="/principles/#be-open"
            title="Be open"
          >{`Be part of the open digital community.`}</Promo>
        </Promos>
      </Section>
      <Feedback title="Give feedback">
        <Paragraph>
          {`Email the Design System team on `}
          <Link href="mailto:designsystem@barnardos.org.uk">
            {`designsystem@barnardos.org.uk`}
          </Link>
          {`.`}
        </Paragraph>
        <Paragraph>
          {`Contribute to the discussion on `}
          <Link href="https://barnardos.facebook.com/groups/design.system/">{`Workplace`}</Link>
          {`.`}
        </Paragraph>
      </Feedback>
    </Main>
  </Page>
);
