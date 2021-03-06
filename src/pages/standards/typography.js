import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Code from "../../components/Code";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Figures from "../../components/Figures";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Topic from "../../components/Topic";
import TypeFigures from "../../components/TypeFigures";

export const items = [
  {
    text: "Brand font",
    href: "/standards/typography/#brand-font"
  },
  {
    text: "Body font",
    href: "/standards/typography/#body-font"
  },
  {
    text: "Type scale",
    href: "/standards/typography/#type-scale"
  },
  {
    text: "Line height",
    href: "/standards/typography/#line-height"
  },
  {
    text: "Line length",
    href: "/standards/typography/#line-length"
  }
];

export default () => (
  <Page title="Typography">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Standards",
          href: "/standards/"
        }
      ]}
    />
    <Main>
      <Topic>Design</Topic>
      <Title>Typography</Title>
      <Contents>
        <ContentsMenu items={items} />
        <Content>
          <Heading>Brand font</Heading>
          <Paragraph>You should use Proxima Nova.</Paragraph>
          <Paragraph>You should only use the weights:</Paragraph>
          <BulletedList>
            <ListItem>300 (light)</ListItem>
            <ListItem>600 (semi-bold)</ListItem>
          </BulletedList>
          <Paragraph>
            Use ‘<Code>djy7snj</Code>’ for the{" "}
            <Link href="https://helpx.adobe.com/uk/fonts/using/embed-codes.html">
              Adobe Fonts embed code
            </Link>
            . This code is valid for all Barnardo’s products.
          </Paragraph>
          <Heading>Body font</Heading>
          <Paragraph>
            You should use the{" "}
            <Link href="https://www.w3.org/TR/css-fonts-4/#system-ui-def">
              system-ui
            </Link>{" "}
            generic font family.
          </Paragraph>
          <Paragraph>You should only use the weights:</Paragraph>
          <BulletedList>
            <ListItem>300 (light)</ListItem>
            <ListItem>600 (semi-bold)</ListItem>
          </BulletedList>
          <Heading>Type scale</Heading>
          <Paragraph>You should use:</Paragraph>
          <BulletedList>
            <ListItem>
              a base size of 1rem (roughly 16px) for body copy
            </ListItem>
            <ListItem>
              exponents of 1.125 for other type sizes (major second type scale)
            </ListItem>
          </BulletedList>
          <Paragraph>
            To create a consistent type hierarchy using these standards, you
            should use{" "}
            <Link href="/components/content/#type">the type components</Link>.
          </Paragraph>
          <Paragraph>
            Typography is subject to the{" "}
            <Link href="/standards/viewport-scale/">viewport scale</Link>.
          </Paragraph>
          <Figures>
            <TypeFigures />
          </Figures>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/blob/master/src/custom-properties.css#L5-L22">
              type scale code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/3">
              type scale research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Line height</Heading>
          <Paragraph>
            To make layouts align, you should use multiples of 0.25rem (roughly
            4px) for line height.
          </Paragraph>
          <Heading>Line length</Heading>
          <Paragraph>The optimal line length of text is around:</Paragraph>
          <BulletedList>
            <ListItem>15–40 characters for short lines</ListItem>
            <ListItem>40–95 characters for body copy</ListItem>
          </BulletedList>
          <Pagination
            previous={{
              href: "/standards/colour",
              label: "Colour"
            }}
            next={{
              href: "/standards/spacing-and-layout",
              label: "Spacing and layout"
            }}
          />
        </Content>
      </Contents>
    </Main>
  </Page>
);
