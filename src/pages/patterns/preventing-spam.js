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

export default () => (
  <Page title="Preventing spam">
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
      <Title>Preventing spam</Title>
      <Paragraph>Use this pattern to prevent spam.</Paragraph>
      <Paragraph>You should try:</Paragraph>
      <BulletedList>
        <ListItem>
          <Link href="https://en.wikipedia.org/wiki/Rate_limiting">
            rate and connection limiting
          </Link>
        </ListItem>
        <ListItem>
          using{" "}
          <Link href="https://en.wikipedia.org/wiki/Honeypot_(computing)">
            honeypots
          </Link>
        </ListItem>
        <ListItem>transaction monitoring</ListItem>
      </BulletedList>
      <Paragraph>
        You should avoid using{" "}
        <Link href="https://en.wikipedia.org/wiki/CAPTCHA">CAPTCHAs</Link>, as
        they cause usability an accessibility issues.
      </Paragraph>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/411">
          preventing spam research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/patterns/filtering",
          label: "Filtering"
        }}
        next={{
          href: "/patterns/start-page",
          label: "Start page"
        }}
      />
    </Main>
  </Page>
);
