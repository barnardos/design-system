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
  <Page title="Formatting">
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
      <Title>Formatting</Title>
      <Paragraph>When formatting your writing you should:</Paragraph>
      <BulletedList>
        <ListItem>use sentence case</ListItem>
        <ListItem>avoid use of bold</ListItem>
        <ListItem>use italics for general emphasis</ListItem>
        <ListItem>
          use bulleted lists when paragraphs have more than four points
        </ListItem>
        <ListItem>use words for single-figure numbers</ListItem>
        <ListItem>use single quotation marks for quoted speech</ListItem>
        <ListItem>only use the ampersand when space is tight</ListItem>
        <ListItem>write dates as 9 January 2018</ListItem>
        <ListItem>use the 12-hour clock, for example 10am and 2.30pm</ListItem>
        <ListItem>
          use noon and midnight instead of 12 noon and 12 midnight
        </ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/87">
          formatting research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/standards/reading-age",
          label: "Reading age"
        }}
        next={{
          href: "/standards/spelling",
          label: "Spelling"
        }}
      />
    </Main>
  </Page>
);
