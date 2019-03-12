import { withPrefix } from "gatsby";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

export const items = [
  {
    text: "Logo",
    href: "/assets/web-assets/#logo"
  },
  {
    text: "Favicon",
    href: "/assets/web-assets/#favicon"
  }
];

export default () => (
  <Page title="Web assets">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Assets",
          href: "/assets/"
        }
      ]}
    />
    <Main>
      <Title>Web assets</Title>
      <Contents>
        <ContentsMenu items={items} />
        <Content>
          <Heading>Logo</Heading>
          <Paragraph>Use this asset to display the Barnardo’s logo.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>use adequate white space around it</ListItem>
            <ListItem>not break it up in any way</ListItem>
            <ListItem>
              not create variations of it for products or campaigns
            </ListItem>
            <ListItem>not change the colour</ListItem>
            <ListItem>not scale it to less than 4.5rem (roughly 72px)</ListItem>
          </BulletedList>
          <Figures>
            <Figure caption="Example of the logo">
              <Image
                alt="The Barnardo’s logo"
                src={withPrefix("/logo-for-figure.svg")}
              />
            </Figure>
          </Figures>
          <Paragraph>
            <Link href="https://github.com/barnardos/design-system/blob/master/src/components/Header/logo.svg">
              Download logo (12kb)
            </Link>
          </Paragraph>
          <Heading>Favicon</Heading>
          <Paragraph>
            Use this asset to display an icon in the address bar or tab of a
            browser.
          </Paragraph>
          <Paragraph>You should avoid changing the colour.</Paragraph>
          <Figures>
            <Figure caption="Example of the favicon">
              <Image
                alt="The Barnardo’s favicon"
                src={withPrefix("/favicon-for-figure.svg")}
              />
            </Figure>
          </Figures>
          <Paragraph>
            <Link href="https://raw.githubusercontent.com/barnardos/design-system/master/src/components/Site/favicon.ico">
              Download favicon (11kb)
            </Link>
          </Paragraph>
          <Pagination
            next={{
              href: "/assets/generating-sketch-assets",
              label: "Generating Sketch assets"
            }}
          />
        </Content>
      </Contents>
    </Main>
  </Page>
);
