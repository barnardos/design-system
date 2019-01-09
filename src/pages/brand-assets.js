import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
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
      <title>{`Brand assets`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Brand assets`}</Title>
    <Paragraph>{`Download the:`}</Paragraph>
    <BulletedList>
      <ListItem>
        <Link href="https://github.com/barnardos/design-system/blob/master/src/components/Layout/favicon.ico">{`favicon (11kb)`}</Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/barnardos/design-system/blob/master/src/components/Header/logo.svg">{`logo (12kb)`}</Link>
      </ListItem>
    </BulletedList>
  </DesignSystemLayout>
);

export default Pages;
