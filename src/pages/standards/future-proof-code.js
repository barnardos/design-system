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
      <title>{`Future-proof code`}</title>
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
      <Title>{`Future-proof code`}</Title>
      <Paragraph>{`You should transpile modern standards for:`}</Paragraph>
      <BulletedList>
        <ListItem>
          {`JavaScript with `}
          <Link href="https://babeljs.io/docs/en/babel-preset-env">{`babel-preset-env`}</Link>
        </ListItem>
        <ListItem>
          {`CSS with `}
          <Link href="https://preset-env.cssdb.org/">{`postcss-preset-env`}</Link>
        </ListItem>
      </BulletedList>
      <Paragraph>
        {`You should use the `}
        <Link href="https://github.com/browserslist/browserslist">{`browserslist`}</Link>
        {` defaults to configure both.`}
      </Paragraph>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/585">{`future-proof code research`}</Link>
        {` on GitHub.`}
      </Cite>
      <Pagination
        previous={{
          href: "/standards/code-quality",
          label: "Code quality"
        }}
        next={{
          href: "/standards/performance",
          label: "Performance"
        }}
      />
    </Main>
  </Page>
);
