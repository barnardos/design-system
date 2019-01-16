import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Style`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Writing standards`}</Topic>
    <Title>{`Style`}</Title>
    <Paragraph>
      {`When writing content use inclusive language and imagine you're talking to the reader.`}
    </Paragraph>
    <Paragraph>{`To be clear and concise you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`avoid jargon`}</ListItem>
      <ListItem>{`avoid the passive`}</ListItem>
      <ListItem>{`use short sentences with one main idea`}</ListItem>
      <ListItem>{`use bulleted lists when paragraphs have more than four points`}</ListItem>
    </BulletedList>
    <Paragraph>{`When styling your writing you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`avoid use of bold`}</ListItem>
      <ListItem>{`use italics for general emphasis`}</ListItem>
      <ListItem>{`use words for single-figure numbers`}</ListItem>
      <ListItem>{`use single quotation marks for quoted speech`}</ListItem>
      <ListItem>{`only use the ampersand when space is tight`}</ListItem>
      <ListItem>{`write dates as 9 January 2018`}</ListItem>
      <ListItem>{`use the 12-hour clock, for example 10am and 2.30pm`}</ListItem>
      <ListItem>{`use noon and midnight instead of 12 noon and 12 midnight`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/87">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Pagination
      next={{
        to: "/spelling",
        label: "Spelling"
      }}
    />
  </DesignSystemLayout>
);

export default Page;
