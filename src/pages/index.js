import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import BulletedList from "../components/BulletedList";
import ComponentsIndex from "../components/ComponentsIndex";
import DesignSystemLayout from "../components/DesignSystemLayout";
import DesignSystemNavigation from "../components/DesignSystemNavigation";
import DesignSystemNavigations from "../components/DesignSystemNavigations";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Lede from "../components/Lede";
import ListItem from "../components/ListItem";
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
    <Hero>
      <Title>{`Barnardo’s Design System`}</Title>
      <Lede>{`Designing and developing digital products for everyone, especially children and young people.`}</Lede>
      <SignpostLinks>
        <SignpostLink
          inverted
          to="/getting-started/"
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
            to: "/asking-for-names/"
          },
          {
            text: "Filtering",
            to: "/filtering/"
          },
          {
            text: "Preventing spam",
            to: "/preventing-spam/"
          }
        ]}
      />
    </Section>
    <Section>
      <Heading>{`Components`}</Heading>
      <Paragraph>{`Following our standards to create reusable parts.`}</Paragraph>
      <Promos>
        <Promo to="/content/" title="Content">
          {<ComponentsIndex items={contentItems} />}
        </Promo>
        <Promo to="/navigation/" title="Navigation">
          {<ComponentsIndex items={navigationItems} />}
        </Promo>
        <Promo to="/forms/" title="Forms">
          {" "}
          {<ComponentsIndex items={formsItems} />}
        </Promo>
      </Promos>
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
                to: "/considerations/"
              },
              {
                text: "Viewport scale",
                to: "/viewport-scale/"
              }
            ]
          },
          {
            title: "Design",
            items: [
              {
                text: "Colour",
                to: "/colour/"
              },
              {
                text: "Typography",
                to: "/typography/"
              },
              {
                text: "Spacing and layout",
                to: "/spacing-and-layout/"
              }
            ]
          },
          {
            title: "Writing",
            items: [
              {
                text: "Style",
                to: "/style/"
              },
              {
                text: "Spelling",
                to: "/spelling/"
              }
            ]
          },
          {
            title: "Development",
            items: [
              {
                text: "Code quality",
                to: "/code-quality/"
              },
              {
                text: "Future-proof code",
                to: "/future-proof-code/"
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
          to="/principles/#start-small"
          title="Start small"
        >{`Put work in front of real people early and often.`}</Promo>
        <Promo
          to="/principles/#be-inclusive"
          title="Be inclusive"
        >{`Strive to support all who need the product.`}</Promo>
        <Promo
          to="/principles/#keep-it-simple"
          title="Keep it simple"
        >{`Do the hard work so the user doesn't have to.`}</Promo>
        <Promo
          to="/principles/#embrace-digital"
          title="Embrace digital"
        >{`Make the most of the medium's benefits.`}</Promo>
        <Promo
          to="/principles/#be-consistent"
          title="Be consistent"
        >{`Build trust and familiarity across products.`}</Promo>
        <Promo
          to="/principles/#be-open"
          title="Be open"
        >{`Be part of the open digital community.`}</Promo>
      </Promos>
    </Section>
    <Section>
      <Heading>{`Assets`}</Heading>
      <BulletedList>
        <ListItem>
          <GatsbyLink
            to="/brand-assets/"
            className="Link"
          >{`Brand assets`}</GatsbyLink>
        </ListItem>

        <ListItem>
          <GatsbyLink
            to="/film-and-photography/"
            className="Link"
          >{`Film and photography`}</GatsbyLink>
        </ListItem>
        <ListItem>
          <GatsbyLink
            to="/iconography/"
            className="Link"
          >{`Iconography`}</GatsbyLink>
        </ListItem>
      </BulletedList>
    </Section>
  </DesignSystemLayout>
);

export default Page;
