import React from "react";
import { withPrefix } from "gatsby";

import ProminentLink from "../../components/ProminentLink";
import ProminentTeaser from "../../components/ProminentTeaser";
import BackLink from "../../components/BackLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import DownloadLink from "../../components/DownloadLink";
import Page from "../../components/Page";
import DonateLink from "../../components/DonateLink";
import Example from "../../components/Example";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Teaser from "../../components/Teaser";
import Teasers from "../../components/Teasers";
import SignpostLink from "../../components/SignpostLink";
import StartLink from "../../components/StartLink";
import Subheading from "../../components/Subheading";
import Title from "../../components/Title";
import Main from "../../components/Main";
import Pagination from "../../components/Pagination";

export const items = [
  {
    text: "Links",
    href: "/components/navigation/#links",
    items: [
      {
        text: "Link",
        href: "/components/navigation/#link"
      },
      {
        text: "Signpost Link",
        href: "/components/navigation/#signpost-link"
      },
      {
        text: "Download Link",
        href: "/components/navigation/#download-link"
      },
      {
        text: "Start Link",
        href: "/components/navigation/#start-link"
      },
      {
        text: "Donate Link",
        href: "/components/navigation/#donate-link"
      },
      {
        text: "Prominent Link",
        href: "/components/navigation/#prominent-link"
      },
      {
        text: "Back Link",
        href: "/components/navigation/#back-link"
      }
    ]
  },
  {
    text: "Teaser links",
    href: "/components/navigation/#teaser-links",
    items: [
      {
        text: "Teaser",
        href: "/components/navigation/#teaser"
      },
      {
        text: "Prominent Teaser",
        href: "/components/navigation/#prominent-teaser"
      }
    ]
  },
  {
    text: "Menus",
    href: "/components/navigation/#menus",
    items: [
      {
        text: "Menu",
        href: "/components/navigation/#menu"
      },
      {
        text: "Contents Menu",
        href: "/components/navigation/#contents-menu"
      }
    ]
  },
  {
    text: "Paginating",
    href: "/components/navigation/#pagination",
    items: [
      {
        text: "Pagination",
        href: "/components/navigation/#pagination"
      }
    ]
  }
];

export default () => (
  <Page title="Navigation">
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
      <Title>Navigation</Title>
      <Contents>
        <ContentsMenu items={items} />
        <Content>
          <Heading>Links</Heading>
          <Subheading>Link</Subheading>
          <Paragraph>
            When using this component you should use a meaningful phrase that
            makes sense out of context.
          </Paragraph>
          <Example>
            <Paragraph>
              This is a paragraph, and it includes even more text to give a good
              representation of a more{" "}
              <Link href="#">average length paragraph</Link>. That way you can
              see more than one line wrapping.
            </Paragraph>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Link">
              Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/47">
              Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Signpost Link</Subheading>
          <Paragraph>
            Use this component after a summary of content to signpost onto more
            detail.
          </Paragraph>
          <Paragraph>When using this component you should:</Paragraph>
          <BulletedList>
            <ListItem>use sentence case</ListItem>
            <ListItem>use a verb, for example search</ListItem>
            <ListItem>
              use a meaningful phrase that makes sense out of context
            </ListItem>
            <ListItem>only use the Green colour</ListItem>
            <ListItem>
              not use terms like ‘Read more’ and ‘Find out more’
            </ListItem>
          </BulletedList>
          <Example>
            <SignpostLink href="#">Search and apply for jobs</SignpostLink>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SignpostLink">
              Signpost Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/282">
              Signpost Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Download Link</Subheading>
          <Paragraph>
            Use this component to link to a downloadable file.
          </Paragraph>
          <Paragraph>
            When using this component you should use a meaningful phrase that
            makes sense out of context.
          </Paragraph>
          <Example>
            <DownloadLink href="#" format="PDF" size="258KB">
              Guide to fostering and adoption
            </DownloadLink>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DownloadLink">
              Download Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/476">
              Download Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Start Link</Subheading>
          <Paragraph>
            Use this component to link to the start of a transactional service.
          </Paragraph>
          <Paragraph>When using this component you should:</Paragraph>
          <BulletedList>
            <ListItem>limit to one on each page</ListItem>
            <ListItem>only use the Green colour</ListItem>
          </BulletedList>
          <Example>
            <StartLink href="#" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/StartLink">
              Start Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/167">
              Start Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Donate Link</Subheading>
          <Paragraph>
            Use this component to link to the service to donate.
          </Paragraph>
          <Paragraph>
            When using this component you should only use the Green colour.
          </Paragraph>
          <Example>
            <DonateLink href="#" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DonateLink">
              Donate Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/353">
              Donate Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Prominent Link</Subheading>
          <Paragraph>Use this component within featured content.</Paragraph>
          <Paragraph>When using this component you should:</Paragraph>
          <BulletedList>
            <ListItem>limit the number on each page</ListItem>
            <ListItem>use sentence case</ListItem>
            <ListItem>use a verb, for example donate</ListItem>
            <ListItem>not use the Green colour</ListItem>
            <ListItem>
              not use terms like ‘Read more’ and ‘Find out more’
            </ListItem>
          </BulletedList>
          <Example>
            <ProminentLink colour="pink" href="#" text="Volunteer with us" />
          </Example>
          <Example>
            <ProminentLink colour="black" href="#" text="Shop online" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentLink">
              Prominent Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/47">
              Prominent Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Back Link</Subheading>
          <Paragraph>Use this component to link back.</Paragraph>
          <Paragraph>When using this component you should:</Paragraph>
          <BulletedList>
            <ListItem>only use it once on each page</ListItem>
            <ListItem>place it as the first interactive element</ListItem>
          </BulletedList>
          <Example>
            <BackLink href="#" />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BackLink">
              Back Link code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/166">
              Back Link research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Teaser links</Heading>
          <Paragraph>
            Use these components to provide a summary that links to additional
            details.
          </Paragraph>
          <Subheading>Teasers</Subheading>
          <Paragraph>
            Use this component to display more than one Teaser.
          </Paragraph>
          <Example>
            <Teasers>
              <Teaser href="#" heading="Coping with stress">
                The different causes stress and tips on how you can deal with
                it.
              </Teaser>
              <Teaser href="#" heading="Seeking help">
                Places you can visit in person and online for help, advice and
                support.
              </Teaser>
            </Teasers>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Teasers">
              Teasers code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/676">
              Teasers research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Teaser</Subheading>
          <Example>
            <Teaser
              href="#"
              meta="20 October 2019"
              heading="Barnardo’s celebrates National Adoption Week"
            >
              This year’s campaign calls on people to welcome an older child
              into their family. Find out ways to help support vulnerable
              children including making one-off or regular donations.
            </Teaser>
          </Example>
          <Example>
            <Teaser
              href="#"
              src={withPrefix("/image-for-teaser-example.jpg")}
              heading="Other ways to donate"
            >
              Find out ways to help support vulnerable children including making
              one-off or regular donations.
            </Teaser>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Teaser">
              Teaser code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/91">
              Teaser research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Subheading>Prominent Teaser</Subheading>
          <Example>
            <ProminentTeaser
              colour="pink"
              href="#"
              meta="14 April 2019"
              heading="Brighton Marathon"
              text="Sign up"
            >
              Taking in the sights and sounds of the coast, this fantastic 26.2
              mile route covers Hove and finishes at the famous Brighton Pier.
            </ProminentTeaser>
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentTeaser">
              Prominent Teaser code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/401">
              Prominent Teaser research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Menus</Heading>
          <Subheading>Menu</Subheading>
          <Paragraph>
            <Link href="/components/structure/#menu">
              View Menu guidance in Structure
            </Link>
            .
          </Paragraph>
          <Subheading>Contents Menu</Subheading>
          <Paragraph>
            Use this component to navigate within a page or section of pages.
          </Paragraph>
          <Example>
            <ContentsMenu
              items={[
                {
                  text: "Who can adopt?",
                  href: "#"
                },
                {
                  text: "If you have children",
                  href: "#"
                },
                {
                  text: "If you have a partner",
                  href: "#"
                },
                {
                  text: "Types of adoption",
                  href: "#"
                }
              ]}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ContentsMenu">
              Contents Menu code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/251">
              Contents Menu research
            </Link>{" "}
            on GitHub.
          </Cite>
          <Heading>Paginating</Heading>
          <Subheading>Pagination</Subheading>
          <Paragraph>
            Use this component to break large pieces of content across multiple
            pages.
          </Paragraph>
          <Example>
            <Pagination
              previous={{
                href: "#",
                label: "Overview"
              }}
              next={{
                href: "#",
                label: "Register as a foster carer"
              }}
            />
          </Example>
          <Cite>
            View{" "}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Pagination">
              Pagination code
            </Link>{" "}
            and{" "}
            <Link href="https://github.com/barnardos/design-system/issues/250">
              Pagination research
            </Link>{" "}
            on GitHub.
          </Cite>
        </Content>
      </Contents>
    </Main>
  </Page>
);
