import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import SubmitAction from "../components/SubmitAction";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
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
    <div className="Pages-headingOne">
      <HeadingOne>{`Link`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`This component should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`be used for linking to resources`}</ListItem>
        <ListItem
        >{`use a meaningful phrase that makes sense out of context`}</ListItem>
        <ListItem>{`use the default browser/device colours`}</ListItem>
      </UnorderedList>
      <div className="Pages-headingTwo">
        <HeadingTwo>{`Example of Links`}</HeadingTwo>
      </div>
      <div className="Pages-example">
        <HeadingOne>
          <Link href="http://example.org">{`Heading of section`}</Link>
        </HeadingOne>
        <div className="Pages-paragraph">
          <Paragraph>
            {`This is a paragraph, and it includes even more text to give a good
            representation of a more `}
            <Link href="http://example.org">{`average length paragraph`}</Link>
            {`.
            That way you can see more than one line wrapping.`}
          </Paragraph>
        </div>
      </div>
    </div>
  </div>
);

export default Pages;
