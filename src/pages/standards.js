import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Page from "../components/Page";
import Main from "../components/Main";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Section from "../components/Section";
import Sections from "../components/Sections";
import Heading from "../components/Heading";
import Title from "../components/Title";

export default () => (
  <Page title="Components">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <Title>Standards</Title>
      <Lede>Guidelines on how to adopt our ways of working.</Lede>
      <Sections>
        <Section>
          <Heading>Accessibility</Heading>
          <BulletedList>
            <ListItem>
              <Link href="/standards/testing/">Testing</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/viewport-scale/">Viewport scale</Link>
            </ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Design</Heading>
          <BulletedList>
            <ListItem>
              <Link href="/standards/colour/">Colour</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/typography/">Typography</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/spacing-and-layout/">
                Spacing and layout
              </Link>
            </ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Writing</Heading>
          <BulletedList>
            <ListItem>
              <Link href="/standards/voice-and-tone/">Voice and tone</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/reading-age/">Reading age</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/formatting/">Formatting</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/spelling/">Spelling</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/maintenance/">Maintenance</Link>
            </ListItem>
          </BulletedList>
        </Section>
        <Section>
          <Heading>Development</Heading>
          <BulletedList>
            <ListItem>
              <Link href="/standards/code-quality/">Code quality</Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/future-proof-code/">
                Future-proof code
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/standards/performance/">Performance</Link>
            </ListItem>
          </BulletedList>
        </Section>
      </Sections>
    </Main>
  </Page>
);
