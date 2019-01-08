import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Code from "../components/Code";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Layout from "../components/Layout";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";
import DesignSystemIndex from "../components/DesignSystemIndex";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
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
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <Title>{`Title `}</Title>
        <figcaption className="Pages-figureCaption">
          {`1rem * 1.125^8 (roughly 41px/48px)`}
          <br />
          {`1rem * 1.125^9 (roughly 46px/52px) on larger viewports`}
          <br />
          {`Proxima Nova Semi-Bold`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <Lede>{`Lede`}</Lede>
        <figcaption className="Pages-figureCaption">
          {`1rem * 1.125^4 (roughly 26px/32px)`}
          <br />
          {`Proxima Nova Light`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <Heading>{`Heading`}</Heading>
        <figcaption className="Pages-figureCaption">
          {`1rem * 1.125^5 (roughly 29px/32px)`}
          <br />
          {`Proxima Nova Semi-Bold`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <Subheading>{`Subheading`}</Subheading>
        <figcaption className="Pages-figureCaption">
          {`1rem * 1.125^4 (roughly 26px/32px)`}
          <br />
          {`Proxima Nova Light`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <Paragraph>{`Paragraph`}</Paragraph>
        <figcaption className="Pages-figureCaption">
          {`1rem * 1.125^0 (roughly 16px/24px)`}
          <br />
          {`system-ui light`}
        </figcaption>
      </figure>
    </div>
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
  </Layout>
);

export default Pages;
