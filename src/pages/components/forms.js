import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import CheckBox from "../../components/CheckBox";
import CheckBoxes from "../../components/CheckBoxes";
import Cite from "../../components/Cite";
import Command from "../../components/Command";
import Conditional from "../../components/Conditional";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import CurrencyInput from "../../components/CurrencyInput";
import DateInput from "../../components/DateInput";
import ErrorSummary from "../../components/ErrorSummary";
import Example from "../../components/Example";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import RadioButtons from "../../components/RadioButtons";
import Subheading from "../../components/Subheading";
import Submit from "../../components/Submit";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";

export const items = [
  {
    text: "Text inputs",
    href: "/components/forms/#text-inputs",
    items: [
      {
        text: "Text Input",
        href: "/components/forms/#text-input"
      },
      {
        text: "Text Area",
        href: "/components/forms/#text-area"
      },
      {
        text: "Date Input",
        href: "/components/forms/#date-input"
      },
      {
        text: "Currency Input",
        href: "/components/forms/#currency-input"
      }
    ]
  },
  {
    text: "Choices",
    href: "/components/forms/#choices",
    items: [
      {
        text: "Check Box",
        href: "/components/forms/#check-box"
      },
      {
        text: "Check Boxes",
        href: "/components/forms/#check-boxes"
      },
      {
        text: "Radio Buttons",
        href: "/components/forms/#radio-buttons"
      },
      {
        text: "Conditional",
        href: "/components/forms/#conditional"
      }
    ]
  },
  {
    text: "Actions",
    href: "/components/forms/#actions",
    items: [
      {
        text: "Command",
        href: "/components/forms/#command"
      },
      {
        text: "Submit",
        href: "/components/forms/#submit"
      }
    ]
  },
  {
    text: "Validation",
    href: "/components/forms/#validation",
    items: [
      {
        text: "Error Summary",
        href: "/components/forms/#error-summary"
      }
    ]
  }
];

export default () => (
  <Page title="Forms">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Components",
          href: "/components/"
        }
      ]}
    />
    <Main>
      <Title>Forms</Title>
      <Contents>
        <ContentsMenu items={items} />
        <Content>
          <Paragraph>When gathering information you should:</Paragraph>
          <BulletedList>
            <ListItem>
              only ask for information which is absolutely needed
            </ListItem>
            <ListItem>ask for required information first</ListItem>
            <ListItem>
              group related fields together, for example ‘Email’ and ‘Phone’
            </ListItem>
            <ListItem>
              add ‘(optional)’ to labels of information that isn’t required
            </ListItem>
            <ListItem>
              avoid unnecessary words like ‘Please’ or ‘Enter’ in labels
            </ListItem>
            <ListItem>minimise the number of fields on each page</ListItem>
            <ListItem>avoid manipulative design patterns</ListItem>
          </BulletedList>
          <Heading>Text inputs</Heading>
          <Paragraph>Use the components below for text entry.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>
              make the size appropriate to the amount of information requested
            </ListItem>
            <ListItem>use multiples of 8 for setting the size</ListItem>
            <ListItem>use hint text rather than placeholder text</ListItem>
          </BulletedList>
          <Subheading>Text Input</Subheading>
          <Example>
            <TextInput
              hint="So that we can send you the certificate."
              id="text-input-email-example"
              label="Email"
              size={48}
            />
          </Example>
          <Example>
            <TextInput
              id="text-input-post-code-example"
              label="Postcode (optional)"
              size={16}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/TextInput">
              Text Input code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/65">
              Text Input research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Text Area</Subheading>
          <Example>
            <TextArea
              id="text-area-example"
              label="What’s on your mind?"
              size={48}
              verticalSize={4}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/TextArea">
              Text Area code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/65">
              Text Area research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Date Input</Subheading>
          <Paragraph>Use this component for date entry.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>use it instead of dropdowns</ListItem>
            <ListItem>allow flexible data entry, for example 01 and 1</ListItem>
            <ListItem>trigger a numeric keyboard when available</ListItem>
            <ListItem>avoid auto-tabbing between fields</ListItem>
            <ListItem>avoid using calendar pickers</ListItem>
          </BulletedList>
          <Example>
            <DateInput id="date-input-example" legend="Date of birth" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DateInput">
              Date Input code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/75">
              Date Input research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Currency Input</Subheading>
          <Example>
            <CurrencyInput
              currency="£"
              id="currency-input-example"
              label="Amount"
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CurrencyInput">
              Currency Input code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/160">
              Currency Input research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Choices</Heading>
          <Paragraph>Use the components below for choices.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>use them instead of dropdowns</ListItem>
            <ListItem>limit the options to eight or less</ListItem>
          </BulletedList>
          <Subheading>Check Box</Subheading>
          <Example>
            <CheckBox
              id="check-box-example"
              label="Subscribe to mailing list"
              name="check-box-example"
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CheckBox">
              Check Box code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/68">
              Check Box research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Check Boxes</Subheading>
          <Paragraph>
            When using this component you should provide an option that excludes
            the others.
          </Paragraph>
          <Example>
            <CheckBoxes
              items={[
                {
                  label: "It won’t be",
                  id: "check-boxes-example-no-record"
                },
                {
                  label: "Tape recorder",
                  id: "check-boxes-example-audio"
                },
                {
                  label: "Video recorder",
                  id: "check-boxes-example-video"
                },
                {
                  label: "Hand-written notes",
                  id: "check-boxes-example-hand-written-notes"
                }
              ]}
              hint="Letting the participants know is a legal requirement."
              id="check-boxes-example"
              legend="How will the interview be recorded?"
              name="check-boxes-example"
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CheckBoxes">
              Check Boxes code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/68">
              Check Boxes research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Radio Buttons</Subheading>
          <Example>
            <RadioButtons
              items={[
                {
                  label: "Yes",
                  id: "radio-buttons-example-yes"
                },
                {
                  label: "No",
                  id: "radio-buttons-example-no"
                },
                {
                  label: "Maybe",
                  id: "radio-buttons-example-maybe"
                }
              ]}
              id="radio-buttons-example"
              legend="Will there be refreshments?"
              name="radio-buttons-example"
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/RadioButtons">
              Radio Buttons code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/68">
              Radio Buttons research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Conditional</Subheading>
          <Figures>
            <Figure caption="Select an option to reveal">
              <Conditional
                trigger={
                  <RadioButtons
                    items={[
                      {
                        label: "Yes",
                        id: "conditional-inputs-one-of-many-input-example-yes"
                      },
                      {
                        label: "No",
                        id: "conditional-inputs-one-of-many-input-example-no"
                      }
                    ]}
                    id="conditional-inputs-radio-buttons-example"
                    legend="Can we email you?"
                    name="conditional-inputs-radio-buttons-example"
                  />
                }
                target={
                  <TextInput
                    id="conditional-input-singleline-text-input-example"
                    label="Email"
                    size={48}
                  />
                }
              />
            </Figure>
          </Figures>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/issues/86">
              Conditional research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Actions</Heading>
          <Subheading>Command</Subheading>
          <Paragraph>
            Use this component for interactive triggers that don’t submit data.
          </Paragraph>
          <Example>
            <Command>Print page</Command>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Command">
              Command code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/33">
              Command research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Submit</Subheading>
          <Paragraph>
            Use this component to trigger the submitting of form data.
          </Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>only use it once on each page</ListItem>
            <ListItem>use a verb, for example save</ListItem>
            <ListItem>only use the Green colour</ListItem>
            <ListItem>not use a disabled state</ListItem>
          </BulletedList>
          <Example>
            <Submit text="Send application" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Submit">
              Submit code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/33">
              Submit research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Validation</Heading>
          <Subheading>Error Summary</Subheading>
          <Example>
            <ErrorSummary
              items={[
                {
                  id: "text-input-validation-example",
                  error: "Enter the name of the meal"
                },
                {
                  id: "radio-buttons-example-validation",
                  error: "Select whether the meal contains nuts or not"
                }
              ]}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ErrorSummary">
              Error Summary code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/67">
              Error Summary research
            </Link>{" "}
            on GitHub.
          </Cite>

          <Figures>
            <RadioButtons
              items={[
                {
                  label: "Yes",
                  id: "radio-buttons-example-validation-yes"
                },
                {
                  label: "No",
                  id: "radio-buttons-example-validation-no"
                },
                {
                  label: "I’m not sure",
                  id: "radio-buttons-example-validation-unsure"
                }
              ]}
              error="Select whether the meal contains nuts or not"
              hint="Nut allergies can be dangerous. Only choose ’No’ if you’re completely sure"
              id="radio-buttons-example-validation"
              legend="Does the meal include nuts?"
              name="radio-buttons-example-validation"
            />
            <TextInput
              id="text-input-validation-example"
              label="Name of the meal"
              size={48}
              error="Enter the name of the meal"
            />
            <Figure caption="Form with errors connected to Error Summary" />
          </Figures>
        </Content>
      </Contents>
    </Main>
  </Page>
);
