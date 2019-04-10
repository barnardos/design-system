import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Callout from "../../components/Callout";
import Cite from "../../components/Cite";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import PullQuote from "../../components/PullQuote";
import Title from "../../components/Title";

export default () => (
  <Page title="Interacting with young people in real time">
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
      <Title>Interacting with young people in real time</Title>
      <Contents>
        <ContentsMenu
          items={[
            {
              level: 1,
              text: "Background information",
              href:
                "/patterns/interacting-with-young-people/#background-information"
            },
            {
              level: 1,
              text: "Tone of voice",
              href: "/patterns/interacting-with-young-people/#tone-of-voice"
            },
            {
              level: 1,
              text: "Handling data",
              href: "/patterns/interacting-with-young-people/#handling-data"
            }
          ]}
        />
        <Content>
          <Paragraph>
            Use this pattern when interacting with young people in real time,
            for example online counselling.
          </Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>set expectations of response times up front</ListItem>
            <ListItem>
              give alternative options in case they need immediate support
            </ListItem>
          </BulletedList>
          <Heading>Background information</Heading>
          <Paragraph>
            To build trust you should provide information on who the young
            person is speaking to.
          </Paragraph>
          <Figures>
            <Figure caption="Information on who the young person is speaking to.">
              <div
                style={{
                  maxWidth: "18rem"
                }}
              >
                <Callout>
                  <Image
                    src="/image-for-interacting-example.jpg"
                    ratio="1by1"
                  />
                  <Heading>Sienna Stokes</Heading>
                  <Lede>Female, 32</Lede>
                  <Paragraph>
                    <strong>Children’s Services Manager</strong>
                    <br />
                    Fostering and adoption – South East Region
                  </Paragraph>
                </Callout>
              </div>
            </Figure>
          </Figures>
          <Heading>Tone of voice</Heading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>make them feel unique and not part of a system</ListItem>
            <ListItem>be calm, helpful and positive</ListItem>
            <ListItem>allow them to personalise their experience</ListItem>
            <ListItem>
              provide clear and relevant signposts to services recommended by
              Barnardo’s
            </ListItem>
          </BulletedList>
          <Figures>
            <Callout>
              <PullQuote>
                Would you like some tips on how you can cope with your
                situation?
              </PullQuote>
            </Callout>
            <Figure caption="Speaking in a calm, helpful and positive tone of voice." />
          </Figures>
          <Heading>Handling data</Heading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>make sure you are compliant with GDPR</ListItem>
            <ListItem>
              follow the guidance on{" "}
              <Link href="/patterns/gathering-information/">
                Gathering information
              </Link>
            </ListItem>
          </BulletedList>
          <Paragraph>
            You can record the conversation for staff and the young person to
            access.
          </Paragraph>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/issues/637">
              interacting with young people research
            </Link>{" "}
            on GitHub.
          </Cite>
        </Content>
      </Contents>
    </Main>
  </Page>
);
