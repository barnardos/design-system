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
    <div className="Pages-paragraph">
      <Paragraph>{`The system is:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem>{`a grid with consistent spacing of 8px`}</ListItem>
        <ListItem>{`line heights that are multiples of 4px`}</ListItem>
        <ListItem>{`a typographic scale based on multiples of 1.125`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Suggested symmetric grid`}</HeadingTwo>
    </div>
    <div className="Pages-scale">
      <div className="Pages-scaleItem">{`12col/16px gutter`}</div>
      <div className="Pages-scaleItem">{`8col/16px gutter`}</div>
      <div className="Pages-scaleItem">{`4col/16px gutter`}</div>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Suggested sizes and styles`}</HeadingTwo>
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
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Example of consistent 8px spacing`}</HeadingTwo>
    </div>
    <div className="Pages-example">
      <img className="Pages-image" src={layoutExample} alt="" />
    </div>
    <div className="Pages-headingTwo">
      <HeadingOne>{`Scaling`}</HeadingOne>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>
        {`To ensure optimal white space and line lengths of 60 characters at
        different viewport sizes, the layout and typography can be scaled proportionally.`}
      </Paragraph>
    </div>
    <div className="Pages-paragraph">
      <Paragraph>{`For example, it can be scaled:`}</Paragraph>
    </div>
    <div className="Pages-unorderedList">
      <UnorderedList>
        <ListItem
        >{`down to 93.75% giving a paragraph size and guttering of 15px`}</ListItem>
        <ListItem
        >{`up to 106.25% giving a paragraph size and guttering  of 17px`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Pages-headingTwo">
      <HeadingTwo>{`Suggested scale`}</HeadingTwo>
    </div>
    <div className="Pages-scale">
      <div className="Pages-scaleItem">{`93.75%`}</div>
      <div className="Pages-scaleItem">{`100%`}</div>
      <div className="Pages-scaleItem">{`106.25%`}</div>
      <div className="Pages-scaleItem">{`112.5%`}</div>
    </div>
  </div>
);

export default Pages;
