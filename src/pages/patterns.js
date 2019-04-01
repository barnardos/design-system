import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";

import { items as gatheringInformationItems } from "./patterns/gathering-information";

export default () => (
  <Page title="Patterns">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Patterns</Title>
      <Lede>
        Put the building blocks together to help users complete common tasks.
      </Lede>
      <Sections>
        <Section>
          <LandingMenu
            heading="Forms"
            items={[
              {
                text: "Start page",
                href: "/patterns/start-page/"
              },
              {
                text: "Gathering information",
                href: "/patterns/gathering-information/",
                items: gatheringInformationItems
              },
              {
                text: "Preventing spam",
                href: "/patterns/preventing-spam/"
              },
              {
                text: "Filtering",
                href: "/patterns/filtering/"
              }
            ]}
          />
        </Section>
        <Section>
          <LandingMenu
            heading="Engagement"
            items={[
              {
                text: "Interacting with young people in real time",
                href: "/patterns/interacting-with-young-people/"
              }
            ]}
          />
        </Section>
      </Sections>
    </Main>
  </Page>
);
