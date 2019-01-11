import Helmet from "react-helmet";
import React from "react";

import AttentionGrabbingQuote from "../components/AttentionGrabbingQuote";
import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Fact from "../components/Fact";
import Example from "../components/Example";
import Caption from "../components/Caption";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Image from "../components/Image";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Quote from "../components/Quote";
import DesignSystemIndex from "../components/DesignSystemIndex";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Displaying content`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Displaying content`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Type",
          to: "/displaying-content/#type"
        },
        {
          level: 2,
          text: "Title",
          to: "/displaying-content/#title"
        },
        {
          level: 2,
          text: "Lede",
          to: "/displaying-content/#lede"
        },
        {
          level: 2,
          text: "Heading",
          to: "/displaying-content/#heading"
        },
        {
          level: 2,
          text: "Subheading",
          to: "/displaying-content/#subheading"
        },
        {
          level: 2,
          text: "Paragraph",
          to: "/displaying-content/#paragraph"
        },
        {
          level: 1,
          text: "Lists",
          to: "/displaying-content/#lists"
        },
        {
          level: 2,
          text: "Bulleted List",
          to: "/displaying-content/#bulleted-list"
        },
        {
          level: 1,
          text: "Caption",
          to: "/displaying-content/#caption"
        },
        {
          level: 1,
          text: "Fact",
          to: "/displaying-content/#fact"
        },
        {
          level: 1,
          text: "Quotes",
          to: "/displaying-content/#quotes"
        },
        {
          level: 2,
          text: "Quote",
          to: "/displaying-content/#quote"
        },
        {
          level: 2,
          text: "Attention Grabbing Quote",
          to: "/displaying-content/#attention-grabbing-quote"
        }
      ]}
    />
    <Paragraph>{`When displaying content you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`provide a meaningful content hierarchy`}</ListItem>
    </BulletedList>
    <Heading>{`Type hierarchy`}</Heading>
    <Example>
      <Title>{`Title`}</Title>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Title">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Example>
      <Lede>{`Lede`}</Lede>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Lede">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Example>
      <Heading>{`Heading`}</Heading>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Heading">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Example>
      <Subheading>{`Subheading`}</Subheading>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Subheading">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Example>
      <Paragraph>{`Paragraph`}</Paragraph>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Paragraph">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Lists`}</Heading>
    <Paragraph>{`Use the component below for lists. You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`introduce with a descriptive sentence`}</ListItem>
      <ListItem>{`aim to keep the length of items similar`}</ListItem>
      <ListItem>{`avoid starting items with the same word`}</ListItem>
    </BulletedList>
    <Subheading>{`Bulleted List`}</Subheading>
    <Paragraph>{`Use this component when the sequence or count of items isn’t important.`}</Paragraph>
    <Example>
      <Paragraph>{`There has been particular improvements in: `}</Paragraph>
      <BulletedList>
        <ListItem>{`families feeling less isolated`}</ListItem>
        <ListItem>{`reduced parental stress`}</ListItem>
      </BulletedList>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BulletedListItem">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/325">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Caption`}</Heading>
    <Paragraph>{`Use this component to add a caption, for example to images and videos.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`be clear and concise`}</ListItem>
      <ListItem>{`provide a description that makes sense out of context`}</ListItem>
    </BulletedList>
    <Example>
      <Caption label="Participants receiving their certificate">
        <Image
          src="https://dummyimage.com/1200x675/bbbbbb/d2d2d2.png&amp;text=16:9"
          alt="A 6:9 dummy image"
        />
      </Caption>
    </Example>
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
    <BulletedList>
      <ListItem>{`use data that’s compelling and easy to understand`}</ListItem>
      <ListItem>{`limit the number on each page`}</ListItem>
    </BulletedList>
    <Example>
      <Fact label="children supported through our school-based programmes">{`23,500`}</Fact>
    </Example>
    <Example>
      <Fact colour="purple" label="had improved self-esteem">{`73%`}</Fact>
    </Example>
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
    <BulletedList>
      <ListItem>{`use a short sentence with one main idea`}</ListItem>
      <ListItem>{`limit the number on each page`}</ListItem>
    </BulletedList>
    <Example>
      <Quote>{`Parents needed more support with their emotional wellbeing, boundaries, behaviour, home and money.`}</Quote>
    </Example>
    <Example>
      <Quote
        colour="pink"
        role="Young person"
      >{`Someone believed in me once and now it’s time for me to do the same.`}</Quote>
    </Example>
    <Example>
      <Quote
        colour="orange"
        name="John Smith"
        role="Teacher"
        src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
      >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</Quote>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Quote">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/252">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Attention Grabbing Quote`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only use it once on each page`}</ListItem>
    </BulletedList>
    <Example>
      <AttentionGrabbingQuote
        colour="green"
        role="Young person"
        name="James Roberts"
      >{`By tackling the causes as well as the symptoms, we can create better outcomes for more children.`}</AttentionGrabbingQuote>
    </Example>
    <Example>
      <AttentionGrabbingQuote colour="black">{`I just needed a push in the right direction, and a stepping stone to act as a bridge across to adulthood. I finally feel that I'm closer to being happy.`}</AttentionGrabbingQuote>
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingQuote">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/321">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
