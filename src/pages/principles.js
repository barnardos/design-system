import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
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
    <Heading>{`1. Start small`}</Heading>
    <Paragraph>{`Put work in front of real people early and often.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`start with user needs`}</ListItem>
      <ListItem>{`avoid making assumptions`}</ListItem>
      <ListItem>{`design for the most constrained environment`}</ListItem>
      <ListItem>{`test regularly with users`}</ListItem>
      <ListItem>{`iterate based on evidence`}</ListItem>
      <ListItem>{`release early`}</ListItem>
    </BulletedList>
    <Heading>{`2. Be inclusive`}</Heading>
    <Paragraph>{`Strive to support all who need the product.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`always consider accessibility`}</ListItem>
      <ListItem>{`priortise
    function over aesthetics`}</ListItem>
      <ListItem>{`provide legible
    and readable content`}</ListItem>
    </BulletedList>
    <Heading>{`3. Keep it simple`}</Heading>
    <Paragraph>{`Do the hard work so the user doesn't have to.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`provide the simplest
    journey for the majority`}</ListItem>
      <ListItem>{`only add complexity when justified`}</ListItem>
      <ListItem>{`hide underlying complex systems`}</ListItem>
      <ListItem>{`avoid deciding on a solution because "It's always been this way"`}</ListItem>
    </BulletedList>
    <Heading>{`4. Be consistent`}</Heading>
    <Paragraph>{`Build trust and familiarity across products.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`follow the `}
        <GatsbyLink className="Link" to="/guidance/">{`guidance`}</GatsbyLink>
      </ListItem>
      <ListItem>{`avoid reinventing the wheel`}</ListItem>
      <ListItem>
        {`write using `}
        <GatsbyLink
          className="Link"
          to="/guidance/writing-content/"
        >{`consistent language`}</GatsbyLink>
      </ListItem>
    </BulletedList>
    <Heading>{`5. Be open`}</Heading>
    <Paragraph>{`Be part of the open digital community.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`share
    what you're working on`}</ListItem>
      <ListItem>{`code in the open`}</ListItem>
      <ListItem>{`encourage collaboration`}</ListItem>
      <ListItem>{`learn from others`}</ListItem>
    </BulletedList>
    <Heading>{`6. Embrace digital`}</Heading>
    <Paragraph>{`Make the most of the medium's benefits.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`be comfortable with change`}</ListItem>
      <ListItem>{`respect the environment's constraints`}</ListItem>
      <ListItem>{`avoid print-based thinking`}</ListItem>
    </BulletedList>
  </Layout>
);

export default Pages;
