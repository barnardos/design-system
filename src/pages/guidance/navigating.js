import Helmet from "react-helmet";
import React from "react";

import AttentionGrabbingLink from "../../components/AttentionGrabbingLink";
import BackLink from "../../components/BackLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import HeadingOne from "../../components/HeadingOne";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Menu from "../../components/Menu";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import StartLink from "../../components/StartLink";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Navigation`}</title>
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
    <Title>{`Navigation`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Link",
          to: "/guidance/navigating/#link"
        },
        {
          level: 1,
          text: "Attention Grabbing Link",
          to: "/guidance/navigating/#attentiongrabbinglink"
        },
        {
          level: 1,
          text: "Start Link",
          to: "/guidance/navigating/#startlink"
        },
        {
          level: 1,
          text: "Back Link",
          to: "/guidance/navigating/#backlink"
        },
        {
          level: 1,
          text: "Breadcrumbs",
          to: "/guidance/navigating/#breadcrumbs"
        },
        {
          level: 1,
          text: "Pagination",
          to: "/guidance/navigating/#pagination"
        },
        {
          level: 1,
          text: "Menu",
          to: "/guidance/navigating/#menu"
        }
      ]}
    />
    <HeadingOne>{`Link`}</HeadingOne>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`use a meaningful phrase that makes sense out of context`}</ListItem>
      <ListItem>{`use the default styles`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <HeadingOne>
        <Link href="http://example.org">{`Heading of section`}</Link>
      </HeadingOne>
      <Paragraph>
        {`This is a paragraph, and it includes even more text to give a good
            representation of a more `}
        <Link href="http://example.org">{`average length paragraph`}</Link>
        {`.
            That way you can see more than one line wrapping.`}
      </Paragraph>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Link">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Attention Grabbing Link`}</HeadingOne>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`use a verb, for example donate`}</ListItem>
      <ListItem>{`not use the Green colour`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="pink"
        href="http://example.org"
        text="Shop online"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="orange"
        href="http://example.org"
        text="Volunteer with us"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="teal"
        href="http://example.org"
        text="Foster today"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="purple"
        href="http://example.org"
        text="Donate"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="black"
        href="http://example.org"
        text="Commission us"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingLink">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/47">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Start Link`}</HeadingOne>
    <Paragraph>{`You should only use this component:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`once on each page`}</ListItem>
      <ListItem>{`to link to the start of a transactional service`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <StartLink href="http://example.org">{`Heading of section`}</StartLink>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/StartLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/167">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Back Link`}</HeadingOne>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use it once on each page`}</ListItem>
      <ListItem>{`place it as the first interactive element`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <BackLink href="http://example.org" />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BackLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/166">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Breadcrumbs`}</HeadingOne>
    <div className="Pages-example">
      <Breadcrumbs
        items={[
          {
            text: "Home",
            to: "/"
          },
          {
            text: "Donate",
            to: "/"
          }
        ]}
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Pagination`}</HeadingOne>
    <div className="Pages-example">
      <Pagination
        previous={{
          href: "http://example.org",
          label: "Overview"
        }}
        next={{
          href: "http://example.org",
          label: "Register as a foster carer"
        }}
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Pagination">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/250">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Menu`}</HeadingOne>
    <Paragraph
    >{`Use this component to switch between top-level categories easily. When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`aim to have the items visible at all times`}</ListItem>
      <ListItem>{`reveal the menu if this is not possible`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Menu
        items={[
          {
            text: "About",
            href: "http://example.org"
          },
          {
            text: "Services",
            href: "http://example.org"
          },
          {
            text: "Donate",
            href: "http://example.org"
          }
        ]}
      />
    </div>
    <div className="Pages-example">
      <div
        style={{
          paddingBottom: "19rem",
          position: "relative"
        }}
      >
        <Menu
          isRevealing
          items={[
            {
              text: "About",
              href: "http://example.org"
            },
            {
              text: "Volunteer",
              href: "http://example.org"
            },
            {
              text: "Mission",
              href: "http://example.org"
            },
            {
              text: "Commission us",
              href: "http://example.org"
            },
            {
              text: "Donate",
              href: "http://example.org"
            }
          ]}
        />
      </div>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Menu">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
