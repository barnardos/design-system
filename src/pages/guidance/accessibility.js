import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import Link from "../../components/Link";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Accessibility`}</title>
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
    <Title>{`Accessibility`}</Title>
    <Paragraph>
      {`When considering accessibility, follow the principle `}
      <GatsbyLink
        className="Link"
        to="/principles/#2-be-inclusive"
      >{`'be inclusive'`}</GatsbyLink>
      {`.`}
    </Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>
        {`use accessibility tools to test your work, for example `}
        <Link href="https://axe-core.org/">{`aXe`}</Link>
      </ListItem>
      <ListItem>{`make page titles unique and descriptive`}</ListItem>
      <ListItem>{`allow users to navigate only with a keyboard`}</ListItem>
      <ListItem>{`enable the viewport to be zoomed to at least 200%`}</ListItem>
    </UnorderedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/168">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
