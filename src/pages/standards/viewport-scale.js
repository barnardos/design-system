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
import Topic from "../../components/Topic";

export default () => (
  <Page title="Viewport scale">
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
      <Title>Viewport scale</Title>
      <Paragraph>
        The layout and type can be proportionally scaled to maintain an optimal
        line length at any viewport size.
      </Paragraph>
      <Paragraph>
        For example, you could scale the base of 1rem (roughly 16px):
      </Paragraph>
      <BulletedList>
        <ListItem>
          down to 93.75% to give a paragraph size and gutters of roughly 15px
        </ListItem>
        <ListItem>
          up to 106.25% to give a paragraph size and gutters of roughly 17px
        </ListItem>
        <ListItem>
          further up to 112.5% to give a paragraph size and gutters of roughly
          18px
        </ListItem>
      </BulletedList>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Site/viewport-scale.css">
          viewport scale code
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/barnardos/design-system/issues/1">
          viewport scale research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/standards/testing",
          label: "Testing"
        }}
      />
    </Main>
  </Page>
);
