import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Topic from "../../components/Topic";

export default () => (
  <Page title="Images and videos">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Standards",
          href: "/standards/"
        }
      ]}
    />
    <Main>
      <Topic>Design</Topic>
      <Title>Images and videos</Title>
      <Paragraph>When creating images and videos you should:</Paragraph>
      <BulletedList>
        <ListItem>have consent from all subjects</ListItem>
        <ListItem>have the subjects look into the camera</ListItem>
        <ListItem>use natural light in a real location</ListItem>
        <ListItem>avoid using actors</ListItem>
        <ListItem>avoid adding soundtracks to videos</ListItem>
      </BulletedList>
      <Paragraph>Images and videos should show:</Paragraph>
      <BulletedList>
        <ListItem>diversity</ListItem>
        <ListItem>strength</ListItem>
        <ListItem>resilience</ListItem>
        <ListItem>positivity</ListItem>
        <ListItem>genuineness</ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/227">
          images and videos research
        </Link>{" "}
        on GitHub.
      </Cite>
    </Main>
    <Pagination
      previous={{
        href: "/standards/spacing-and-layout",
        label: "Spacing and layout"
      }}
      next={{
        href: "/standards/iconography",
        label: "Iconography"
      }}
    />
  </Page>
);
