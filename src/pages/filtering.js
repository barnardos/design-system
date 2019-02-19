import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Page from "../components/Page";
import Link from "../components/Link";
import Filter from "../components/Filter";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import BulletedList from "../components/BulletedList";
import TextInput from "../components/TextInput";
import RadioButtons from "../components/RadioButtons";
import Form from "../components/Form";
import Submit from "../components/Submit";
import Example from "../components/Example";
import Topic from "../components/Topic";

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
        }
      ]}
    />
    <Main>
      <Content>
        <Topic>{`Patterns`}</Topic>
        <Title>{`Filtering`}</Title>
        <Paragraph>{`You should:`}</Paragraph>
        <BulletedList>
          <ListItem>{`avoid too many filters`}</ListItem>
          <ListItem>{`show common filters at all times`}</ListItem>
          <ListItem>{`dynamically remove filters that have no results`}</ListItem>
          <ListItem>{`show the active filters`}</ListItem>
          <ListItem>{`include a way to undo each filter`}</ListItem>
          <ListItem>{`show the number of results`}</ListItem>
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
          <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Filter">{`Filter code`}</Link>
          {` and `}
          <Link href="https://github.com/barnardos/design-system/issues/79">{`Filter research`}</Link>
          {` on GitHub.`}
        </Cite>
      </Content>
    </Main>
  </Page>
);
