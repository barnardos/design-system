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
  <Page title="Iconography">
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
      <Title>Iconography</Title>
      <Paragraph>When using iconography you should:</Paragraph>
      <BulletedList>
        <ListItem>choose a flat graphic style</ListItem>
        <ListItem>
          use the{" "}
          <Link href="/standards/colour/#brand-colours">brand colours</Link>
        </ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/226">
          iconography research
        </Link>{" "}
        on GitHub.
      </Cite>
    </Main>
    <Pagination
      previous={{
        href: "/standards/images-and-videos",
        label: "Images and videos"
      }}
    />
  </Page>
);
