import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import MultilineTextControl from "../components/MultilineTextControl";
import Paragraph from "../components/Paragraph";
import TextControl from "../components/TextControl";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";
import SubmitAction from "../components/SubmitAction/index";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Gathering input`}</Title>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`TextControl`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`If you're using TextControl:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`only ask for information you absolutely need`}</ListItem>
        <ListItem
        >{`if you do ask for optional information, mark the label with '(optional)'`}</ListItem>
        <ListItem>
          {`make it a length that's appropriate for the amount of information needed `}
        </ListItem>
        <ListItem>{`use the 8px scale for setting the length`}</ListItem>
        <ListItem
        >{`avoid unnecessary words like 'Please' or 'Enter' in labels`}</ListItem>
        <ListItem
        >{`use hint text above the input, rather than using placeholder text `}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <TextControl id="text-control-example" label="Full name" size="48" />
      </div>
      <div className="Pages-exampleItem">
        <MultilineTextControl
          hint="So that we can post the certificate"
          id="multiline-text-control-example"
          label="Address"
          size="48"
          verticalSize="8"
          errored
          validation="Enter address as it is required"
        />
      </div>
      <div className="Pages-exampleItem">
        <SubmitAction text="Continue" />
      </div>
    </div>
  </div>
);

export default Pages;
