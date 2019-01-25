import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

const Page = () => (
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

    <Main>
      <Content>
        <Topic>{`Assets`}</Topic>
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
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
