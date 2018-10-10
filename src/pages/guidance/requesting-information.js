import Helmet from "react-helmet";
import React from "react";

import AnyOfManyChoiceControl from "../../components/AnyOfManyChoiceControl";
import Breadcrumbs from "../../components/Breadcrumbs";
import ChoiceControl from "../../components/ChoiceControl";
import ConditionalControls from "../../components/ConditionalControls";
import CurrencyControl from "../../components/CurrencyControl";
import DateControl from "../../components/DateControl";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import MultilineTextControl from "../../components/MultilineTextControl";
import OneOfManyChoiceControl from "../../components/OneOfManyChoiceControl";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl";
import Submit from "../../components/Submit";
import SubmitControls from "../../components/SubmitControls";
import SubmitSearchControl from "../../components/SubmitSearchControl";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
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
          to: "/guidance/requesting-information/#text-entry"
        },
        {
          level: 2,
          text: "Single-Line Text Control",
          to: "/guidance/requesting-information/#singleline-text-control"
        },
        {
          level: 2,
          text: "Multi-Line Text Control",
          to: "/guidance/requesting-information/#multiline-text-control"
        },
        {
          level: 2,
          text: "Currency Control",
          to: "/guidance/requesting-information/#currency-control"
        },
        {
          level: 2,
          text: "Date Control",
          to: "/guidance/requesting-information/#date-control"
        },
        {
          level: 1,
          text: "Choices",
          to: "/guidance/requesting-information/#choices"
        },
        {
          level: 2,
          text: "One-Of-Many Choice Control",
          to: "/guidance/requesting-information/#oneofmany-choice-control"
        },
        {
          level: 2,
          text: "Any-Of-Many Choice Control",
          to: "/guidance/requesting-information/#anyofmany-choice-control"
        },
        {
          level: 2,
          text: "Choice Control",
          to: "/guidance/requesting-information/#choice-control"
        },
        {
          level: 2,
          text: "Conditional Controls",
          to: "/guidance/requesting-information/#conditional-controls"
        },
        {
          level: 1,
          text: "Validating and submitting",
          to: "/guidance/requesting-information/#validating-and-submitting"
        },
        {
          level: 2,
          text: "Submit",
          to: "/guidance/requesting-information/#submit"
        },
        {
          level: 2,
          text: "Submit Controls",
          to: "/guidance/requesting-information/#submit-controls"
        },
        {
          level: 2,
          text: "Submit Search Control",
          to: "/guidance/requesting-information/#submit-search-control"
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
    <Heading>{`Text entry`}</Heading>
    <Paragraph
    >{`Use the components below for text entry. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>
        {`make the size appropriate to the amount of information requested`}
      </ListItem>
      <ListItem>{`use multiples of 8 for setting the size`}</ListItem>
      <ListItem>{`use hint text rather than placeholder text`}</ListItem>
    </UnorderedList>
    <Subheading>{`Single-Line Text Control`}</Subheading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/65">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Multi-Line Text Control`}</Subheading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/65">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Currency Control`}</Subheading>
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
    <Subheading>{`Date Control`}</Subheading>
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
    <Heading>{`Choices`}</Heading>
    <Paragraph>{`Use the components below for choices. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use them instead of dropdowns`}</ListItem>
      <ListItem>{`limit the options to eight or less`}</ListItem>
    </UnorderedList>
    <Subheading>{`One-Of-Many Choice Control`}</Subheading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Any-Of-Many Choice Control`}</Subheading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Choice Control`}</Subheading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Conditional Controls`}</Subheading>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <ConditionalControls
          trigger={
            <OneOfManyChoiceControl
              choices={[
                {
                  label: "Yes",
                  id: "conditional-controls-one-of-many-control-example-yes"
                },
                {
                  label: "No",
                  id: "conditional-controls-one-of-many-control-example-no"
                }
              ]}
              id="conditional-controls-one-of-many-choice-control-example"
              legend="Can we email you?"
              name="conditional-controls-one-of-many-choice-control-example"
            />
          }
          target={
            <SinglelineTextControl
              id="conditional-control-singleline-text-control-example"
              label="Email"
              size={48}
            />
          }
        />
        <figcaption className="Pages-figureCaption">{`Select a choice to reveal`}</figcaption>
      </figure>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/86">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Validating and submitting`}</Heading>
    <Paragraph
    >{`Use the components below to validate and submit information.`}</Paragraph>
    <Subheading>{`Submit`}</Subheading>
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

    <Subheading>{`Submit Controls`}</Subheading>
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
    <Subheading>{`Submit Search Control`}</Subheading>
    <div className="Pages-example">
      <div
        style={{
          paddingBottom: "4rem",
          position: "relative"
        }}
      >
        <SubmitSearchControl />
      </div>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SubmitSearchControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
