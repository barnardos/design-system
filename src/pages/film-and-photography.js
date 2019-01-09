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

import "./index.css";

const Pages = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Film and photography`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Film and photography`}</Title>
    <Paragraph>{`When shooting film and photography you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`have consent from all subjects`}</ListItem>
      <ListItem>{`have the subjects look into the camera`}</ListItem>
      <ListItem>{`use natural light in a real location`}</ListItem>
      <ListItem>{`avoid using actors`}</ListItem>
    </BulletedList>
    <Paragraph>{`Your film and photography should show:`}</Paragraph>
    <BulletedList>
      <ListItem>{`diversity`}</ListItem>
      <ListItem>{`strength`}</ListItem>
      <ListItem>{`resilience`}</ListItem>
      <ListItem>{`positivity`}</ListItem>
      <ListItem>{`genuineness`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/227">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Pages;
