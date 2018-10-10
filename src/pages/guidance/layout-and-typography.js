import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl/index";
import Subheading from "../../components/Subheading";
import TableOfContents from "../../components/TableOfContents";
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
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Typography",
          to: "/guidance/layout-and-typography/#typography"
        },
        {
          level: 1,
          text: "Layout",
          to: "/guidance/layout-and-typography/#layout"
        },
        {
          level: 1,
          text: "Proportional scale",
          to: "/guidance/layout-and-typography/#proportional-scale"
        }
      ]}
    />
    <Paragraph>{`To unify layout and typography, you should use:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`multiples of 4 for spacing, flourishes, and line heights`}</ListItem>
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
          className="Pages-figureKey"
          style={{
            height: "3rem",
            top: "3rem"
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
            <Subheading>Contact details</Subheading>
            <figcaption className="Pages-figureCaption" style={{ top: 0 }}>
              <p
                className="Pages-figureCaptionItem"
                style={{ top: "0.25rem" }}
              >{`32`}</p>
            </figcaption>
          </figure>
          <figure className="Pages-figure Pages-figure--positioned">
            <Paragraph>{`So that we can send you the certificate.`}</Paragraph>
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
              id="text-control-email-example"
              label="Email"
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
    <Heading>{`Typography`}</Heading>
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
        <Heading>{`Heading`}</Heading>
        <figcaption className="Pages-figureCaption">{`16 * 1.125^5 (Proxima Nova Semi-Bold)`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <Subheading>{`Subheading`}</Subheading>
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
    <Heading>{`Layout`}</Heading>
    <Paragraph
    >{`Create simple and fluid layouts using multiples of 4 for spacing and flourishes.`}</Paragraph>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <div className="Pages-figureDemo Pages-figureDemo--thirds">
          <div className="Pages-figureDemoItem Pages-figureDemoItem--first" />
          <div className="Pages-figureDemoItem Pages-figureDemoItem--second" />
        </div>
        <figcaption className="Pages-figureCaption">
          {`Expands to two-thirds/one-third with gutter of 16`}
        </figcaption>
      </figure>
      <figure className="Pages-figure">
        <div className="Pages-figureDemo Pages-figureDemo--constrained">
          <div className="Pages-figureDemoItem" />
        </div>
        <figcaption className="Pages-figureCaption">
          {`Centered with maximum width of 448 and shadow of 4`}
        </figcaption>
      </figure>
    </div>
    <Heading>{`Proportional scale`}</Heading>
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
