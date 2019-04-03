import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";

import { items as colourItems } from "./standards/colour";
import { items as typographyItems } from "./standards/typography";

export default () => (
  <Page title="Standards">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Standards</Title>
      <Lede>Guidelines on how to adopt our ways of working.</Lede>
      <Sections>
        <Section>
          <LandingMenu
            heading="Accessibility"
            items={[
              {
                text: "Testing",
                href: "/standards/testing/"
              },
              {
                text: "Viewport scale",
                href: "/standards/viewport-scale/"
              }
            ]}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Design"
            items={[
              {
                text: "Colour",
                href: "/standards/colour/",
                items: colourItems
              },
              {
                text: "Typography",
                href: "/standards/typography/",
                items: typographyItems
              },
              {
                text: "Spacing and layout",
                href: "/standards/spacing-and-layout/"
              }
            ]}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Writing"
            items={[
              {
                text: "Voice and tone",
                href: "/standards/voice-and-tone/"
              },
              {
                text: "Reading age",
                href: "/standards/reading-age/"
              },
              {
                text: "Formatting",
                href: "/standards/formatting/"
              },
              {
                text: "Spelling",
                href: "/standards/spelling/"
              },
              {
                text: "Maintenance",
                href: "/standards/maintenance/"
              }
            ]}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Development"
            items={[
              {
                text: "Code quality",
                href: "/standards/code-quality/"
              },
              {
                text: "Future-proof code",
                href: "/standards/future-proof-code/"
              },
              {
                text: "Performance",
                href: "/standards/performance/"
              }
            ]}
          />
        </Section>
      </Sections>
    </Main>
  </Page>
);
