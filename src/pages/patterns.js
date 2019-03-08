import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Page from "../components/Page";
import BulletedList from "../components/BulletedList";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Title from "../components/Title";
import Main from "../components/Main";
import Section from "../components/Section";
import Sections from "../components/Sections";

export default () => (
  <Page>
    <Helmet>
      <title>Patterns</title>
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
      <Title>Patterns</Title>
      <Lede>
        Put the building blocks together to help users complete common tasks.
      </Lede>
      <Sections>
        <Section>
          <BulletedList>
            <ListItem>
              <Link href="/patterns/asking-for-names/">Asking for names</Link>
            </ListItem>
            <ListItem>
              <Link href="/patterns/gathering-information/">
                Gathering information
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/patterns/filtering/">Filtering</Link>
            </ListItem>
            <ListItem>
              <Link href="/patterns/preventing-spam/">Preventing spam</Link>
            </ListItem>
          </BulletedList>
        </Section>
      </Sections>
    </Main>
  </Page>
);
