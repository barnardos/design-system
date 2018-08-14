import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Film and photography`}</title>
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
    <Title>{`Film and photography`}</Title>
    <Paragraph>{`When shooting film and photography you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`have consent from all subjects`}</ListItem>
      <ListItem>{`have the subjects look into the camera`}</ListItem>
      <ListItem>{`use natural light in a real location`}</ListItem>
      <ListItem>{`avoid using actors`}</ListItem>
    </UnorderedList>
    <Paragraph>{`Your film and photography should show:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`diversity`}</ListItem>
      <ListItem>{`strength`}</ListItem>
      <ListItem>{`resilience`}</ListItem>
      <ListItem>{`positivity`}</ListItem>
      <ListItem>{`genuineness`}</ListItem>
    </UnorderedList>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/227">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
