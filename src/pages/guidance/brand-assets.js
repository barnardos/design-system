import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import BulletedList from "../../components/BulletedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Brand assets`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
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
  </Layout>
);

export default Pages;
