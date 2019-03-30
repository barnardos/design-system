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
  <Page title="Testing">
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
      <Topic>Accessibility</Topic>
      <Title>Testing</Title>
      <Paragraph>
        Test your product using{" "}
        <Link href="https://developers.google.com/web/tools/lighthouse/">
          Lighthouse
        </Link>
        .
      </Paragraph>
      <Paragraph>You should:</Paragraph>
      <ListItem>pass the automated testing checks</ListItem>
      <ListItem>
        run through their ‘additional items to manually check’
      </ListItem>
      <Paragraph>You should also:</Paragraph>
      <BulletedList>
        <ListItem>make page titles unique and descriptive</ListItem>
        <ListItem>
          avoid relying on colour or icons to convey important information
        </ListItem>
        <ListItem>enable the viewport to be zoomed to at least 200%</ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/168">
          testing research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        next={{
          href: "/standards/viewport-scale",
          label: "Viewport scale"
        }}
      />
    </Main>
  </Page>
);
