import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Link from "../components/Link";
import Page from "../components/Page";
import SignpostLink from "../components/SignpostLink";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import ComponentsIndex from "../components/ComponentsIndex";
import Lede from "../components/Lede";
import Section from "../components/Section";
import Sections from "../components/Sections";

import { indexItems as contentItems } from "./components/content";
import { indexItems as navigationItems } from "./components/navigation";
import { indexItems as formsItems } from "./components/forms";
import { indexItems as structureItems } from "./components/structure";

export default () => (
  <Page>
    <Helmet>
      <title>Components</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Components</Title>
      <Lede>
        Create consistent and assessible products with these reusable building
        blocks.
      </Lede>
      <SignpostLink href="https://www.npmjs.com/package/@barnardos/components">
        Install components (technical)
      </SignpostLink>
      <Sections>
        <Section>
          <Heading>Structure</Heading>
          <Paragraph>
            <Link href="/components/structure/">
              View all Structure components
            </Link>
          </Paragraph>
          <ComponentsIndex items={structureItems} />
        </Section>
        <Section>
          <Heading>Navigation</Heading>
          <Paragraph>
            <Link href="/components/navigation/">
              View all Navigation components
            </Link>
          </Paragraph>
          <ComponentsIndex items={navigationItems} />
        </Section>
        <Section>
          <Heading>Content</Heading>
          <Paragraph>
            <Link href="/components/content/">View all Content components</Link>
          </Paragraph>
          <ComponentsIndex items={contentItems} />
        </Section>
        <Section>
          <Heading>Forms</Heading>
          <Paragraph>
            <Link href="/components/forms/">View all Forms components</Link>
          </Paragraph>
          <ComponentsIndex items={formsItems} />
        </Section>
      </Sections>
    </Main>
  </Page>
);
