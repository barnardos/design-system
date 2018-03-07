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
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Colour`}</Title>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`The colour palette is:`}</Paragraph>
    </div>
    <Swatches
      swatches={[
        [
          { label: "30% tint", hex: "#a7d04d" },
          { label: "20% tint", hex: "#9ac933" },
          { label: "10% tint", hex: "#8ec31a" },
          { label: "Green", hex: "#81bc00", primary: true },
          { label: "10% shade", hex: "#74a900" },
          { label: "20% shade", hex: "#679600" },
          { label: "30% shade", hex: "#5a8300" }
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
          { label: "30% tint", hex: "#9b65a0" },
          { label: "20% tint", hex: "#8d4e92" },
          { label: "10% tint", hex: "#7f3985" },
          { label: "Purple", hex: "#702277", primary: true },
          { label: "10% shade", hex: "#651f6b" },
          { label: "20% shade", hex: "#5a1b5f" },
          { label: "30% shade", hex: "#4e1853" }
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
    <div className="Pages-headingOne">
      <HeadingOne>{`Semantics`}</HeadingOne>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem
        >{`Red - destructive actions like deleting or removing`}</ListItem>
        <ListItem
        >{`Orange - cautionary actions like loading or warning`}</ListItem>
        <ListItem
        >{`Green - positive actions like submitting or continuing`}</ListItem>
      </UnorderedList>
    </div>
  </div>
);

export default Pages;
