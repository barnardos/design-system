import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Swatches from "../components/Swatches";
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
    <Paragraph>{`The colour palette is:`}</Paragraph>
    <Swatches
      swatches={[
        [
          { label: "30% tint", hex: "#97bf4d" },
          { label: "20% tint", hex: "#88b533" },
          { label: "10% tint", hex: "#79ac1a" },
          { label: "Green", hex: "#6aa300", primary: true },
          { label: "10% shade", hex: "#5f9200" },
          { label: "20% shade", hex: "#558200" },
          { label: "30% shade", hex: "#4a7200" }
        ],
        [
          { label: "30% tint", hex: "#db4d9b" },
          { label: "20% tint", hex: "#d6338d" },
          { label: "10% tint", hex: "#d11a7f" },
          { label: "Pink", hex: "#cc0070", primary: true },
          { label: "10% shade", hex: "#b70065" },
          { label: "20% shade", hex: "#a3005a" },
          { label: "30% shade", hex: "#8e004e" }
        ],
        [
          { label: "30% tint", hex: "#4db8c3" },
          { label: "20% tint", hex: "#33adba" },
          { label: "10% tint", hex: "#1aa3b2" },
          { label: "Teal", hex: "#0099a9", primary: true },
          { label: "10% shade", hex: "#008998" },
          { label: "20% shade", hex: "#007a87" },
          { label: "30% shade", hex: "#006b76" }
        ],
        [
          { label: "30% tint", hex: "#9a6394" },
          { label: "20% tint", hex: "#8b4d85" },
          { label: "10% tint", hex: "#7d3776" },
          { label: "Purple", hex: "#6e2066", primary: true },
          { label: "10% shade", hex: "#631d5c" },
          { label: "20% shade", hex: "#581a52" },
          { label: "30% shade", hex: "#4d1647" }
        ],
        [
          { label: "30% tint", hex: "#ef984d" },
          { label: "20% tint", hex: "#ed8933" },
          { label: "10% tint", hex: "#ea7b1a" },
          { label: "Orange", hex: "#e86c00", primary: true },
          { label: "10% shade", hex: "#d06100" },
          { label: "20% shade", hex: "#ba5600" },
          { label: "30% shade", hex: "#a24b00" }
        ],
        [
          {
            label: "White",
            hex: "#ffffff",
            bordered: true,
            inverted: true,
            primary: true
          },
          { label: "90% tint", hex: "#e9e9e9", inverted: true },
          { label: "60% tint", hex: "#a5a5a5" },
          { label: "30% tint", hex: "#616161" },
          { label: "Black", hex: "#1d1d1d", primary: true }
        ],
        [{ label: "Red", hex: "#c30000", primary: true }]
      ]}
    />
    <HeadingOne>{`Semantics`}</HeadingOne>
    <UnorderedList>
      <ListItem
      >{`Red - destructive actions like deleting or removing`}</ListItem>
      <ListItem
      >{`Orange - cautionary actions like loading or warning`}</ListItem>
      <ListItem
      >{`Green - positive actions like submitting or continuing`}</ListItem>
    </UnorderedList>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/issues/14">{`research`}</a>
      {` on GitHub.`}
    </Paragraph>
  </div>
);

export default Pages;
