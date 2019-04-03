import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Link from "../../components/GatsbyLink";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import StartLink from "../../components/StartLink";
import Title from "../../components/Title";

export default () => (
  <Page title="Start page">
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
      <Title>Start page</Title>
      <Paragraph>
        Use this pattern at the beginning of a transactional journey.
      </Paragraph>
      <Paragraph>You should provide information on:</Paragraph>
      <BulletedList>
        <ListItem>what the product is</ListItem>
        <ListItem>what it will provide</ListItem>
        <ListItem>how long it will take</ListItem>
        <ListItem>
          what is needed to have/know in order to complete the transaction
        </ListItem>
      </BulletedList>
      <Figures>
        <Figure caption="An example of a start page">
          <Title>Adoption</Title>
          <Paragraph>
            The first step towards adopting with Barnardo’s is making an
            enquiry.
          </Paragraph>
          <Paragraph>It’ll take about 5 minutes.</Paragraph>
          <Paragraph>You’ll need your:</Paragraph>
          <BulletedList>
            <ListItem>Email address</ListItem>
            <ListItem>Phone number</ListItem>
          </BulletedList>
          <StartLink />
          <Paragraph>
            Alternatively, you can call us on 0000 000 000 - our phone lines are
            open from Monday to Friday between 9am and 5pm.
          </Paragraph>
        </Figure>
      </Figures>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/287">
          start page research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        next={{
          href: "/patterns/gathering-information",
          label: "Gathering information"
        }}
      />
    </Main>
  </Page>
);
