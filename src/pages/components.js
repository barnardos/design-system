import Link from "gatsby-link";
import React from "react";

import Title from "../components/Title";
import SubmitAction from "../components/SubmitAction";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

import "./index.css";

const Pages = () => (
  <div>
    <Link className="Pages-home" to="/">{`Home`}</Link>
    <div className="Pages-title">
      <Title>{`Components`}</Title>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`SubmitAction`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`When incorporating SubmitActions, use only:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`one on each page`}</ListItem>
        <ListItem>{`for moving through a transaction`}</ListItem>
        <ListItem>{`informative text for example "Save"`}</ListItem>
      </UnorderedList>

      <div className="Pages-headingTwo">
        <HeadingTwo>{`Example of an SubmitAction`}</HeadingTwo>
      </div>
      <div className="Pages-example">
        <SubmitAction text="Save" />
      </div>
    </div>
  </div>
);

export default Pages;
