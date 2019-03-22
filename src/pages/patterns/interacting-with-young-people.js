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
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import PullQuote from "../../components/PullQuote";
import Title from "../../components/Title";

export default () => (
  <Page title="Asking for names">
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
              text: "Tone of voice",
              href: "/patterns/interacting-with-young-people/#tone-of-voice"
            },
            {
              level: 1,
              text: "Data",
              href: "/patterns/interacting-with-young-people/#data"
            }
          ]}
        />
        <Content>
          <Paragraph>
            Use this pattern to interact with young people in real time, for
            example online counselling.
          </Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>set expectations of response times up front</ListItem>
            <ListItem>
              give alternative options in case they need immediate support
            </ListItem>
            <ListItem>provide background information to build trust</ListItem>
          </BulletedList>
          <Figures>
            <Figure caption="Background information of who the young person is speaking to.">
              <Callout>
                <Image
                  src="https://dummyimage.com/1200x675/bbbbbb/d2d2d2.png&amp;text=16:9"
                  alt="A 6:9 dummy image"
                />
                <Heading>Sienna Stokes</Heading>
                <Lede>Female, 49</Lede>
                <Paragraph>
                  <strong>Children’s Services Manager</strong>
                  <br />
                  Fostering and adoption – South East Region
                </Paragraph>
              </Callout>
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
            <Figure caption="Calm, helpful and positive tone of voice." />
          </Figures>
          <Heading>Data</Heading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>
              follow the pattern for{" "}
              <Link href="/patterns/gathering-information/">
                Gathering information
              </Link>
            </ListItem>
            <ListItem>
              record the conversation for staff and the young person to access
            </ListItem>
          </BulletedList>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/issues/637">
              interacting with young people research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Pagination
            previous={{
              href: "/patterns/asking-for-names",
              label: "Asking for names"
            }}
            next={{
              href: "/patterns/filtering",
              label: "Filtering"
            }}
          />
        </Content>
      </Contents>
    </Main>
  </Page>
);
