import Helmet from "react-helmet";
import React from "react";

import AnyOfManyChoiceControl from "../../components/AnyOfManyChoiceControl";
import Breadcrumbs from "../../components/Breadcrumbs";
import ChoiceControl from "../../components/ChoiceControl";
import CurrencyControl from "../../components/CurrencyControl";
import DateControl from "../../components/DateControl";
import HeadingOne from "../../components/HeadingOne";
import HeadingTwo from "../../components/HeadingTwo";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import MultilineTextControl from "../../components/MultilineTextControl";
import OneOfManyChoiceControl from "../../components/OneOfManyChoiceControl";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl";
import Submit from "../../components/Submit";
import SubmitControls from "../../components/SubmitControls";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout type="twoThirds">
    <Helmet>
      <title>{`Requesting information`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
        }
      ]}
    />
    <Title>{`Requesting information`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Text entry",
          to: "#text-entry"
        },
        {
          level: 2,
          text: "SingleLineTextControl",
          to: "#singlelinetextcontrol"
        },
        {
          level: 2,
          text: "MultiLineTextControl",
          to: "#multilinetextcontrol"
        },
        {
          level: 1,
          text: "Data entry",
          to: "#data-entry"
        },
        {
          level: 2,
          text: "CurrencyControl",
          to: "#currencycontrol"
        },
        {
          level: 2,
          text: "DateControl",
          to: "#datecontrol"
        },
        {
          level: 1,
          text: "Choices",
          to: "#choices"
        },
        {
          level: 2,
          text: "OneOfManyChoiceControl",
          to: "#oneofmanychoicecontrol"
        },
        {
          level: 2,
          text: "AnyOfManyChoiceControl",
          to: "#anyofmanychoicecontrol"
        },
        {
          level: 2,
          text: "ChoiceControl",
          to: "#choicecontrol"
        },
        {
          level: 1,
          text: "Submitting",
          to: "#submitting"
        },
        {
          level: 2,
          text: "Submit",
          to: "#submit"
        },
        {
          level: 1,
          text: "Validating and submitting",
          to: "#validating-and-submitting"
        },
        {
          level: 2,
          text: "SubmitControls",
          to: "#submitcontrols"
        }
      ]}
    />
    <Paragraph>{`When requesting information you should:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`only ask for information which is absolutely needed`}</ListItem>
      <ListItem>{`ask for required information first`}</ListItem>
      <ListItem
      >{`add '(optional)' to labels of information that isn't required`}</ListItem>
      <ListItem>{`group related requests for information`}</ListItem>
      <ListItem
      >{`avoid unnecessary words like 'Please' or 'Enter' in labels`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`Text entry`}</HeadingOne>
    <Paragraph
    >{`Use the components below for text entry. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>
        {`make the size appropriate to the amount of information requested`}
      </ListItem>
      <ListItem>{`use multiples of 8 for setting the size`}</ListItem>
      <ListItem>{`use hint text rather than placeholder text`}</ListItem>
    </UnorderedList>
    <HeadingTwo>{`SinglelineTextControl`}</HeadingTwo>
    <div className="Pages-example">
      <SinglelineTextControl
        hint="So that we can send you the certificate."
        id="text-control-email-example"
        label="Email"
        size={48}
      />
    </div>
    <div className="Pages-example">
      <SinglelineTextControl
        id="text-control-post-code-example"
        label="Postcode (optional)"
        size={16}
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SinglelineTextControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingTwo>{`MultilineTextControl`}</HeadingTwo>
    <div className="Pages-example">
      <MultilineTextControl
        id="multiline-text-control-example"
        label="What's on your mind?"
        size={48}
        verticalSize={4}
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/MultilineTextControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/65">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Data entry`}</HeadingOne>
    <Paragraph>{`Use the components below for specific data.`}</Paragraph>
    <HeadingTwo>{`CurrencyControl`}</HeadingTwo>
    <div className="Pages-example">
      <CurrencyControl
        currency="£"
        id="currency-control-example"
        label="Amount"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CurrencyControl">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/160">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingTwo>{`DateControl`}</HeadingTwo>
    <Paragraph>{`Use this component for date entry. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use it instead of dropdowns`}</ListItem>
      <ListItem>{`allow flexible data entry, for
    example 01 and 1`}</ListItem>
      <ListItem>{`trigger a numeric keyboard when available`}</ListItem>
      <ListItem>{`avoid auto-tabbing between fields`}</ListItem>
      <ListItem>{`avoid using calendar pickers`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <DateControl id="date-control-example" label="Date of birth" />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DateControl">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/75">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Choices`}</HeadingOne>
    <Paragraph>{`Use the components below for choices. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use them instead of dropdowns`}</ListItem>
      <ListItem>{`limit the options to eight or less`}</ListItem>
    </UnorderedList>
    <HeadingTwo>{`OneOfManyChoiceControl`}</HeadingTwo>
    <div className="Pages-example">
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
        id="one-of-many-choice-control-example"
        legend="Will there be refreshments?"
        name="one-of-many-choice-control-example"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/OneOfManyChoiceControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingTwo>{`AnyOfManyChoiceControl`}</HeadingTwo>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`provide an option that excludes the others`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
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
        id="any-of-many-choice-control-example"
        legend="How will the interview be recorded?"
        name="any-of-many-choice-control-example"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AnyOfManyChoiceControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingTwo>{`ChoiceControl`}</HeadingTwo>
    <div className="Pages-example">
      <ChoiceControl
        id="choice-control-example"
        label="Subscribe to mailing list"
        name="choice-control-example"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ChoiceControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Submitting`}</HeadingOne>
    <Paragraph>{`Use the component below to submit information.`}</Paragraph>
    <HeadingTwo>{`Submit`}</HeadingTwo>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use it once on each page`}</ListItem>
      <ListItem>{`use a verb, for example save`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Submit text="Send application" />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Submit">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/33">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Validating and submitting`}</HeadingOne>
    <Paragraph
    >{`Use the component below to validate and submit information.`}</Paragraph>
    <HeadingTwo>{`SubmitControls`}</HeadingTwo>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`minimise the number of controls on each page`}</ListItem>
      <ListItem>{`group the control logically`}</ListItem>
      <ListItem>{`avoid indicators that show progress`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <SubmitControls
        controls={[
          {
            invalid: true,
            control: "singlelineText",
            id: "submit-controls-single-line-text-example",
            label: "Name of the meal",
            size: 48,
            validation: "Enter the name of the meal"
          },
          {
            control: "oneOfManyChoice",
            invalid: true,
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
                id: "submit-controls-one-of-many-choice-control-example-unsure"
              }
            ],
            validation: "Select whether the meal contains nuts or not"
          },
          {
            control: "anyOfManyChoice",
            id: "submit-controls-any-of-many-choice-control-example",
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
        invalid
        submit={{
          text: "Continue"
        }}
        validation="You need to fix the following errors to continue:"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SubmitControls">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/67">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
