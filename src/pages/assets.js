import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Page from "../components/Page";
import BulletedList from "../components/BulletedList";
import ListItem from "../components/ListItem";
import Lede from "../components/Lede";
import Link from "../components/Link";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";
import Main from "../components/Main";

export default () => (
  <Page>
    <Helmet>
      <title>{`Assets`}</title>
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
      <Title>{`Assets`}</Title>
      <Lede>{`Downloadable resources and guidance on creating your own assets.`}</Lede>
      <Sections>
        <Section>
          <BulletedList>
            <ListItem>
              <Link href="/assets/web-assets/">{`Web assets`}</Link>
            </ListItem>
            <ListItem>
              <Link href="/assets/sketch-assets">{`Sketch assets`}</Link>
            </ListItem>
            <ListItem>
              <Link href="/assets/images-and-videos/">{`Images and videos`}</Link>
            </ListItem>
            <ListItem>
              <Link href="/assets/iconography/">{`Iconography`}</Link>
            </ListItem>
          </BulletedList>
        </Section>
      </Sections>
    </Main>
  </Page>
);
