import React from "react";

import BlockQuote from "../../components/BlockQuote";
import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Caption from "../../components/Caption";
import Cite from "../../components/Cite";
import Code from "../../components/Code";
import Content from "../../components/Content";
import ContentsMenu from "../../components/ContentsMenu";
import Contents from "../../components/Contents";
import Page from "../../components/Page";
import Callout from "../../components/Callout";
import Example from "../../components/Example";
import Fact from "../../components/Fact";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import NumberedList from "../../components/NumberedList";
import Paragraph from "../../components/Paragraph";
import ProminentBlockQuote from "../../components/ProminentBlockQuote";
import ProminentCallout from "../../components/ProminentCallout";
import PullQuote from "../../components/PullQuote";
import Section from "../../components/Section";
import Subheading from "../../components/Subheading";
import Title from "../../components/Title";
import Topic from "../../components/Topic";

export const indexItems = [
  {
    level: 1,
    text: "Type",
    href: "/components/content/#type-styles"
  },
  {
    level: 2,
    text: "Title",
    href: "/components/content/#title"
  },
  {
    level: 2,
    text: "Lede",
    href: "/components/content/#lede"
  },
  {
    level: 2,
    text: "Heading",
    href: "/components/content/#heading"
  },
  {
    level: 2,
    text: "Subheading",
    href: "/components/content/#subheading"
  },
  {
    level: 2,
    text: "Paragraph",
    href: "/components/content/#paragraph"
  },
  {
    level: 2,
    text: "Cite",
    href: "/components/content/#cite"
  },
  {
    level: 1,
    text: "Lists",
    href: "/components/content/#lists"
  },
  {
    level: 2,
    text: "Bulleted List",
    href: "/components/content/#bulleted-list"
  },
  {
    level: 2,
    text: "Numbered List",
    href: "/components/content/#numbered-list"
  },
  {
    level: 1,
    text: "Images",
    href: "/components/content/#images"
  },
  {
    level: 1,
    text: "Videos",
    href: "/components/content/#videos"
  },
  {
    level: 1,
    text: "Quotes",
    href: "/components/content/#quotes"
  },
  {
    level: 2,
    text: "Pull Quote",
    href: "/components/content/#pull-quote"
  },
  {
    level: 2,
    text: "Block Quote",
    href: "/components/content/#block-quote"
  },
  {
    level: 2,
    text: "Prominent Block Quote",
    href: "/components/content/#prominent-block-quote"
  },
  {
    level: 1,
    text: "Caption",
    href: "/components/content/#caption"
  },
  {
    level: 1,
    text: "Fact",
    href: "/components/content/#fact"
  },
  {
    level: 1,
    text: "Callouts",
    href: "/components/content/#callouts"
  },
  {
    level: 2,
    text: "Callout",
    href: "/components/content/#callout"
  },
  {
    level: 2,
    text: "Prominent Callout",
    href: "/components/content/#prominent-callout"
  },
  {
    level: 1,
    text: "Section",
    href: "/components/content/#section"
  }
];

export default () => (
  <Page title="Content">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Components",
          href: "/components/"
        }
      ]}
    />
    <Main>
      <Title>Content</Title>
      <Contents>
        <ContentsMenu items={indexItems} />
        <Content>
          <Heading>Type</Heading>
          <Paragraph>
            Use these components to create a type hierarchy.
          </Paragraph>
          <Paragraph>
            If your product has additional needs, follow the standards in{" "}
            <Link href="/standards/typography/">Typography</Link>.
          </Paragraph>
          <Subheading>Topic</Subheading>
          <Example>
            <div
              style={{
                paddingBottom: "1rem"
              }}
            >
              <Topic>Raising awareness</Topic>
            </div>
          </Example>
          <Subheading>Title</Subheading>
          <Example>
            <Title>What we do</Title>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Title">
              Title code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Lede</Subheading>
          <Example>
            <Lede>How we support children and families</Lede>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Lede">
              Lede code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Heading</Subheading>
          <Example>
            <Heading>Fostering and adoption</Heading>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Heading">
              Heading code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Subheading</Subheading>
          <Example>
            <Subheading>Foster a child</Subheading>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Subheading">
              Subheading code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Paragraph</Subheading>
          <Example>
            <Paragraph>
              We build stronger families, safer childhoods and positive futures.
            </Paragraph>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Paragraph">
              Paragraph code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Cite</Subheading>
          <Example>
            <Cite>© Barnardo’s</Cite>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Cite">
              Cite code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Lists</Heading>
          <Paragraph>Use the component below for lists.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>limit the number on each page</ListItem>
            <ListItem>introduce with a descriptive sentence</ListItem>
            <ListItem>aim to keep the length of items similar</ListItem>
            <ListItem>avoid starting items with the same word</ListItem>
          </BulletedList>
          <Subheading>Bulleted List</Subheading>
          <Paragraph>
            Use this component when there is no specific sequence or order to
            the items.
          </Paragraph>
          <Example>
            <Paragraph>
              When talking with a professional you should mention:
            </Paragraph>
            <BulletedList>
              <ListItem>when the problems started</ListItem>
              <ListItem>if there’s a pattern in the problems</ListItem>
              <ListItem>any difficulties in school or with friends</ListItem>
              <ListItem>
                any big family issues like divorce or bereavement
              </ListItem>
            </BulletedList>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BulletedList">
              Bulleted List code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/325">
              Bulleted List research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Numbered List</Subheading>
          <Paragraph>
            Use this component when the items have a specific sequence or count.
          </Paragraph>
          <Example>
            <Paragraph>
              If you think your child may be suffering from mental health
              difficulties:
            </Paragraph>
            <NumberedList>
              <ListItem>Lean on your support network.</ListItem>
              <ListItem>Tell your child about childline.</ListItem>
              <ListItem>Talk to your child’s school.</ListItem>
              <ListItem>Visit your child’s GP.</ListItem>
            </NumberedList>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/NumberedList">
              Numbered List code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/623">
              Numbered List research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Images</Heading>
          <Paragraph>When displaying images you should:</Paragraph>
          <BulletedList>
            <ListItem>match the tone of the surrounding copy</ListItem>
            <ListItem>
              include descriptive <Code>alt</Code> tags in the code
            </ListItem>
          </BulletedList>
          <Heading>Videos</Heading>
          <Paragraph>When displaying videos you should:</Paragraph>
          <BulletedList>
            <ListItem>include subtitles</ListItem>
            <ListItem>include a transcription</ListItem>
          </BulletedList>
          <Heading>Quotes</Heading>
          <Paragraph>When using these components you should:</Paragraph>
          <BulletedList>
            <ListItem>choose short sentences with one main idea</ListItem>
            <ListItem>limit the number on each page</ListItem>
          </BulletedList>
          <Subheading>Pull Quote</Subheading>
          <Paragraph>
            Use this component to emphasise an excerpt from the main content.
          </Paragraph>
          <Example>
            <PullQuote>
              Parents needed more support with their emotional wellbeing,
              boundaries, behaviour, home and money.
            </PullQuote>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/PullQuote">
              Pull Quote code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/252">
              Pull Quote research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Block Quote</Subheading>
          <Paragraph>
            Use this component to display a quotation from a person.
          </Paragraph>
          <Paragraph>
            When quoting authoritative adults, ensure they have experience
            working with young people.
          </Paragraph>
          <Example>
            <BlockQuote colour="pink" role="Young person">
              Someone believed in me once and now it’s time for me to do the
              same.
            </BlockQuote>
          </Example>
          <Example>
            <BlockQuote
              colour="orange"
              name="John Smith"
              role="Teacher"
              src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
            >
              The family support worker is able to engage and build positive
              relationships with families who previously kept their distance
              from school.
            </BlockQuote>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BlockQuote">
              Block Quote code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/252">
              Block Quote research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Prominent Block Quote</Subheading>
          <Paragraph>
            When using this component you should only use it once on each page.
          </Paragraph>
          <Example>
            <ProminentBlockQuote role="Young person" name="James Roberts">
              By tackling the causes as well as the symptoms, we can create
              better outcomes for more children.
            </ProminentBlockQuote>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentBlockQuote">
              Prominent Block Quote code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/321">
              Prominent Block Quote research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Caption</Heading>
          <Paragraph>
            Use this component to add a caption, for example to images and
            videos.
          </Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>be clear and concise</ListItem>
            <ListItem>
              provide a description that makes sense out of context
            </ListItem>
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
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Caption">
              Caption code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/300">
              Caption research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Fact</Heading>
          <Paragraph>Use this component for facts.</Paragraph>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>
              use data that’s compelling and easy to understand
            </ListItem>
            <ListItem>limit the number on each page</ListItem>
          </BulletedList>
          <Example>
            <Fact label="children supported through our school-based programmes">
              23,500
            </Fact>
          </Example>
          <Example>
            <Fact colour="purple" label="had improved self-esteem">
              73%
            </Fact>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Fact">
              Fact code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/212">
              Fact research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Callouts</Heading>
          <Subheading>Callout</Subheading>
          <Paragraph>
            Use this component to callout parts of the content.
          </Paragraph>
          <Example>
            <Callout>
              <Subheading>Barnardo’s The Triangle</Subheading>
              <Paragraph>
                2 Coxwell Road
                <br />
                London
                <br />
                SE19 3BG
              </Paragraph>
              <Paragraph>02097710907</Paragraph>
            </Callout>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Callout">
              Callout code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/500">
              Callout research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Prominent Callout</Subheading>
          <Paragraph>
            Use this component to prominently callout parts of the content.
          </Paragraph>
          <Example>
            <ProminentCallout heading="Tips for dealing with stress:">
              <BulletedList>
                <ListItem>listen to calming music</ListItem>
                <ListItem>write or draw what you want to happen</ListItem>
                <ListItem>go for a walk or do some exercise</ListItem>
                <ListItem>play a game</ListItem>
              </BulletedList>
            </ProminentCallout>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentCallout">
              Prominent Callout code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/665">
              Prominent Callout research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Section</Heading>
          <Paragraph>Use this component to section parts of content.</Paragraph>
          <Example>
            <div
              style={{
                paddingBottom: "4rem"
              }}
            >
              <Section>
                <Paragraph>1st section</Paragraph>
              </Section>
              <Section>
                <Paragraph>2nd section</Paragraph>
              </Section>
              <Section>
                <Paragraph>3rd section</Paragraph>
              </Section>
            </div>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Section">
              Section code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/462">
              Section research
            </Link>{" "}
            on GitHub.
          </Cite>
        </Content>
      </Contents>
    </Main>
  </Page>
);
