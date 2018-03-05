import GatsbyLink from "gatsby-link";
import React from "react";

import Title from "../components/Title";
import Lede from "../components/Lede";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

import layoutExample from "./layout-example.svg";
import "./index.css";

const Pages = () => (
  <div>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div className="Pages-title">
      <Title>{`Typography and layout`}</Title>
    </div>
    <div className="Pages-rules">
      <HeadingOne>{`The three rules are:`}</HeadingOne>
      <div className="Pages-unorderedList">
        <UnorderedList>
          <ListItem>{`spacing that is multiples of 8px`}</ListItem>
          <ListItem>{`line heights that are multiples of 4px`}</ListItem>
          <ListItem
          >{`a typographic scale that is multiples of 1.125 with a base of 16px`}</ListItem>
        </UnorderedList>
      </div>
    </div>
    <div className="Pages-example">
      <img className="Pages-image" src={layoutExample} alt="" />
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Grid`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`The spacing rule provides a flexible foundation for a grid.`}</Paragraph>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`For example, symmetric grids can be:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`12col/16px gutter`}</ListItem>
        <ListItem>{`8col/16px gutter`}</ListItem>
        <ListItem>{`4col/16px gutter`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Type`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`The line height and typographic scale rules provide flexibility to produce a visual hierarchy.`}</Paragraph>
    </div>
    <div className="Pages-paragraph">
      <Paragraph
      >{`For example, a visual hierarchy with specific type styles can be:`}</Paragraph>
    </div>
    <div className="Pages-typography">
      <div className="Pages-typographyItem">
        <Title>{`Title 36px/40px (46px/48px)`}</Title>
        <div className="Pages-typographyItemLabel">
          {`Proxima Nova Semi-Bold`}
        </div>
      </div>
      <div className="Pages-typographyItem">
        <Lede>{`Lede 26px/32px`}</Lede>
        <div className="Pages-typographyItemLabel">{`Proxima Nova Light`}</div>
      </div>
      <div className="Pages-typographyItem">
        <HeadingOne>{`HeadingOne 29px/32px`}</HeadingOne>
        <div className="Pages-typographyItemLabel">{`Proxima Nova Semi-Bold`}</div>
      </div>
      <div className="Pages-typographyItem">
        <HeadingTwo>{`HeadingTwo 26px/32px`}</HeadingTwo>
        <div className="Pages-typographyItemLabel">{`Proxima Nova Light`}</div>
      </div>
      <div className="Pages-typographyItem">
        <Paragraph>{`Paragraph 16px/24px`}</Paragraph>
        <div className="Pages-typographyItemLabel">{`system-ui light`}</div>
      </div>
    </div>
    <div className="Pages-headingOne">
      <HeadingOne>{`Scaling`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>
        {`To ensure optimal spacing and line lengths at
        different viewport sizes, the layout and typography can be proportionally scaled:`}
      </Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem
        >{`down to 93.75% giving a paragraph size and guttering of 15px`}</ListItem>
        <ListItem
        >{`up to 106.25% giving a paragraph size and guttering  of 17px`}</ListItem>
        <ListItem
        >{`further up to 112.5% giving a paragraph size and guttering of 18px`}</ListItem>
      </UnorderedList>
    </div>
  </div>
);

export default Pages;
