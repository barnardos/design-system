import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Demo from "../../components/Demo";
import DemoItem from "../../components/DemoItem";
import Link from "../../components/DesignSystemLink";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import SpacingFigure from "../../components/SpacingFigure";
import Title from "../../components/Title";
import Topic from "../../components/Topic";

export default () => (
  <Page title="Spacing and layout">
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
      <Topic>Design</Topic>
      <Title>Spacing and layout</Title>
      <Paragraph>
        You should use multiples of 0.25rem (roughly 4px) for spacing.
      </Paragraph>
      <Figures>
        <SpacingFigure />
      </Figures>
      <Paragraph>To create consistent layouts you should:</Paragraph>
      <BulletedList>
        <ListItem>use plenty white space between elements</ListItem>
        <ListItem>limit the use of keylines</ListItem>
      </BulletedList>
      <Figures>
        <Figure caption="Expands to two-thirds/one-third with gutter of 2rem">
          <Demo type="thirds">
            <DemoItem />
            <DemoItem />
          </Demo>
        </Figure>
        <Figure caption="Centered with maximum width of 28rem and shadow of 0.25rem">
          <Demo type="constrained">
            <DemoItem />
          </Demo>
        </Figure>
      </Figures>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/576">
          spacing and layout research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/standards/typography",
          label: "Typography"
        }}
      />
    </Main>
  </Page>
);
