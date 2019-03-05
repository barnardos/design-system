import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Link from "../../components/Link";
import Filter from "../../components/Filter";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import BulletedList from "../../components/BulletedList";
import TextInput from "../../components/TextInput";
import RadioButtons from "../../components/RadioButtons";
import Form from "../../components/Form";
import Submit from "../../components/Submit";
import Example from "../../components/Example";

export default () => (
  <Page>
    <Helmet>
      <title>{`Filtering`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Patterns",
          href: "/patterns/"
        }
      ]}
    />
    <Main>
      <Title>{`Filtering`}</Title>
      <Paragraph>{`Use this pattern to narrow down results to the most relevant.`}</Paragraph>
      <Paragraph>{`You should:`}</Paragraph>
      <BulletedList>
        <ListItem>{`display the number of results`}</ListItem>
        <ListItem>{`show what filters are currently active`}</ListItem>
        <ListItem>{`include a way to clear each filter option`}</ListItem>
        <ListItem>{`show common filters at all times`}</ListItem>
        <ListItem>{`hide filters that have no results`}</ListItem>
        <ListItem>{`avoid too many filters options`}</ListItem>
      </BulletedList>
      <Example>
        <TextInput
          hint="For example town or postcode."
          id="text-input-filtering-location-example"
          label="Location"
          size={48}
        />
        <Filter>
          <Form action="#">
            <RadioButtons
              items={[
                {
                  label: "Any distance",
                  id: "radio-buttons-example-filterin-any"
                },
                {
                  label: "1 mile",
                  id: "radio-buttons-example-filterin-one"
                },
                {
                  label: "10 miles",
                  id: "radio-buttons-example-filterin-ten"
                }
              ]}
              id="radio-buttons-example-filtering"
              legend="Within"
              name="radio-buttons-example-filtering"
            />
          </Form>
        </Filter>
        <Submit text="Find" />
      </Example>
      <Cite>
        {`View `}
        <Link href="https://github.com/barnardos/design-system/issues/79">{`filtering research`}</Link>
        {` on GitHub.`}
      </Cite>
    </Main>
  </Page>
);
