import Helmet from "react-helmet";
import React from "react";

import AttentionGrabbingQuote from "../../components/AttentionGrabbingQuote";
import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Fact from "../../components/Fact";
import Caption from "../../components/Caption";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";
import UnorderedListItem from "../../components/UnorderedListItem";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Displaying information`}</title>
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
    <Title>{`Displaying information`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Lists",
          to: "/guidance/displaying-information/#lists"
        },
        {
          level: 2,
          text: "Unordered List Item",
          to: "/guidance/displaying-information/#unordered-list-item"
        },
        {
          level: 1,
          text: "Caption",
          to: "/guidance/displaying-information/#caption"
        },
        {
          level: 1,
          text: "Fact",
          to: "/guidance/displaying-information/#fact"
        },
        {
          level: 1,
          text: "Quotes",
          to: "/guidance/displaying-information/#quotes"
        },
        {
          level: 2,
          text: "Quote",
          to: "/guidance/displaying-information/#quote"
        },
        {
          level: 2,
          text: "Attention Grabbing Quote",
          to: "/guidance/displaying-information/#attention-grabbing-quote"
        }
      ]}
    />
    <Paragraph>{`When displaying information you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`provide a meaningful content hierarchy`}</ListItem>
    </UnorderedList>
    <Heading>{`Lists`}</Heading>
    <Paragraph>{`Use the component below for lists. You should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`introduce with a descriptive sentence`}</ListItem>
      <ListItem>{`aim to keep the length of items similar`}</ListItem>
      <ListItem>{`avoid starting items with the same word`}</ListItem>
    </UnorderedList>
    <Subheading>{`Unordered List Item`}</Subheading>
    <Paragraph>{`Use this component when the sequence or count of items isn’t important.`}</Paragraph>
    <div className="Pages-example">
      <Paragraph>{`There has been particular improvements in: `}</Paragraph>
      <UnorderedList>
        <UnorderedListItem>{`families feeling less isolated`}</UnorderedListItem>
        <UnorderedListItem>{`reduced parental stress`}</UnorderedListItem>
      </UnorderedList>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/UnorderedListItem">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/325">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Caption`}</Heading>
    <Paragraph>{`Use this component to add a caption, for example to images and videos.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`be clear and concise`}</ListItem>
      <ListItem>{`provide a description that makes sense out of context`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Caption label="Participants receiving their certificate">
        <Image
          src="https://dummyimage.com/1200x675/bbbbbb/d2d2d2.png&amp;text=16:9"
          alt="A 6:9 dummy image"
        />
      </Caption>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Caption">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/300">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Fact`}</Heading>
    <Paragraph>{`Use this component for facts.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use data that’s compelling and easy to understand`}</ListItem>
      <ListItem>{`limit the number on each page`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Fact label="children supported through our school-based programmes">{`23,500`}</Fact>
    </div>
    <div className="Pages-example">
      <Fact colour="purple" label="had improved self-esteem">{`73%`}</Fact>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Fact">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/212">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Quotes`}</Heading>
    <Paragraph>{`Use these components for quotes, for example an excerpt from an article or quotation from a person.`}</Paragraph>
    <Subheading>{`Quote`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use a short sentence with one main idea`}</ListItem>
      <ListItem>{`limit the number on each page`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Quote>{`Parents needed more support with their emotional wellbeing, boundaries, behaviour, home and money.`}</Quote>
    </div>
    <div className="Pages-example">
      <Quote
        colour="pink"
        role="Young person"
      >{`Someone believed in me once and now it’s time for me to do the same.`}</Quote>
    </div>
    <div className="Pages-example">
      <Quote
        colour="orange"
        name="John Smith"
        role="Teacher"
        src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
      >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</Quote>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Quote">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/252">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Attention Grabbing Quote`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use it once on each page`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <AttentionGrabbingQuote
        colour="green"
        role="Young person"
        name="James Roberts"
      >{`By tackling the causes as well as the symptoms, we can create better outcomes for more children.`}</AttentionGrabbingQuote>
    </div>
    <div className="Pages-example">
      <AttentionGrabbingQuote colour="black">{`I just needed a push in the right direction, and a stepping stone to act as a bridge across to adulthood. I finally feel that I'm closer to being happy.`}</AttentionGrabbingQuote>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingQuote">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/321">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;
