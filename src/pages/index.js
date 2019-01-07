import Helmet from "react-helmet";
import React from "react";

import DesignSystemNavigations from "../components/DesignSystemNavigations";
import Layout from "../components/Layout";
import Lede from "../components/Lede";
import Title from "../components/Title";
import Heading from "../components/Heading";
import Promo from "../components/Promo";
import Promos from "../components/Promos";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SignpostLink from "../components/SignpostLink";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Barnardo’s Design System`}</title>
    </Helmet>
    <Hero>
      <Title>{`Barnardo’s Design System`}</Title>
      <Lede>{`Designing and developing digital products for everyone, especially children and young people.`}</Lede>
      <SignpostLink
        inverted
        to="/getting-started/"
      >{`Getting started`}</SignpostLink>
    </Hero>
    <Section>
      <DesignSystemNavigations
        items={[
          {
            title: "Components and patterns",
            description: "Solutions to common problems",
            items: [
              {
                text: "Navigating",
                to: "/navigating/"
              },
              {
                text: "Displaying content",
                to: "/displaying-content/"
              },
              {
                text: "Requesting information",
                to: "/requesting-information/"
              },
              {
                text: "Triggering actions",
                to: "/triggering-actions/"
              },
              {
                text: "Filtering",
                to: "/filtering/"
              }
            ]
          },
          {
            title: "Style and brand",
            description: "Foundations for components and patterns",
            items: [
              {
                text: "Colour",
                to: "/colour/"
              },
              {
                text: "Layout",
                to: "/layout/"
              },
              {
                text: "Typography",
                to: "/typography/"
              },
              {
                text: "Proportional scale",
                to: "/proportional-scale/"
              },
              {
                text: "Film and photography",
                to: "/film-and-photography/"
              },
              {
                text: "Iconography",
                to: "/iconography/"
              },
              {
                text: "Brand assets",
                to: "/brand-assets/"
              }
            ]
          },
          {
            title: "Fundamentals",
            description: "Building on our principles",
            items: [
              {
                text: "Accessibility",
                to: "/accessibility/"
              },
              {
                text: "Writing content",
                to: "/writing-content/"
              },
              {
                text: "Code quality",
                to: "/code-quality/"
              },
              {
                text: "Future-proofing code",
                to: "/future-proofing-code/"
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
          to="/principles/#be-consistent"
          title="Be consistent"
        >{`Build trust and familiarity across products.`}</Promo>
        <Promo
          to="/principles/#be-open"
          title="Be open"
        >{`Be part of the open digital community.`}</Promo>
        <Promo
          to="/principles/#embrace-digital"
          title="Embrace digital"
        >{`Make the most of the medium's benefits.`}</Promo>
      </Promos>
    </Section>
  </Layout>
);

export default Pages;
