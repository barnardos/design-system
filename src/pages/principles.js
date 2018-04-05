import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Principles`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <Title>{`Principles`}</Title>
    <Paragraph>{`The principles are to:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`start with the most constrained environment`}</ListItem>
      <ListItem>{`focus on functional considerations`}</ListItem>
      <ListItem>{`maintain consistency`}</ListItem>
      <ListItem>{`work in the open`}</ListItem>
    </UnorderedList>
  </div>
);

export default Pages;
