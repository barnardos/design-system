import GatsbyLink from "gatsby-link";
import React from "react";

import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Principles`}</Title>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`The principles are to:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`start with the most constrained environment`}</ListItem>
        <ListItem>{`focus on functional considerations`}</ListItem>
        <ListItem>{`maintain consistency`}</ListItem>
        <ListItem>{`work in the open`}</ListItem>
      </UnorderedList>
    </div>
  </div>
);

export default Pages;
