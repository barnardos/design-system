import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

const Page = () => (
  <DesignSystemLayout>
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
    <Heading>{`Start small`}</Heading>
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
    <Heading>{`Be inclusive`}</Heading>
    <Paragraph>{`Strive to support all who need the product.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`always consider accessibility`}</ListItem>
      <ListItem>{`priortise
    function over aesthetics`}</ListItem>
      <ListItem>{`provide legible
    and readable content`}</ListItem>
    </BulletedList>
    <Heading>{`Keep it simple`}</Heading>
    <Paragraph>{`Do the hard work so the user doesn't have to.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`provide the simplest
    journey for the majority`}</ListItem>
      <ListItem>{`only add complexity when justified`}</ListItem>
      <ListItem>{`hide underlying complex systems`}</ListItem>
      <ListItem>{`avoid deciding on a solution because "It's always been this way"`}</ListItem>
    </BulletedList>
    <Heading>{`Embrace digital`}</Heading>
    <Paragraph>{`Make the most of the medium's benefits.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`be comfortable with change`}</ListItem>
      <ListItem>{`respect the environment's constraints`}</ListItem>
      <ListItem>{`avoid print-based thinking`}</ListItem>
    </BulletedList>
    <Heading>{`Be consistent`}</Heading>
    <Paragraph>{`Build trust and familiarity across products.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`follow the standards`}</ListItem>
      <ListItem>{`follow consistent language`}</ListItem>
      <ListItem>{`avoid reinventing the wheel`}</ListItem>
    </BulletedList>
    <Heading>{`Be open`}</Heading>
    <Paragraph>{`Be part of the open digital community.`}</Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`share
    what you're working on`}</ListItem>
      <ListItem>{`code in the open`}</ListItem>
      <ListItem>{`encourage collaboration`}</ListItem>
      <ListItem>{`learn from others`}</ListItem>
    </BulletedList>
  </DesignSystemLayout>
);

export default Page;
