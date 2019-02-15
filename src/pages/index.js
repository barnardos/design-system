import Helmet from "react-helmet";
import React from "react";

import Link from "../components/Link";
import Feedback from "../components/Feedback";
import BulletedList from "../components/BulletedList";
import ComponentsIndex from "../components/ComponentsIndex";
import ComponentsIndexes from "../components/ComponentsIndexes";
import DesignSystemLayout from "../components/DesignSystemLayout";
import DesignSystemNavigation from "../components/DesignSystemNavigation";
import DesignSystemNavigations from "../components/DesignSystemNavigations";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Lede from "../components/Lede";
import ListItem from "../components/ListItem";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Promo from "../components/Promo";
import Promos from "../components/Promos";
import Section from "../components/Section";
import SignpostLink from "../components/SignpostLink";
import SignpostLinks from "../components/SignpostLinks";
import Title from "../components/Title";

import { indexItems as contentItems } from "./content";
import { indexItems as navigationItems } from "./navigation";
import { indexItems as formsItems } from "./forms";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Barnardo’s Design System`}</title>
    </Helmet>
    <Main>
      <Hero>
        <Title>{`Barnardo’s Design System`}</Title>
        <Lede>{`Designing and developing digital products for everyone, especially children and young people.`}</Lede>
        <SignpostLinks>
          <SignpostLink
            inverted
            href="/getting-started/"
          >{`Getting started`}</SignpostLink>
        </SignpostLinks>
      </Hero>
      <Section>
        <Heading>{`Patterns`}</Heading>
        <Paragraph>{`Using our components to solve common problems.`}</Paragraph>
        <DesignSystemNavigation
          isFlex
          items={[
            {
              text: "Asking for names",
              href: "/asking-for-names/"
            },
            {
              text: "Filtering",
              href: "/filtering/"
            },
            {
              text: "Preventing spam",
              href: "/preventing-spam/"
            }
          ]}
        />
      </Section>
      <Section>
        <Heading>{`Components`}</Heading>
        <Paragraph>{`Following our standards to create reusable parts.`}</Paragraph>
        <ComponentsIndexes>
          <ComponentsIndex
            items={contentItems}
            href="/content/"
            title="Content"
          />
          <ComponentsIndex
            items={navigationItems}
            href="/navigation/"
            title="Navigation"
          />
          {<ComponentsIndex items={formsItems} href="/forms/" title="Forms" />}
        </ComponentsIndexes>
      </Section>
      <Section>
        <Heading>{`Standards`}</Heading>
        <Paragraph>{`Building on our principles to maintain quality and consistency.`}</Paragraph>
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
                  text: "Style",
                  href: "/style/"
                },
                {
                  text: "Spelling",
                  href: "/spelling/"
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
                }
              ]
            }
          ]}
        />
      </Section>
      <Section>
        <Heading>{`Principles`}</Heading>
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
      <Section>
        <Heading>{`Assets`}</Heading>
        <BulletedList>
          <ListItem>
            <Link href="/web-assets/">{`Web assets`}</Link>
          </ListItem>
          <ListItem>
            <Link href="/sketch-assets/">{`Sketch assets`}</Link>
          </ListItem>
          <ListItem>
            <Link href="/film-and-photography/">{`Film and photography`}</Link>
          </ListItem>
          <ListItem>
            <Link href="/iconography/">{`Iconography`}</Link>
          </ListItem>
        </BulletedList>
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
  </DesignSystemLayout>
);

export default Page;
