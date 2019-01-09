import React from "react";

import Subheading from "../Subheading";
import Paragraph from "../Paragraph";
import TextInput from "../TextInput";

import "./index.css";

const SpacingFigure = () => (
  <figure className="SpacingFigure">
    <div
      className="SpacingFigure-key"
      style={{
        height: "2rem",
        top: "0"
      }}
    />
    <div
      className="SpacingFigure-key"
      style={{
        height: "3rem",
        top: "3rem"
      }}
    />
    <div
      className="SpacingFigure-key"
      style={{
        height: "2rem",
        top: "7rem"
      }}
    />
    <div
      className="SpacingFigure-key"
      style={{
        height: "3rem",
        top: "9.5rem"
      }}
    />
    <div
      style={{
        maxWidth: "19rem",
        paddingLeft: "6rem",
        position: "relative",
        zIndex: "1"
      }}
    >
      <figure className="SpacingFigure-figure">
        <Subheading>{`Contact details`}</Subheading>
        <figcaption className="SpacingFigure-caption" style={{ top: 0 }}>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "0.5rem" }}
          >{`2.25rem`}</p>
        </figcaption>
      </figure>
      <figure className="SpacingFigure-figure">
        <div
          style={{
            marginTop: "1rem"
          }}
        >
          <Paragraph>{`So that we can send you the certificate.`}</Paragraph>
        </div>
        <figcaption className="SpacingFigure-caption" style={{ top: "-1rem" }}>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "0" }}
          >{`2rem`}</p>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "0.5rem" }}
          >{`3rem`}</p>
        </figcaption>
      </figure>
      <figure className="SpacingFigure-figure">
        <div
          style={{
            marginTop: "1rem"
          }}
        >
          <TextInput id="text-control-email-example" label="Email" size={48} />
        </div>
        <figcaption
          className="SpacingFigure-caption"
          style={{ top: "-1.75rem" }}
        >
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "0.75rem" }}
          >{`2rem`}</p>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "1rem" }}
          >{`2.25rem`}</p>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "1.25rem" }}
          >{`1rem`}</p>
          <p
            className="SpacingFigure-captionItem"
            style={{ top: "1.5rem" }}
          >{`3rem`}</p>
        </figcaption>
      </figure>
    </div>
  </figure>
);

export default SpacingFigure;
