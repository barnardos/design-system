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
  <Page title="Maintenance">
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
      <Topic>Writing</Topic>
      <Title>Maintenance</Title>
      <Paragraph>
        When content is published, you should review it at a later date to
        check:
      </Paragraph>
      <BulletedList>
        <ListItem>people are using it</ListItem>
        <ListItem>it’s still in the best place</ListItem>
        <ListItem>it’s factually accurate</ListItem>
        <ListItem>external links still work</ListItem>
        <ListItem>the language is still correct</ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/510">
          maintenance research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/standards/spelling",
          label: "Spelling"
        }}
      />
    </Main>
  </Page>
);
