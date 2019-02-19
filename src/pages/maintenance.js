import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Maintenance`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Content>
        <Topic>{`Writing standards`}</Topic>
        <Title>{`Maintenance`}</Title>
        <Paragraph>{`When content is published, you should review it at a later date to check:`}</Paragraph>
        <BulletedList>
          <ListItem>{`people are using it`}</ListItem>
          <ListItem>{`it’s still in the best place`}</ListItem>
          <ListItem>{`it’s factually accurate`}</ListItem>
          <ListItem>{`external links still work`}</ListItem>
          <ListItem>{`the language is still correct`}</ListItem>
        </BulletedList>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/510">{`maintenance research`}</Link>
          {` on GitHub.`}
        </Cite>
        <Pagination
          previous={{
            href: "/spelling",
            label: "Spelling"
          }}
        />
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
