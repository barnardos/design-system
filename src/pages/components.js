import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import Section from "../components/Section";
import Sections from "../components/Sections";
import SignpostLink from "../components/SignpostLink";
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
      <Lede>
        Create consistent and assessible products with these reusable building
        blocks.
      </Lede>
      <SignpostLink href="https://www.npmjs.com/package/@barnardos/components">
        Install components from GitHub
      </SignpostLink>
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
      </Sections>
    </Main>
  </Page>
);
