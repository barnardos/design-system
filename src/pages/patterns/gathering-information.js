import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";

export const items = [
  {
    text: "Asking for names",
    href: "/patterns/gathering-information/#asking-for-names"
  }
];

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
      <Contents>
        <ContentsMenu items={items} />
        <Content>
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
          <Heading>Asking for names</Heading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>only ask for names when absolutely needed</ListItem>
            <ListItem>support all characters users may need to enter</ListItem>
          </BulletedList>
          <Paragraph>You should avoid:</Paragraph>
          <BulletedList>
            <ListItem>asking for title</ListItem>
            <ListItem>asking for middle name</ListItem>
            <ListItem>asking for gender</ListItem>
            <ListItem>
              terms like ’given name’, ’forename’, and ’surname’
            </ListItem>
          </BulletedList>
          <Figures>
            <Figure caption="Where possible use a single name field to accommodate the broadest range of name types.">
              <TextInput
                id="text-input-full-name-example"
                label="Full name"
                size={48}
              />
            </Figure>
          </Figures>
          <Figures>
            <Figure caption="If your product needs to reliably extract first name and last name, use multiple name fields.">
              <TextInput
                id="text-input-first-name-example"
                label="First name"
                size={48}
              />
              <TextInput
                id="text-input-last-name-example"
                label="Last name"
                size={48}
              />
            </Figure>
          </Figures>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/issues/404">
              asking for names research
            </Link>{" "}
            on GitHub.
          </Cite>

          <Pagination
            previous={{
              href: "/patterns/start-page",
              label: "Start page"
            }}
            next={{
              href: "/patterns/preventing-spam",
              label: "Preventing spam"
            }}
          />
        </Content>
      </Contents>
    </Main>
  </Page>
);
