import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Page from "../components/Page";
import Heading from "../components/Heading";
import Lede from "../components/Lede";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Title from "../components/Title";
import Main from "../components/Main";

export default () => (
  <Page title="Principles">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Principles</Title>
      <Lede>How we think about design.</Lede>
      <Sections>
        <Section>
          <Heading>Start small</Heading>
          <Paragraph>
            Put work in front of real people early and often.
          </Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>start with user needs</ListItem>
            <ListItem>avoid making assumptions</ListItem>
            <ListItem>design for the most constrained environment</ListItem>
            <ListItem>test regularly with users</ListItem>
            <ListItem>iterate based on evidence</ListItem>
            <ListItem>release early</ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Be inclusive</Heading>
          <Paragraph>Strive to support all who need the product.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>always consider accessibility</ListItem>
            <ListItem>priortise function over aesthetics</ListItem>
            <ListItem>provide legible and readable content</ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Keep it simple</Heading>
          <Paragraph>Do the hard work so the user doesn’t have to.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>provide the simplest journey for the majority</ListItem>
            <ListItem>only add complexity when justified</ListItem>
            <ListItem>hide underlying complex systems</ListItem>
            <ListItem>
              avoid deciding on a solution because ‘It’s always been this way’
            </ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Embrace digital</Heading>
          <Paragraph>Make the most of the medium’s benefits.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>be comfortable with change</ListItem>
            <ListItem>respect the environment’s constraints</ListItem>
            <ListItem>avoid print-based thinking</ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Be consistent</Heading>
          <Paragraph>Build trust and familiarity across products.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>follow the standards</ListItem>
            <ListItem>follow consistent language</ListItem>
            <ListItem>avoid reinventing the wheel</ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Be open</Heading>
          <Paragraph>Be part of the open digital community.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>share what you’re working on</ListItem>
            <ListItem>code in the open</ListItem>
            <ListItem>encourage collaboration</ListItem>
            <ListItem>learn from others</ListItem>
          </BulletedList>
        </Section>
      </Sections>
    </Main>
  </Page>
);
