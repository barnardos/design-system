import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";

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
            items={[
              {
                text: "Gathering information",
                href: "/patterns/gathering-information/"
              },
              {
                text: "Asking for names",
                href: "/patterns/asking-for-names/"
              },
              {
                text: "Interacting with young people in real time",
                href: "/patterns/interacting-with-young-people/"
              },
              {
                text: "Filtering",
                href: "/patterns/filtering/"
              },
              {
                text: "Preventing spam",
                href: "/patterns/preventing-spam/"
              }
            ]}
          />
        </Section>
      </Sections>
    </Main>
  </Page>
);
