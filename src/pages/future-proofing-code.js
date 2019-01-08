import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Layout from "../components/Layout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Future-proofing code`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Future-proofing code`}</Title>
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
      <Link href="https://github.com/barnardos/design-system/issues/183">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
