import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Getting started`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Getting started`}</Title>
    <Paragraph>
      {`The Design System is a set of `}
      <GatsbyLink to="/principles/">{`Principles`}</GatsbyLink>
      {` and `}
      <GatsbyLink to="/guidance/">{`Guidance`}</GatsbyLink>
      {`.`}
    </Paragraph>
    <Paragraph
    >{`The principles are how you should think about designing your product.`}</Paragraph>
    <Paragraph>{`The guidance includes:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`rules you should follow`}</ListItem>
      <ListItem>{`suggestions on how you could apply those rules
`}</ListItem>
      <ListItem>{`examples of these rules and suggestions in action`}</ListItem>
    </UnorderedList>
    <Paragraph
    >{`The Design System is based on research, which you'll find linked to throughout.`}</Paragraph>
    <Paragraph
    >{`It solves the common problems you may encounter when creating your product, so you can focus on the problems unique to it.`}</Paragraph>
    <Paragraph
    >{`This provides consistency across Barnardo's products and familiarity for service users.`}</Paragraph>
    <Paragraph
    >{`When creating your product, try to adopt as much of the Design System as possible. Depending on your needs and constraints, you may not be able to adopt all of it. It's not all or nothing.`}</Paragraph>
    <Paragraph>
      {`If something isn't in the Design System, don't let it stop you. Design a solution, test it and use it in your product. If you think it solves a common problem, `}
      <Link href="https://github.com/barnardos/design-system">{`share it with us`}</Link>
      {`.`}
    </Paragraph>
    <Paragraph>
      {`You can stay up to date with the latest changes by following us on `}
      <Link href="https://barnardos.facebook.com/groups/design.system/">{`Workspace`}</Link>
      {`.`}
    </Paragraph>
  </div>
);

export default Pages;