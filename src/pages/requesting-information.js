import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import AnyOfManyChoiceControl from "../components/AnyOfManyChoiceControl";
import ChoiceControl from "../components/ChoiceControl";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import ListItem from "../components/ListItem";
import MultilineTextControl from "../components/MultilineTextControl";
import OneOfManyChoiceControl from "../components/OneOfManyChoiceControl";
import Paragraph from "../components/Paragraph";
import SinglelineTextControl from "../components/SinglelineTextControl";
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
      <HeadingOne>{`Choices`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`Use the components below for choices. You should:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`use them instead of drop downs`}</ListItem>
        <ListItem>{`limit the options to eight or less`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`OneOfManyChoiceControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <OneOfManyChoiceControl
          choices={[
            {
              label: "Yes",
              id: "one-of-many-choice-control-example-yes"
            },
            {
              label: "No",
              id: "one-of-many-choice-control-example-no"
            },
            {
              label: "Maybe",
              id: "one-of-many-choice-control-example-maybe"
            }
          ]}
          legend="Will there be refreshments?"
          name="one-of-many-choice-control-example"
        />
      </div>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`AnyOfManyChoiceControl`}</HeadingTwo>
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
        <AnyOfManyChoiceControl
          choices={[
            {
              label: "It won't be",
              id: "any-of-many-choice-control-example-no-record"
            },
            {
              label: "Tape recorder",
              id: "any-of-many-choice-control-example-audio"
            },
            {
              label: "Video recorder",
              id: "any-of-many-choice-control-example-video"
            },
            {
              label: "Hand-written notes",
              id: "any-of-many-choice-control-example-hand-written-notes"
            }
          ]}
          hint="Letting the participants know is a legal requirement."
          legend="How will the interview be recorded?"
          name="any-of-many-choice-control-example"
        />
      </div>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`ChoiceControl`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <div className="Pages-exampleItem">
        <ChoiceControl
          label="Subscribe to mailing list"
          id="choice-control-example"
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
              control: "oneOfManyChoice",
              errored: true,
              hint:
                "Nut allergies can be dangerous. Only choose 'No' if you're completely sure.",
              id: "submit-controls-one-of-many-choice-example",
              legend: "Does the meal include nuts?",
              name: "submit-controls-one-of-many-choice-example",
              choices: [
                {
                  label: "Yes",
                  id: "submit-controls-one-of-many-choice-control-example-yes"
                },
                {
                  label: "No",
                  id: "submit-controls-one-of-many-choice-control-example-no"
                },
                {
                  label: "I'm not sure",
                  id:
                    "submit-controls-one-of-many-choice-control-example-unsure"
                }
              ],
              validation: "Select whether the meal contains nuts or not"
            },
            {
              control: "anyOfManyChoice",
              name: "submit-controls-any-of-many-choice-control-example",
              legend: "What are the benefits of the meal?",
              choices: [
                {
                  label: "None",
                  id: "submit-controls-any-of-many-choice-control-example-none"
                },
                {
                  label: "Energising",
                  id:
                    "submit-controls-any-of-many-choice-control-example-energising"
                },
                {
                  label: "Tasty",
                  id: "submit-controls-any-of-many-choice-control-example-tasty"
                },
                {
                  label: "Low cost",
                  id:
                    "submit-controls-any-of-many-choice-control-example-low-cost"
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
