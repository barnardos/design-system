import Link from "gatsby-link";
import React from "react";

import Title from "../components/Title";
import Swatches from "../components/Swatches";
import HeadingTwo from "../components/HeadingTwo";
import Paragraph from "../components/Paragraph";

import "./index.css";

const Pages = () => (
  <div>
    <Link className="Pages-home" to="/">{`Home`}</Link>
    <div className="Pages-title">
      <Title>{`Colour`}</Title>
    </div>

    <div className="Pages-paragraph">
      <Paragraph>{`The colour palette is:`}</Paragraph>
    </div>
    <Swatches />
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
