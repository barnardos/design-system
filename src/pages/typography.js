import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Code from "../components/Code";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";
import DesignSystemIndex from "../components/DesignSystemIndex";
import Figures from "../components/Figures";
import Figure from "../components/Figure";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Typography`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Typography`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Using typefaces",
          to: "/typography/#using-typefaces"
        }
      ]}
    />
    <Paragraph>{`You should use:`}</Paragraph>
    <BulletedList>
      <ListItem>{`a base of 1rem (roughly 16px) for paragraphs`}</ListItem>
      <ListItem>{`exponents of 1.125 for other type sizes`}</ListItem>
      <ListItem>{`multiples of 0.25rem (roughly 4px) for line heights`}</ListItem>
    </BulletedList>
    <Figures>
      <Figure
        caption="1rem * 1.125^8 (roughly 41px/48px)"
        secondaryCaption="1rem * 1.125^9 (roughly 46px/52px) on larger viewports"
        tertiaryCaption="Proxima Nova Semi-Bold"
      >
        <Title>{`Title`}</Title>
      </Figure>
      <Figure
        caption="1rem * 1.125^4 (roughly 26px/32px)"
        secondaryCaption="Proxima Nova Light"
      >
        <Lede>{`Lede`}</Lede>
      </Figure>
      <Figure
        caption="1rem * 1.125^5 (roughly 29px/32px)"
        secondaryCaption="Proxima Nova Semi-Bold"
      >
        <Heading>{`Heading`}</Heading>
      </Figure>
      <Figure
        caption="1rem * 1.125^4 (roughly 26px/32px)"
        secondaryCaption="Proxima Nova Light"
      >
        <Subheading>{`Subheading`}</Subheading>
      </Figure>
      <Figure
        caption="1rem * 1.125^0 (roughly 16px/24px)"
        secondaryCaption="system-ui light."
      >
        <Paragraph>{`Paragraph`}</Paragraph>
      </Figure>
    </Figures>
    <Heading>{`Using typefaces`}</Heading>
    <Paragraph>{`You should only use these fonts:`}</Paragraph>
    <BulletedList>
      <ListItem>{`Proxima Nova semi-bold`}</ListItem>
      <ListItem>{`Proxima Nova light`}</ListItem>
      <ListItem>{`system-ui light`}</ListItem>
    </BulletedList>
    <Paragraph>
      {`Use "`}
      <Code>{`djy7snj`}</Code>
      {`" for the `}
      <Link href="https://helpx.adobe.com/uk/fonts/using/embed-codes.html">
        {`Adobe Fonts embed code`}
      </Link>
      {`. This code is valid for all of Barnardo's products.`}
    </Paragraph>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/custom-properties.css">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
