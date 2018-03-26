import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import ListItem from "../components/ListItem";
import MultilineTextControl from "../components/MultilineTextControl";
import MultiSelectionControl from "../components/MultiSelectionControl";
import OptionControl from "../components/OptionControl";
import Paragraph from "../components/Paragraph";
import SinglelineTextControl from "../components/SinglelineTextControl";
import SingleSelectionControl from "../components/SingleSelectionControl";
import Submit from "../components/Submit";
import SubmitControls from "../components/SubmitControls";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div>
    <Helmet>
      <title>{`Requesting information`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Requesting information`}</Title>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`When requesting information from a user you should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`only ask for information you absolutely need`}</ListItem>
        <ListItem
        >{`mark the label with '(optional)' if you do ask for extra information`}</ListItem>
        <ListItem
        >{`avoid unnecessary words like 'Please' or 'Enter' in labels`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Text entry`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Use the components below for text entry. You should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>
          {`make the size appropriate to the amount of information requested`}
        </ListItem>
        <ListItem>{`use multiples of 8 for setting the size`}</ListItem>
        <ListItem>{`use hint text rather than placeholder text`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`SinglelineTextControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <SinglelineTextControl
          hint="As it appears on your ID."
          id="text-control-full-name-example"
          label="Full name"
          size="48"
        />
      </div>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <SinglelineTextControl
          id="text-control-post-code-example"
          label="Postcode (optional)"
          size="16"
        />
      </div>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`MultilineTextControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <MultilineTextControl
          hint="So that we can post the certificate."
          id="multiline-text-control-example"
          label="Address"
          size="48"
          verticalSize="4"
        />
      </div>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Selections`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Use the components below for selections. You should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`use them instead of drop downs`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`SingleSelectionControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <SingleSelectionControl
          legend="Will there be refreshments?"
          name="single-selection-control-group-example"
          options={[
            {
              label: "Yes",
              id: "single-selection-control-group-example-yes"
            },
            {
              label: "No",
              id: "single-selection-control-group-example-no"
            }
          ]}
        />
      </div>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`MultiSelectionControl`}</HeadingTwo>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`When using this component you should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`provide an option that excludes the others`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <MultiSelectionControl
          hint="Letting the participants know is a legal requirement."
          legend="How will the interview be recorded?"
          name="multi-selection-control-group-example"
          options={[
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
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`OptionControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <OptionControl
          label="Subscribe to mailing list"
          id="option-control-example"
        />
      </div>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Submitting`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`Use the component below to submit information.`}</Paragraph>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Submit`}</HeadingTwo>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`When using this component you should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`only use it once on each page`}</ListItem>
        <ListItem>{`use a verb, for example "Save"`}</ListItem>
        <ListItem>{`only use the Green colour`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-example">
      <Submit text="Send application" />
    </div>
    <div className="Pages-headingOne">
      <HeadingOne
      >{`Requesting, validating and submitting information`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Use the component below to request, validate and submit information.`}</Paragraph>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`SubmitControls`}</HeadingTwo>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`When using this component you should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`minimise the number of controls on each page`}</ListItem>
        <ListItem>{`group the control logically`}</ListItem>
        <ListItem>{`avoid indicators that show progress`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <SubmitControls
          errored
          controls={[
            {
              errored: true,
              control: "singlelineText",
              id: "submit-controls-single-line-text-example",
              label: "Name of the meal",
              validation: "Enter the name of the meal"
            },
            {
              control: "singleSelection",
              errored: true,
              hint:
                "Nut allergies can be dangerous. Choose 'Yes' if you're unsure.",
              id: "submit-controls-single-selection-example",
              legend: "Does the meal include nuts?",
              name: "submit-controls-single-selection-example",
              options: [
                {
                  label: "Yes",
                  id: "submit-controls-single-selection-control-example-yes"
                },
                {
                  label: "No",
                  id: "submit-controls-single-selection-control-example-no"
                }
              ],
              validation: "Select whether the meal contains nuts or not"
            },
            {
              control: "multiSelection",
              name: "submit-controls-multi-selection-control-example",
              legend: "What are the benefits of the meal?",
              options: [
                {
                  label: "None",
                  id: "submit-controls-multi-selection-control-example-none"
                },
                {
                  label: "Energising",
                  id:
                    "submit-controls-multi-selection-control-example-energising"
                },
                {
                  label: "Tasty",
                  id: "submit-controls-multi-selection-control-example-tasty"
                },
                {
                  label: "Low cost",
                  id: "submit-controls-multi-selection-control-example-low-cost"
                }
              ]
            }
          ]}
          submit={{
            text: "Continue"
          }}
          validation="You need to fix the following errors to continue:"
        />
      </div>
    </div>
  </div>
);

export default Pages;
