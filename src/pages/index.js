import React from "react";

import Title from "../components/Title";
import Lede from "../components/Lede";
import HeadingOne from "../components/HeadingOne";
import HeadingTwo from "../components/HeadingTwo";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";
import ListItem from "../components/ListItem";

import "./index.css";

const Index = () => (
  <div>
    <Title>{`Design system`}</Title>
    <div className="Index-headingOne">
      <HeadingOne>{`Typography system`}</HeadingOne>
    </div>
    <div className="Index-paragraph">
      <Paragraph>{`The typographic system is:`}</Paragraph>
    </div>
    <div className="Index-unorderedList">
      <UnorderedList>
        <ListItem>{`a consistent baseline of 8px`}</ListItem>
        <ListItem>{`a scale based on multiples of 1.125`}</ListItem>
        <ListItem>{`line heights that are multiples of 4`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Index-headingTwo">
      <HeadingTwo>{`Suggested sizes and styles`}</HeadingTwo>
    </div>
    <div className="Index-typography">
      <div className="Index-typographyItem">
        <Title>{`Title 36px/40px (46px/48px)`}</Title>
        <div className="Index-typographyItemLabel">
          {`Proxima Nova Semi-Bold`}
        </div>
      </div>
      <div className="Index-typographyItem">
        <Lede>{`Lede 26px/32px`}</Lede>
        <div className="Index-typographyItemLabel">{`Proxima Nova Light`}</div>
      </div>
      <div className="Index-typographyItem">
        <HeadingOne>{`HeadingOne 29px/32px`}</HeadingOne>
        <div className="Index-typographyItemLabel">{`Proxima Nova Semi-Bold`}</div>
      </div>
      <div className="Index-typographyItem">
        <HeadingTwo>{`HeadingTwo 26px/32px`}</HeadingTwo>
        <div className="Index-typographyItemLabel">{`Proxima Nova Light`}</div>
      </div>
      <div className="Index-typographyItem">
        <Paragraph>{`Paragraph 16px/24px`}</Paragraph>
        <div className="Index-typographyItemLabel">{`system-ui light`}</div>
      </div>
    </div>
    <div className="Index-headingTwo">
      <HeadingOne>{`Typographic scale`}</HeadingOne>
    </div>
    <div className="Index-paragraph">
      <Paragraph>
        {`To ensure an optimal line length of 60 characters at different viewport
        sizes, the typographic system can be proportionally scaled.`}
      </Paragraph>
    </div>
    <div className="Index-paragraph">
      <Paragraph>{`For example, it can be scaled:`}</Paragraph>
    </div>
    <div className="Index-unorderedList">
      <UnorderedList>
        <ListItem>{`down to 93.75% giving a paragraph size of 15px`}</ListItem>
        <ListItem>{`up to 106.25% giving a paragraph size of 17px`}</ListItem>
      </UnorderedList>
    </div>
    <div className="Index-headingTwo">
      <HeadingTwo>{`Suggested scale`}</HeadingTwo>
    </div>
    <div className="Index-scale">
      <div className="Index-scaleItem">{`93.75%`}</div>
      <div className="Index-scaleItem">{`100%`}</div>
      <div className="Index-scaleItem">{`106.25%`}</div>
      <div className="Index-scaleItem">{`112.5%`}</div>
    </div>
  </div>
);

export default Index;
