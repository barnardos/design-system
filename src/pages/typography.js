import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Code from "../components/Code";
import Heading from "../components/Heading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";
import DesignSystemIndex from "../components/DesignSystemIndex";

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
