import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Link from "../components/Link";
import Main from "../components/Main";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";

import { items as contentItems } from "./components/content";
import { items as formsItems } from "./components/forms";
import { items as navigationItems } from "./components/navigation";
import { items as structureItems } from "./components/structure";

export default () => (
  <Page title="Components">
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
      <Lede>The reusable building blocks you should use.</Lede>
      <Sections>
        <Section>
          <LandingMenu
            heading="Structure"
            items={structureItems}
            link={{
              href: "/components/structure/",
              text: "View all Structure components"
            }}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Navigation"
            items={navigationItems}
            link={{
              href: "/components/navigation/",
              text: "View all Navigation components"
            }}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Content"
            items={contentItems}
            link={{
              href: "/components/content/",
              text: "View all Content components"
            }}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Forms"
            items={formsItems}
            link={{
              href: "/components/forms/",
              text: "View all Forms components"
            }}
          />
        </Section>
        <Section>
          <Heading>Install the components</Heading>
          <Paragraph>
            Use the <Link href="/product-kit/">Product Kit</Link> to start
            designing and developing your product.
          </Paragraph>
          <Paragraph>
            If you can’t use the kit,{" "}
            <Link href="https://www.npmjs.com/package/@barnardos/components">
              install the components from GitHub
            </Link>{" "}
            on their own.
          </Paragraph>
        </Section>
      </Sections>
    </Main>
  </Page>
);
