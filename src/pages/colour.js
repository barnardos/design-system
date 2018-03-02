import GatsbyLink from "gatsby-link";
import React from "react";

import Title from "../components/Title";
import Palette from "../components/Palette";
import HeadingTwo from "../components/HeadingTwo";
import Paragraph from "../components/Paragraph";

import "./index.css";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Colour`}</Title>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`The colour palette is:`}</Paragraph>
    </div>
    <Palette />
    <div className="Pages-paragraph">
      <Paragraph
      >{`These colours are accessible for text greater than 18px.`}</Paragraph>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`For text smaller than this, use a 20% shade to maintain AA compliance.`}</Paragraph>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Suggested usage`}</HeadingTwo>
    </div>
    <div className="Pages-colour">
      <div className="Pages-colourItem">
        <strong>{`Red`}</strong>
        {` - destructive actions like deleting or removing`}
      </div>
      <div className="Pages-colourItem">
        <strong>{`Orange`}</strong>
        {` - cautionary actions like loading or warning`}
      </div>
      <div className="Pages-colourItem">
        <strong>{`Green`}</strong>
        {` - positive actions like submitting or continuing`}
      </div>
    </div>
  </div>
);

export default Pages;
