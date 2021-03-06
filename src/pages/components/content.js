import { withPrefix } from "gatsby";
import React from "react";

import BlockQuote from "../../components/BlockQuote";
import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Callout from "../../components/Callout";
import Caption from "../../components/Caption";
import Cite from "../../components/Cite";
import Code from "../../components/Code";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Details from "../../components/Details";
import Example from "../../components/Example";
import Fact from "../../components/Fact";
import Heading from "../../components/Heading";
import Hero from "../../components/Hero";
import Image from "../../components/Image";
import Lede from "../../components/Lede";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import NumberedList from "../../components/NumberedList";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import ProminentBlockQuote from "../../components/ProminentBlockQuote";
import ProminentCallout from "../../components/ProminentCallout";
import PullQuote from "../../components/PullQuote";
import Section from "../../components/Section";
import Sections from "../../components/Sections";
import Subheading from "../../components/Subheading";
import Title from "../../components/Title";
import Topic from "../../components/Topic";
import Video from "../../components/Video";

export const items = [
  {
    text: "Type",
    href: "/components/content/#type",
    items: [
      {
        text: "Topic",
        href: "/components/content/#topic"
      },
      {
        text: "Title",
        href: "/components/content/#title"
      },
      {
        text: "Lede",
        href: "/components/content/#lede"
      },
      {
        text: "Heading",
        href: "/components/content/#heading"
      },
      {
        text: "Subheading",
        href: "/components/content/#subheading"
      },
      {
        text: "Paragraph",
        href: "/components/content/#paragraph"
      },
      {
        text: "Cite",
        href: "/components/content/#cite"
      },
      {
        text: "Code",
        href: "/components/content/#code"
      }
    ]
  },
  {
    text: "Heroes",
    href: "/components/content/#heroes",
    items: [
      {
        text: "Hero",
        href: "/components/content/#hero"
      }
    ]
  },
  {
    text: "Lists",
    href: "/components/content/#lists",
    items: [
      {
        text: "Bulleted List",
        href: "/components/content/#bulleted-list"
      },
      {
        text: "Numbered List",
        href: "/components/content/#numbered-list"
      }
    ]
  },
  {
    text: "Disclosure",
    href: "/components/content/#disclosure",
    items: [
      {
        text: "Details",
        href: "/components/content/#details"
      }
    ]
  },
  {
    text: "Quotes",
    href: "/components/content/#quotes",
    items: [
      {
        text: "Pull Quote",
        href: "/components/content/#pull-quote"
      },
      {
        text: "Block Quote",
        href: "/components/content/#block-quote"
      },
      {
        text: "Prominent Block Quote",
        href: "/components/content/#prominent-block-quote"
      }
    ]
  },
  {
    text: "Facts",
    href: "/components/content/#facts",
    items: [
      {
        text: "Fact",
        href: "/components/content/#fact"
      }
    ]
  },
  {
    text: "Media",
    href: "/components/content/#media",
    items: [
      {
        text: "Image",
        href: "/components/content/#image"
      },
      {
        text: "Video",
        href: "/components/content/#video"
      },
      {
        text: "Caption",
        href: "/components/content/#caption"
      }
    ]
  },
  {
    text: "Callouts",
    href: "/components/content/#callouts",
    items: [
      {
        text: "Callout",
        href: "/components/content/#callout"
      },
      {
        text: "Prominent Callout",
        href: "/components/content/#prominent-callout"
      }
    ]
  },
  {
    text: "Sectioning",
    href: "/components/content/#sectioning",
    items: [
      {
        text: "Section",
        href: "/components/content/#section"
      },
      {
        text: "Sections",
        href: "/components/content/#sections"
      }
    ]
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
        <ContentsMenu items={items} />
        <Content>
          <Heading>Type</Heading>
          <Paragraph>
            Use these components to create a consistent type hierarchy.
          </Paragraph>
          <Paragraph>
            If your product has additional needs,{" "}
            <Link href="/standards/typography/">
              follow the typography standards
            </Link>
            .
          </Paragraph>
          <Subheading>Topic</Subheading>
          <Example>
            <div
              style={{
                paddingBottom: "2rem"
              }}
            >
              <Topic>Raising awareness</Topic>
            </div>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Topic">
              Topic code
            </Link>{" "}
            on GitHub.
          </Cite>
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
          <Subheading>Code</Subheading>
          <Example>
            <Code>{`href="https://www.barnardos.org.uk"`}</Code>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Code">
              Code component code
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Heroes</Heading>
          <Subheading>Hero</Subheading>
          <Example>
            <div
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "2rem"
              }}
            >
              <Hero title="Young carers" />
            </div>
          </Example>
          <Example>
            <div
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "2rem"
              }}
            >
              <Hero
                title="Voice and influence of young people"
                src="/image-for-hero-example.jpg"
              />
            </div>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Hero">
              Hero code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/631">
              Hero research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Lists</Heading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>introduce with a descriptive sentence</ListItem>
            <ListItem>aim to keep the length of items similar</ListItem>
          </BulletedList>
          <Paragraph>You should avoid:</Paragraph>
          <BulletedList>
            <ListItem>starting items with the same word</ListItem>
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
          <Heading>Disclosure</Heading>
          <Subheading>Details</Subheading>
          <Paragraph>
            Use this component to reveal hidden information.
          </Paragraph>
          <Example>
            <Paragraph>There are many methods to donate.</Paragraph>
            <Details summary="How to donate by post?">
              <Paragraph>
                If you’d like to donate by post, simply send a cheque made
                payable to Barnardo’s to:
              </Paragraph>
              <Paragraph>
                Supporter Services [OPD]
                <br />
                Barnardo’s
                <br />
                Tanners Lane
                <br />
                Barkingside
                <br />
                Essex
                <br />
                IG6 1QG
              </Paragraph>
            </Details>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Details">
              Details code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/534">
              Details research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Quotes</Heading>
          <Paragraph>You should:</Paragraph>
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
              name="Juliana Santos"
              role="Teacher"
              src={withPrefix("/image-for-blockquote-example.jpg")}
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
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>limit to one on each page</ListItem>
          </BulletedList>
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
          <Heading>Facts</Heading>
          <Subheading>Fact</Subheading>
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
          <Heading>Media</Heading>
          <Subheading>Image</Subheading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>match the tone of the surrounding copy</ListItem>
            <ListItem>
              include descriptive <Code>alt</Code> tags in the code
            </ListItem>
          </BulletedList>
          <Example>
            <Image
              alt="Group collecting donations for Barnardo's"
              src={withPrefix("/image-for-image-example.jpg")}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Image">
              Image code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/396">
              Image research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Video</Subheading>
          <Paragraph>You should:</Paragraph>
          <BulletedList>
            <ListItem>include subtitles</ListItem>
            <ListItem>include a transcription</ListItem>
          </BulletedList>
          <Example>
            <Video
              title="Believe in me TV advert"
              src="https://www.youtube.com/embed/XnIcd4uJHao"
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Video">
              Video code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/395">
              Video research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Caption</Subheading>
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
            <Caption label="Volunteer helping in a Barnardo’s shop">
              <Image
                alt="Volunteer helping in a Barnardo’s shop"
                ratio="16by9"
                src={withPrefix("/image-for-caption-example.jpg")}
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
          <Heading>Callouts</Heading>
          <Subheading>Callout</Subheading>
          <Paragraph>
            Use this component to callout part of the content.
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
            Use this component to prominently callout part of the content.
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
          <Heading>Sectioning</Heading>
          <Subheading>Section</Subheading>
          <Paragraph>
            Use this component to section part of the content.
          </Paragraph>
          <Example>
            <div
              style={{
                paddingBottom: "4rem"
              }}
            >
              <Section>
                <Subheading>Going into care</Subheading>
                <Paragraph>
                  Going into care is a big step. This option will be looked at
                  after checking whether there’s any other ways you could be
                  properly cared for and feel safe at home.
                </Paragraph>
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
          <Subheading>Sections</Subheading>
          <Paragraph>
            Use this component to section more than one part of content.
          </Paragraph>
          <Example>
            <div
              style={{
                paddingBottom: "4rem"
              }}
            >
              <Sections>
                <Section>
                  <Paragraph>1st section</Paragraph>
                </Section>
                <Section>
                  <Paragraph>2nd section</Paragraph>
                </Section>
                <Section>
                  <Paragraph>3rd section</Paragraph>
                </Section>
              </Sections>
            </div>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Sections">
              Sections code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/723">
              Sections research
            </Link>{" "}
            on GitHub.
          </Cite>
        </Content>
      </Contents>
    </Main>
  </Page>
);
