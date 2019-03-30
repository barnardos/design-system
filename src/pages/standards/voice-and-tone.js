import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Link from "../../components/DesignSystemLink";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Topic from "../../components/Topic";

export default () => (
  <Page title="Voice and tone">
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
      <Title>Voice and tone</Title>
      <Paragraph>
        When writing content be consistent, professional and effective to
        emotionally engage users in the Barnardo’s brand.
      </Paragraph>
      <Paragraph>
        To make content easy to find, use and understand you should:
      </Paragraph>
      <BulletedList>
        <ListItem>write in plain English</ListItem>
        <ListItem>write in an active voice</ListItem>
        <ListItem>choose words your audience would use</ListItem>
        <ListItem>write short, clear sentences</ListItem>
        <ListItem>use titles that are unique to the product</ListItem>
        <ListItem>have the most important information first</ListItem>
        <ListItem>check you can quickly tell what it’s about</ListItem>
        <ListItem>check spelling, links and citations are correct</ListItem>
        <ListItem>
          define acronyms and abbreviations the first time they’re used
        </ListItem>
        <ListItem>explain technical and professional terms</ListItem>
        <ListItem>optimise for search</ListItem>
      </BulletedList>
      <Paragraph>You should avoid:</Paragraph>
      <BulletedList>
        <ListItem>duplicating content</ListItem>
        <ListItem>a passive voice</ListItem>
        <ListItem>business or marketing speak</ListItem>
      </BulletedList>
      <Paragraph>When writing for young people you should:</Paragraph>
      <BulletedList>
        <ListItem>use an informal tone</ListItem>
        <ListItem>be practical and actionable</ListItem>
        <ListItem>lead with positive content</ListItem>
        <ListItem>
          avoid being authoritarian, for example provide ‘tips’ not ‘rules’
        </ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/510">
          voice and tone research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        next={{
          href: "/standards/reading-age",
          label: "Reading age"
        }}
      />
    </Main>
  </Page>
);
