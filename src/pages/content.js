import Helmet from "react-helmet";
import React from "react";

import BlockQuote from "../components/BlockQuote";
import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Caption from "../components/Caption";
import Cite from "../components/Cite";
import Content from "../components/Content";
import ContentHeader from "../components/ContentHeader";
import ContentsMenu from "../components/ContentsMenu";
import ContentWithMenu from "../components/ContentWithMenu";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Example from "../components/Example";
import Fact from "../components/Fact";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Lede from "../components/Lede";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Main from "../components/Main";
import Paragraph from "../components/Paragraph";
import ProminentBlockQuote from "../components/ProminentBlockQuote";
import PullQuote from "../components/PullQuote";
import Section from "../components/Section";
import Subheading from "../components/Subheading";
import Title from "../components/Title";
import Topic from "../components/Topic";

export const indexItems = [
  {
    level: 1,
    text: "Type styles",
    to: "/content/#type-styles"
  },
  {
    level: 2,
    text: "Title",
    to: "/content/#title"
  },
  {
    level: 2,
    text: "Lede",
    to: "/content/#lede"
  },
  {
    level: 2,
    text: "Heading",
    to: "/content/#heading"
  },
  {
    level: 2,
    text: "Subheading",
    to: "/content/#subheading"
  },
  {
    level: 2,
    text: "Paragraph",
    to: "/content/#paragraph"
  },
  {
    level: 2,
    text: "Cite",
    to: "/content/#cite"
  },
  {
    level: 1,
    text: "Lists",
    to: "/content/#lists"
  },
  {
    level: 2,
    text: "Bulleted List",
    to: "/content/#bulleted-list"
  },
  {
    level: 1,
    text: "Quotes",
    to: "/content/#quotes"
  },
  {
    level: 2,
    text: "Pull Quote",
    to: "/content/#pull-quote"
  },
  {
    level: 2,
    text: "Block Quote",
    to: "/content/#block-quote"
  },
  {
    level: 2,
    text: "Prominent Block Quote",
    to: "/content/#prominent-block-quote"
  },
  {
    level: 1,
    text: "Caption",
    to: "/content/#caption"
  },
  {
    level: 1,
    text: "Fact",
    to: "/content/#fact"
  },
  {
    level: 1,
    text: "Section",
    to: "/content/#section"
  }
];

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Content`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Main>
      <ContentWithMenu>
        <ContentHeader>
          <Topic>{`Components`}</Topic>
          <Title>{`Content`}</Title>
        </ContentHeader>
        <ContentsMenu items={indexItems} />
        <Content>
          <Paragraph>{`When displaying content you should provide a meaningful content hierarchy.`}</Paragraph>
          <Heading>{`Type styles`}</Heading>
          <Subheading>{`Title`}</Subheading>
          <Example>
            <Title>{`What we do`}</Title>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Title">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Lede`}</Subheading>
          <Example>
            <Lede>{`How we support children and families`}</Lede>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Lede">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Heading`}</Subheading>
          <Example>
            <Heading>{`Fostering and adoption`}</Heading>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Heading">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Subheading`}</Subheading>
          <Example>
            <Subheading>{`Foster a child`}</Subheading>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Subheading">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Paragraph`}</Subheading>
          <Example>
            <Paragraph>{`We build stronger families, safer childhoods and positive futures.`}</Paragraph>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Paragraph">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Cite`}</Subheading>
          <Example>
            <Cite>{`© Barnardo's`}</Cite>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Cite">{`code`}</Link>
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
          <Heading>{`Quotes`}</Heading>
          <Paragraph>{`When using these components you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`choose short sentences with one main idea`}</ListItem>
            <ListItem>{`limit the number on each page`}</ListItem>
          </BulletedList>
          <Subheading>{`Pull Quote`}</Subheading>
          <Paragraph>{`Use this component to emphasise an excerpt from the main content.`}</Paragraph>
          <Example>
            <PullQuote>{`Parents needed more support with their emotional wellbeing, boundaries, behaviour, home and money.`}</PullQuote>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/PullQuote">{`code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/321">{`research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Block Quote`}</Subheading>
          <Paragraph>{`Use this component to display a quotation from a person.`}</Paragraph>
          <Example>
            <BlockQuote
              colour="pink"
              role="Young person"
            >{`Someone believed in me once and now it’s time for me to do the same.`}</BlockQuote>
          </Example>
          <Example>
            <BlockQuote
              colour="orange"
              name="John Smith"
              role="Teacher"
              src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
            >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</BlockQuote>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BlockQuote">{`code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/252">{`research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Prominent Block Quote`}</Subheading>
          <Paragraph>{`When using this component you should only use it once on each page.`}</Paragraph>
          <Example>
            <ProminentBlockQuote
              colour="green"
              role="Young person"
              name="James Roberts"
            >{`By tackling the causes as well as the symptoms, we can create better outcomes for more children.`}</ProminentBlockQuote>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentBlockQuote">{`code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/321">{`research`}</Link>
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
            <Fact
              colour="purple"
              label="had improved self-esteem"
            >{`73%`}</Fact>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Fact">{`code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/212">{`research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Section`}</Heading>
          <Paragraph>{`Use this component to section parts of content.`}</Paragraph>
          <Example>
            <Section>
              <Paragraph>{`1st section`}</Paragraph>
            </Section>
            <Section>
              <Paragraph>{`2nd section`}</Paragraph>
            </Section>
            <Section>
              <Paragraph>{`3rd section`}</Paragraph>
            </Section>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Section">{`code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/462">{`research`}</Link>
            {` on GitHub.`}
          </Cite>
        </Content>
      </ContentWithMenu>
    </Main>
  </DesignSystemLayout>
);

export default Page;
