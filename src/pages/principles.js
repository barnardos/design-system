import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Principles`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Principles`}</Title>
    <HeadingOne>{`1. Start small`}</HeadingOne>
    <Paragraph>{`Put work in front of real people early and often.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`start with user needs`}</ListItem>
      <ListItem>{`avoid making assumptions`}</ListItem>
      <ListItem>{`design for the most constrained environment`}</ListItem>
      <ListItem>{`test regularly with users`}</ListItem>
      <ListItem>{`iterate based on evidence`}</ListItem>
      <ListItem>{`release early`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`2. Be inclusive`}</HeadingOne>
    <Paragraph>{`Strive to support all who need the product.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`always consider accessibility`}</ListItem>
      <ListItem>{`priortise
    function over aesthetics`}</ListItem>
      <ListItem>{`provide legible
    and readable content`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`3. Keep it simple`}</HeadingOne>
    <Paragraph>{`Do the hard work so the user doesn't have to.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`provide the simplest
    journey for the majority`}</ListItem>
      <ListItem>{`only add complexity when justified`}</ListItem>
      <ListItem>{`hide underlying complex systems`}</ListItem>
      <ListItem
      >{`avoid deciding on a solution because "It's always been this way"`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`4. Be consistent`}</HeadingOne>
    <Paragraph>{`Build trust and familiarity across products.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>
        {`follow the `}
        <GatsbyLink to="/guidance/">{`guidance`}</GatsbyLink>
      </ListItem>
      <ListItem>{`avoid reinventing the wheel`}</ListItem>
      <ListItem>
        {`write using `}
        <GatsbyLink to="/guidance/writing-content/">{`consistent language`}</GatsbyLink>
      </ListItem>
    </UnorderedList>
    <HeadingOne>{`5. Be open`}</HeadingOne>
    <Paragraph>{`Be part of the open digital community.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`share
    what you're working on`}</ListItem>
      <ListItem>{`code in the open`}</ListItem>
      <ListItem>{`encourage collaboration`}</ListItem>
      <ListItem>{`learn from others`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`6. Embrace digital`}</HeadingOne>
    <Paragraph>{`Make the most of the medium's benefits.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`be comfortable with change`}</ListItem>
      <ListItem>{`respect the environment's constraints`}</ListItem>
      <ListItem>{`avoid print-based thinking`}</ListItem>
    </UnorderedList>
  </div>
);

export default Pages;
