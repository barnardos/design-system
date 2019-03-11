import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Page from "../components/Page";
import LandingMenu from "../components/LandingMenu";
import Lede from "../components/Lede";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";
import Main from "../components/Main";

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
      <Lede>
        Downloadable resources and guidance on creating your own assets.
      </Lede>
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
                text: "Generating Sketch assets",
                href: "/assets/generating-sketch-assets"
              },
              {
                text: "Images and videos",
                href: "/assets/images-and-videos/"
              },
              {
                text: "Iconography",
                href: "/assets/iconography/"
              }
            ]}
          />
        </Section>
      </Sections>
    </Main>
  </Page>
);
