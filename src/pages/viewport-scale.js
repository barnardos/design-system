import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Viewport scale`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Viewport scale`}</Title>
    <Paragraph>{`The layout and typography can be proportionally scaled to maintain an optimal line length at any viewport size.`}</Paragraph>
    <Paragraph>{`The optimal line length of text is around:`}</Paragraph>
    <BulletedList>
      <ListItem>{`15–40 characters for short lines`}</ListItem>
      <ListItem>{`40–95 characters for body copy`}</ListItem>
    </BulletedList>
    <Paragraph>{`For example, you could scale the base of 1rem (roughly 16px):`}</Paragraph>
    <BulletedList>
      <ListItem>{`down to 93.75% to give a paragraph size and gutters of roughly 15px`}</ListItem>
      <ListItem>{`up to 106.25% to give a paragraph size and gutters of roughly 17px`}</ListItem>
      <ListItem>{`further up to 112.5% to give a paragraph size and gutters of roughly 18px`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/proportional-scale.css">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/1">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
