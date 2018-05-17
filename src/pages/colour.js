import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import SinglelineTextControl from "../components/SinglelineTextControl/index";
import Swatches from "../components/Swatches";
import Submit from "../components/Submit";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Colour`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <Title>{`Colour`}</Title>
    <Paragraph>{`When applying color you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use the brand colours`}</ListItem>
      <ListItem>{`use increments of 10% for tints and shades`}</ListItem>
      <ListItem>
        {`use `}
        <Link href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">{`accessible`}</Link>
        {` colour combinations for text`}
      </ListItem>
      <ListItem>{`avoid relying on just color`}</ListItem>
    </UnorderedList>
    <HeadingOne>Brand colors</HeadingOne>
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
    <HeadingOne>Using colors</HeadingOne>
    <Paragraph>{`For example, you could use:`}</Paragraph>
    <div className="Pages-figures">
      <figure className="Pages-figure">
        <SinglelineTextControl
          errored
          hint="As it appears on your ID."
          id="text-control-full-name-example"
          label="Full name"
          size="48"
          validation="Enter your full name"
        />
        <figcaption className="Pages-figureCaption">{`Black for labels and 30% tint for hint text. Red for errors with 80% tint for inset shadows.`}</figcaption>
      </figure>
      <figure className="Pages-figure">
        <Submit text="Continue" />
        <figcaption className="Pages-figureCaption">{`White text on Green with 10% shade on hover and 30% shade for drop shadows.`}</figcaption>
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
      <a href="https://github.com/barnardos/design-system/issues/14">{`research`}</a>
      {` on GitHub.`}
    </Paragraph>
  </div>
);

export default Pages;
