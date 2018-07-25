import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import HeadingOne from "../../components/HeadingOne";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`Writing content`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        },
        {
          text: "Guidance",
          to: "/guidance/"
        }
      ]}
    />
    <Title>{`Writing content`}</Title>
    <Paragraph>
      {`When writing content use inclusive language and imagine you're talking to the reader.`}
    </Paragraph>
    <Paragraph>{`To be clear and concise you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`avoid jargon`}</ListItem>
      <ListItem>{`avoid the passive`}</ListItem>
      <ListItem>{`use short sentences with one main idea`}</ListItem>
      <ListItem
      >{`use bulleted lists when paragraphs have more than four points`}</ListItem>
    </UnorderedList>
    <Paragraph>{`When styling your writing you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use sentence case`}</ListItem>

      <ListItem>{`avoid use of bold`}</ListItem>
      <ListItem>{`use italics for general emphasis`}</ListItem>
      <ListItem>{`use words for single-figure numbers`}</ListItem>
      <ListItem>{`use single quotation marks for quoted speech`}</ListItem>
      <ListItem>{`only use the ampersand when space is tight`}</ListItem>
      <ListItem>{`write dates as 9 January 2018`}</ListItem>
      <ListItem
      >{`use the 12-hour clock, for example 10am and 2.30pm`}</ListItem>
      <ListItem
      >{`use noon and midnight instead of 12 noon and 12 midnight`}</ListItem>
      <ListItem>{`start bullets with a lowercase`}</ListItem>
      <ListItem>{`end bullets without any punctuation`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`Spelling`}</HeadingOne>
    <UnorderedList>
      <ListItem>{`Barnardo’s (always with apostrophe)`}</ListItem>
      <ListItem>{`email (no hyphen)`}</ListItem>
      <ListItem
      >{`http:// (is not required, begin web addresses with www)`}</ListItem>
      <ListItem>{`online (one word)`}</ListItem>
      <ListItem
      >{`per cent (should be spelt in words, unless used in tables)`}</ListItem>
      <ListItem>{`postcode (no hyphen)`}</ListItem>
      <ListItem>{`website (no hyphen)`}</ListItem>
    </UnorderedList>
  </div>
);

export default Pages;
