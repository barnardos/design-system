import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import DesignSystemLayout from "../components/DesignSystemLayout";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";
import Demo from "../components/Demo";
import DemoItem from "../components/DemoItem";
import Figures from "../components/Figures";
import Figure from "../components/Figure";
import SpacingFigure from "../components/SpacingFigure";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Layout`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Layout`}</Title>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use multiples of 0.25rem (roughly 4px) for spacing`}</ListItem>
    </BulletedList>
    <Figures>
      <SpacingFigure />
    </Figures>
    <Paragraph>{`To create consistent layouts you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use plenty white space between elements`}</ListItem>
      <ListItem>{`limit the use of keylines`}</ListItem>
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
  </DesignSystemLayout>
);

export default Page;
