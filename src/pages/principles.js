import React from "react";

import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

import "./index.css";

const Pages = () => (
  <div>
    <Title>{`Principles`}</Title>
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
