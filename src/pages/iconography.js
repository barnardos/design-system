import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Page from "../components/Page";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import BulletedList from "../components/BulletedList";
import Topic from "../components/Topic";

export default () => (
  <Page>
    <Helmet>
      <title>{`Iconography`}</title>
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
        <Topic>{`Assets`}</Topic>
        <Title>{`Iconography`}</Title>
        <Paragraph>{`When using iconography you should:`}</Paragraph>
        <BulletedList>
          <ListItem>{`choose a flat graphic style`}</ListItem>
          <ListItem>
            {`use the `}
            <Link href="/colour/#brand-colours">{`brand colours`}</Link>
          </ListItem>
        </BulletedList>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/226">{`iconography research`}</Link>
          {` on GitHub.`}
        </Cite>
      </Content>
    </Main>
  </Page>
);
