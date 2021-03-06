import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Demo from "../../components/Demo";
import DemoItem from "../../components/DemoItem";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
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
      <Heading>Spacing</Heading>
      <Paragraph>
        You should use multiples of 0.25rem (roughly 4px) for spacing.
      </Paragraph>
      <Figures>
        <SpacingFigure />
      </Figures>
      <Heading>Layout</Heading>
      <Paragraph>To create fluid and responsive layouts you should:</Paragraph>
      <BulletedList>
        <ListItem>start with the most constrained environment</ListItem>
        <ListItem>
          define how components react as the viewport size changes
        </ListItem>
        <ListItem>use plenty white space</ListItem>
        <ListItem>avoid fixed column grids</ListItem>
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
        next={{
          href: "/standards/images-and-videos",
          label: "Images and videos"
        }}
      />
    </Main>
  </Page>
);
