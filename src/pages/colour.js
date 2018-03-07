import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Swatches from "../components/Swatches";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Colour`}</Title>
    </div>

    <div className="Pages-paragraph">
      <Paragraph>{`The colour palette is:`}</Paragraph>
    </div>
    <Swatches />
    <div className="Pages-headingOne">
      <HeadingOne>{`Semantics`}</HeadingOne>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem
        >{`Red - destructive actions like deleting or removing`}</ListItem>
        <ListItem
        >{`Orange - cautionary actions like loading or warning`}</ListItem>
        <ListItem
        >{`Green - positive actions like submitting or continuing`}</ListItem>
      </UnorderedList>
    </div>
  </div>
);

export default Pages;
