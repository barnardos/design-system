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
      <Title>{`Preventing spam`}</Title>
      <Paragraph>{`You could try:`}</Paragraph>
      <BulletedList>
        <ListItem>
          <Link href="https://en.wikipedia.org/wiki/Rate_limiting">{`rate and connection limiting`}</Link>
        </ListItem>
        <ListItem>
          {`using `}
          <Link href="https://en.wikipedia.org/wiki/Honeypot_(computing)">{`honeypots`}</Link>
        </ListItem>
        <ListItem>{`transaction monitoring`}</ListItem>
      </BulletedList>
      <Paragraph>
        {`Avoid using `}
        <Link href="https://en.wikipedia.org/wiki/CAPTCHA">{`CAPTCHAs`}</Link>
        {`, as they cause usability an accessibility issues.`}
      </Paragraph>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/411">{`preventing spam research`}</Link>
        {` on GitHub.`}
      </Cite>
    </Main>
  </Page>
);
