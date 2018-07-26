import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import HeadingOne from "../../components/HeadingOne";
import HeadingTwo from "../../components/HeadingTwo";
import Layout from "../../components/Layout";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl/index";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Layout and typography`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
        }
      ]}
    />
    <Title>{`Layout and typography`}</Title>
    <Paragraph>{`To unify layout and typography, you should use:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`multiples of 4 for spacing and line heights`}</ListItem>
      <ListItem>{`a base of 16 for paragraphs`}</ListItem>
      <ListItem>{`exponents of 1.125 for other type sizes`}</ListItem>
    </UnorderedList>
    <Paragraph>{`For example, you could use these multiples of 4:`}</Paragraph>
    <div className="Pages-figures">
      <div
        style={{
          position: "relative"
        }}
      >
        <div
          className="Pages-figureKey"
          style={{
            height: "2rem",
            top: "0"
          }}
        />
        <div
          className="Pages-figureKey Pages-figureKey--space"
          style={{
            height: "1rem",
            top: "2rem"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "3rem",
            top: "3rem"
          }}
        />
        <div
          className="Pages-figureKey Pages-figureKey--space"
          style={{
            height: "1rem",
            top: "6rem"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "1.75rem",
            top: "7rem"
          }}
        />
        <div
          className="Pages-figureKey Pages-figureKey--space"
          style={{
            height: "0.5rem",
            top: "8.75rem"
          }}
        />
        <div
          className="Pages-figureKey"
          style={{
            height: "2.75rem",
            top: "9.25rem"
          }}
        />
        <div
          style={{
            maxWidth: "19rem",
            paddingLeft: "3rem",
            position: "relative",
            zIndex: "1"
          }}
        >
          <figure className="Pages-figure Pages-figure--positioned">
            <HeadingTwo>Contact details</HeadingTwo>
            <figcaption className="Pages-figureCaption" style={{ top: 0 }}>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.25rem" }}
              >{`32`}</p>
            </figcaption>
          </figure>
          <figure className="Pages-figure Pages-figure--positioned">
            <Paragraph>
              {`We'll use this to contact you about the certificate.`}
            </Paragraph>
            <figcaption
              className="Pages-figureCaption"
              style={{ top: "-1.25rem" }}
            >
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0" }}
              >{`16`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.5rem" }}
              >{`48`}</p>
            </figcaption>
          </figure>
          <figure className="Pages-figure Pages-figure--positioned">
            <SinglelineTextControl
              id="text-control-full-name-example"
              label="Full name"
              size={48}
            />
            <figcaption
              className="Pages-figureCaption"
              style={{ top: "-2rem" }}
            >
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.75rem" }}
              >{`16`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.75rem" }}
              >{`28`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.25rem" }}
              >{`8`}</p>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.25rem" }}
              >{`44`}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <HeadingOne>{`Layout`}</HeadingOne>
    <Paragraph
    >{`Using multiples of 4 for spacing provides a flexible foundation for layout.`}</Paragraph>
    <Paragraph>{`For example, you could have:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`shadows of 4`}</ListItem>
      <ListItem>{`margins of 8`}</ListItem>
      <ListItem>{`gutters of 16`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`Typography`}</HeadingOne>
    <Paragraph
    >{`Using a base of 16 and exponents of 1.125 for type sizes provides flexibility to create a visual hierarchy.`}</Paragraph>
    <Paragraph>{`For example, you could have:`}</Paragraph>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <Title>{`Title `}</Title>
        <figcaption className="Pages-figureCaption">
          {`16 * 1.125^8 (Proxima Nova Semi-Bold)`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <Lede>{`Lede`}</Lede>
        <figcaption className="Pages-figureCaption">{`16 * 1.125^4 (Proxima Nova Light)`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <HeadingOne>{`HeadingOne`}</HeadingOne>
        <figcaption className="Pages-figureCaption">{`16 * 1.125^5 (Proxima Nova Semi-Bold)`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <HeadingTwo>{`HeadingTwo`}</HeadingTwo>
        <figcaption className="Pages-figureCaption">{`16 * 1.125^4 (Proxima Nova Light)`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <Paragraph>{`Paragraph`}</Paragraph>
        <figcaption className="Pages-figureCaption">{`16 * 1.125^0 (system-ui light)`}</figcaption>
      </figure>
    </div>
    <Paragraph
    >{`Title jumps to 16 * 1.125^9 at larger viewport sizes.`}</Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/custom-properties.css">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Proportional scale`}</HeadingOne>
    <Paragraph
    >{`The layout and typography can be proportionally scaled to maintain an optimal line length at any viewport size.`}</Paragraph>
    <Paragraph>{`The optimal line length of text is around:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`15–40 characters for short lines`}</ListItem>
      <ListItem>{`40–95 characters for body copy`}</ListItem>
    </UnorderedList>
    <Paragraph>{`For example, you could scale the base of 16:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`down to 93.75% to give a paragraph size and gutters of 15`}</ListItem>
      <ListItem
      >{`up to 106.25% to give a paragraph size and gutters  of 17`}</ListItem>
      <ListItem
      >{`further up to 112.5% to give a paragraph size and gutters of 18`}</ListItem>
    </UnorderedList>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/proportional-scale.css">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/1">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
