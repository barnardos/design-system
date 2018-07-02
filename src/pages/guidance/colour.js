import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import HeadingOne from "../../components/HeadingOne";
import HeadingTwo from "../../components/HeadingTwo";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import SinglelineTextControl from "../../components/SinglelineTextControl/index";
import Swatches from "../../components/Swatches";
import Submit from "../../components/Submit";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Colour`}</title>
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
    <Title>{`Colour`}</Title>
    <Paragraph>{`When applying colour you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use the brand colours`}</ListItem>
      <ListItem>{`use increments of 10% for tints and shades`}</ListItem>
      <ListItem>
        {`use `}
        <Link href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">{`accessible`}</Link>
        {` colour combinations for text`}
      </ListItem>
      <ListItem>{`avoid relying on just colour`}</ListItem>
    </UnorderedList>
    <HeadingOne>Brand colours</HeadingOne>
    <div className="Pages-swatches">
      <Swatches
        swatches={[
          [{ label: "Green", hex: "#6aa300", primary: true }],
          [{ label: "Orange", hex: "#e86c00", primary: true }],
          [{ label: "Pink", hex: "#cc0070", primary: true }],
          [{ label: "Purple", hex: "#6e2066", primary: true }],
          [{ label: "Teal", hex: "#0099a9", primary: true }],
          [
            {
              label: "White",
              hex: "#ffffff",
              bordered: true,
              inverted: true,
              primary: true
            }
          ],
          [{ label: "Black", hex: "#1d1d1d", primary: true }],
          [{ label: "Red", hex: "#c30000", primary: true }]
        ]}
      />
    </div>
    <HeadingOne>Using colours</HeadingOne>
    <Paragraph>{`For example, you could use:`}</Paragraph>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <SinglelineTextControl
          hint="As it appears on your ID."
          id="text-control-full-name-example"
          invalid
          label="Full name"
          size={48}
          validation="Enter your full name"
        />
        <figcaption className="Pages-figureCaption">{`Black for labels and 30% tint for hint text. Red for errors with 80% tint for inset shadows.`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <Submit text="Continue" />
        <figcaption className="Pages-figureCaption">{`White text on Green with 10% shade on hover and 40% shade for drop shadows.`}</figcaption>
      </figure>
    </div>
    <HeadingTwo>{`Using colour semantically`}</HeadingTwo>
    <Paragraph>{`For example, you could use:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`greens for positive actions like submit or continue`}</ListItem>
      <ListItem>{`oranges for cautionary actions like load or warn`}</ListItem>
      <ListItem
      >{`reds for destructive actions like delete or remove`}</ListItem>
    </UnorderedList>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/14">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </div>
);

export default Pages;
