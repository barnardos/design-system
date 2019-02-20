import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import ContentWithMenu from "../components/ContentWithMenu";
import ContentsMenu from "../components/ContentsMenu";
import ContentHeader from "../components/ContentHeader";
import Cite from "../components/Cite";
import Page from "../components/Page";
import Heading from "../components/Heading";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

export default () => (
  <Page>
    <Helmet>
      <title>{`Planning`}</title>
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
      <ContentWithMenu>
        <ContentHeader>
          <Topic>{`Design`}</Topic>
          <Title>{`User research`}</Title>
        </ContentHeader>
        <ContentsMenu
          items={[
            {
              level: 1,
              text: "Consent",
              href: "/planning/#consent"
            },
            {
              level: 1,
              text: "Safeguarding",
              href: "/planning/#safeguarding"
            },
            {
              level: 1,
              text: "Engagement",
              href: "/planning/#engagement"
            },
            {
              level: 1,
              text: "Timings",
              href: "/planning/#timings"
            },
            {
              level: 1,
              text: "Follow up",
              href: "/planning/#follow-up"
            }
          ]}
        />
        <Content>
          <Paragraph>{`Research teams should engage with young people to develop Barnardo’s digital products with their involvement.`}</Paragraph>
          <Heading>{`Consent`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`send consent forms in advance`}</ListItem>
            <ListItem>{`consider how incentives may affect voluntary participation and consent
`}</ListItem>
            <ListItem>{`avoid assuming young people are incapable of providing consent`}</ListItem>
            <ListItem>{`only record in ways you have consent for`}</ListItem>{" "}
          </BulletedList>
          <Heading>{`Safeguarding`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`ensure that risk and harm is minimised`}</ListItem>
            <ListItem>{`consider any risks about expressing their views`}</ListItem>
            <ListItem>{`consider their competencies and vulnerabilities`}</ListItem>
            <ListItem>{`decide what personal data you’ll gather and that you’re GDPR compliant`}</ListItem>
            <ListItem>{`designate a safeguard lead for the day in case of any disclosures`}</ListItem>
            <ListItem>{`decide whether any training for the adults involved is required`}</ListItem>
            <ListItem>{`arrange adults to accompany them who they’re familiar with`}</ListItem>
            <ListItem>{`incorporate the service workers views`}</ListItem>
          </BulletedList>
          <Heading>{`Engagement`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`recruit a cross section of young people`}</ListItem>
            <ListItem>{`find out why they’re interested in being involved`}</ListItem>
            <ListItem>{`send what the session is about and what’s expected of them`}</ListItem>
            <ListItem>{`state if you’ll be speaking to them about anything personal`}</ListItem>
            <ListItem>{`avoid making assumptions about what they're interested in or capable of`}</ListItem>
            <ListItem>{`provide fidget toys to aid concentration`}</ListItem>
            <ListItem>{`have an idea about how to organise groups`}</ListItem>
            <ListItem>{`include a variety of activities which involve speaking, writing, moving around`}</ListItem>
            <ListItem>{`request dietary requirements`}</ListItem>
            <ListItem>{`provide meals, snacks and refreshments familiar to young people`}</ListItem>
            <ListItem>{`plan a reward, for example learning new skills, meals out or vouchers`}</ListItem>
          </BulletedList>
          <Heading>{`Timings`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`aim to hold sessions in school holidays or provide a letter of absence`}</ListItem>
            <ListItem>{`choose a location that’s easy to get to`}</ListItem>
            <ListItem>{`choose a feasible duration, for example 11am-4pm`}</ListItem>{" "}
            <ListItem>{`allow for travel time`}</ListItem>
            <ListItem>{`plan regular breaks`}</ListItem>
            <ListItem>{`allow flexibility for discussions`}</ListItem>
          </BulletedList>
          <Heading>{`Conducting`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`explain the purpose of the research and what they’re contributing to`}</ListItem>
            <ListItem>{`explain how you’ll use the research`}</ListItem>
            <ListItem>{`make sure they’re aware they can leave at anytime`}</ListItem>
            <ListItem>{`explain where they can go to take a breather`}</ListItem>
            <ListItem>{`explain how they’ll be recorded`}</ListItem>
            <ListItem>{`provide support so they can get fully involved`}</ListItem>
            <ListItem>{`encourage the adults involved to talk to the young people about things they like`}</ListItem>
            <ListItem>{`include ice-breakers that are easy to understand`}</ListItem>
            <ListItem>{`allow them to move into another group if they are more comfortable`}</ListItem>
            <ListItem>{`avoid asking young people to introduce themselves`}</ListItem>
            <ListItem>{`provide certificates which show what skills they’ve developed by taking part`}</ListItem>
            <ListItem>{`provide feedback forms to young people and service workers`}</ListItem>
            <ListItem>{`Let them know what happens after`}</ListItem>
            <ListItem>{`ask them what their preferred communication method`}</ListItem>
          </BulletedList>
          <Heading>{`Follow up`}</Heading>
          <Paragraph>{`You should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`give updates and keep in touch throughout the process`}</ListItem>
            <ListItem>{`show them what difference they’re making`}</ListItem>
          </BulletedList>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/issues/413">{`user research research`}</Link>
            {` on GitHub.`}
          </Cite>
        </Content>
      </ContentWithMenu>
    </Main>
  </Page>
);
