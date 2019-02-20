import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Page from "../../components/Page";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Content from "../../components/Content";

export default () => (
  <Page>
    <Helmet>
      <title>{`Preventing spam`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Patterns",
          href: "/patterns/"
        }
      ]}
    />
    <Main>
      <Content>
        <Title>{`Preventing spam`}</Title>
        <Paragraph>{`You could try:`}</Paragraph>
        <BulletedList>
          <ListItem>{`rate and connection limiting`}</ListItem>
          <ListItem>{`using honey pots`}</ListItem>
          <ListItem>{`transaction monitoring`}</ListItem>
        </BulletedList>
        <Paragraph>{`Avoid using CAPTCHAs, as they cause usability an accessibility issues.`}</Paragraph>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/411">{`preventing spam research`}</Link>
          {` on GitHub.`}
        </Cite>
      </Content>
    </Main>
  </Page>
);
