import Helmet from "react-helmet";
import GatsbyLink from "gatsby-link";
import React from "react";

import AttentionGrabbingLink from "../components/AttentionGrabbingLink";
import HeadingOne from "../components/HeadingOne";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Linking`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <Title>{`Linking`}</Title>
    <Paragraph>{`Use the components below for linking.`}</Paragraph>
    <HeadingOne>{`Link`}</HeadingOne>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`use a meaningful phrase that makes sense out of context`}</ListItem>
      <ListItem>{`use the default styles`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <HeadingOne>
        <Link href="http://example.org">{`Heading of section`}</Link>
      </HeadingOne>
      <Paragraph>
        {`This is a paragraph, and it includes even more text to give a good
            representation of a more `}
        <Link href="http://example.org">{`average length paragraph`}</Link>
        {`.
            That way you can see more than one line wrapping.`}
      </Paragraph>
    </div>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/Link">{`code`}</a>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`AttentionGrabbingLink`}</HeadingOne>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`use a verb, for example donate`}</ListItem>
      <ListItem>{`not use the Green colour`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <AttentionGrabbingLink
        color="pink"
        href="http://example.org"
        text="Shop online"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        color="orange"
        href="http://example.org"
        text="Volunteer with us"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        color="teal"
        href="http://example.org"
        text="Foster today"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        color="purple"
        href="http://example.org"
        text="Donate"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        color="black"
        href="http://example.org"
        text="Commission us"
      />
    </div>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingLink">{`code`}</a>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/issues/47">{`research`}</a>
      {` on GitHub.`}
    </Paragraph>
  </div>
);

export default Pages;
