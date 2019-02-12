import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Spelling`}</title>
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
        <Title>{`Spelling`}</Title>
        <BulletedList>
          <ListItem>{`Barnardo’s (always with apostrophe)`}</ListItem>
          <ListItem>{`email (no hyphen)`}</ListItem>
          <ListItem>{`http:// (is not required, begin web addresses with www)`}</ListItem>
          <ListItem>{`online (one word)`}</ListItem>
          <ListItem>{`per cent (should be spelt in words, unless used in tables)`}</ListItem>
          <ListItem>{`postcode (no hyphen)`}</ListItem>
          <ListItem>{`website (no hyphen)`}</ListItem>
        </BulletedList>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/87">{`spelling research`}</Link>
          {` on GitHub.`}
        </Cite>
        <Pagination
          previous={{
            href: "/style",
            label: "Style"
          }}
        />
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
