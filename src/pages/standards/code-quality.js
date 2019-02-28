import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Page from "../../components/Page";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Topic from "../../components/Topic";

export default () => (
  <Page>
    <Helmet>
      <title>{`Code quality`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Standards",
          href: "/standards/"
        }
      ]}
    />
    <Main>
      <Topic>{`Development`}</Topic>
      <Title>{`Code quality`}</Title>
      <Paragraph>{`You should:`}</Paragraph>
      <BulletedList>
        <ListItem>
          {`format your code with `}
          <Link href="https://prettier.io/">{`Prettier`}</Link>
          {` using the default settings`}
        </ListItem>
        <ListItem>
          {`lint your JavaScript with `}
          <Link href="https://eslint.org/">{`ESLint`}</Link>
          {` using `}
          <Link href="https://github.com/barnardos/eslint-config-barnardos">{`eslint-config-barnardos`}</Link>
        </ListItem>
        <ListItem>
          {`lint your CSS with `}
          <Link href="https://stylelint.io/">{`stylelint`}</Link>
          {` using `}
          <Link href="https://github.com/barnardos/stylelint-config-barnardos">{`stylelint-config-barnardos`}</Link>
        </ListItem>
      </BulletedList>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/183">{`code quality research`}</Link>
        {` on GitHub.`}
      </Cite>
      <Pagination
        next={{
          href: "/standards/future-proof-code",
          label: "Future-proof code"
        }}
      />
    </Main>
  </Page>
);
