import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import MultilineTextControl from "../components/MultilineTextControl";
import MultiSelectionControlGroup from "../components/MultiSelectionControlGroup";
import Paragraph from "../components/Paragraph";
import SingleSelectionControlGroup from "../components/SingleSelectionControlGroup";
import TextControl from "../components/TextControl";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

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
          errored
          hint="So that we can post the certificate"
          id="multiline-text-control-example"
          label="Address"
          size="48"
          validation="Enter address"
          verticalSize="8"
        />
      </div>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`SelectionControl`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`If you're using SelectionControl:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`use instead of drop downs`}</ListItem>
        <ListItem
        >{`allow the ability to choose that no options apply`}</ListItem>
        <ListItem>{`list items vertically`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <MultiSelectionControlGroup
          hint="Letting the participants know is a legal requirement"
          legend="How will the interview be recorded?"
          name="multi-selection-control-group-example"
          selectionControls={[
            {
              label: "It won't be",
              id: "multi-selection-control-group-example-no-record"
            },
            {
              label: "Tape recorder",
              id: "multi-selection-control-group-example-audio"
            },
            {
              label: "Video recorder",
              id: "multi-selection-control-group-example-video"
            },
            {
              label: "Hand-written notes",
              id: "multi-selection-control-group-example-hand-written-notes"
            }
          ]}
        />
      </div>
      <div className="Pages-exampleItem">
        <SingleSelectionControlGroup
          errored
          legend="Will there be refreshments?"
          name="single-selection-control-group-example"
          selectionControls={[
            {
              label: "No",
              id: "single-selection-control-group-example-no"
            },
            {
              label: "Yes",
              id: "single-selection-control-group-example-yes"
            }
          ]}
          validation="Select whether there will be refreshments"
        />
      </div>
    </div>
  </div>
);

export default Pages;
