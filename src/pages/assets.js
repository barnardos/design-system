import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Main from "../components/Main";
import Page from "../components/Page";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";

import { items as webAssetsItems } from "./assets/web-assets";

export default () => (
  <Page title="Assets">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Assets</Title>
      <Lede>The downloadable resources you can use.</Lede>
      <Sections>
        <Section>
          <LandingMenu
            items={[
              {
                text: "Web assets",
                href: "/assets/web-assets/",
                items: webAssetsItems
              },
              {
                text: "Sketch assets",
                href: "/assets/sketch-assets"
              }
            ]}
          />
        </Section>
      </Sections>
    </Main>
  </Page>
);
