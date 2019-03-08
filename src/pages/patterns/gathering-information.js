import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Page from "../../components/Page";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Main from "../../components/Main";

export default () => (
  <Page title="Gathering information">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Patterns",
          href: "/patterns/"
        }
      ]}
    />
    <Main>
      <Title>Gathering information</Title>
      <Paragraph>
        Use this pattern to gather information from young people.
      </Paragraph>
      <Paragraph>You should:</Paragraph>
      <BulletedList>
        <ListItem>explain why information is being asked for</ListItem>
        <ListItem>explain who will see any personal information</ListItem>
        <ListItem>allow them to remain anonymous where possible</ListItem>
        <ListItem>ensure they have privacy and are safeguarded</ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/294">
          gathering information research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/patterns/asking-for-names",
          label: "Asking for names"
        }}
        next={{
          href: "/patterns/filtering",
          label: "Filtering"
        }}
      />
    </Main>
  </Page>
);
