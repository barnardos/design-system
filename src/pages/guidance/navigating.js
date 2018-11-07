import Helmet from "react-helmet";
import React from "react";

import AttentionGrabbingCard from "../../components/AttentionGrabbingCard";
import AttentionGrabbingLink from "../../components/AttentionGrabbingLink";
import BackLink from "../../components/BackLink";
import Breadcrumbs from "../../components/Breadcrumbs";
import Card from "../../components/Card";
import Command from "../../components/Command";
import DonateLink from "../../components/DonateLink";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Menu from "../../components/Menu";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import ProgressLink from "../../components/ProgressLink";
import StartLink from "../../components/StartLink";
import Subheading from "../../components/Subheading";
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
          text: "Links",
          to: "/guidance/navigating/#links"
        },
        {
          level: 2,
          text: "Link",
          to: "/guidance/navigating/#link"
        },
        {
          level: 2,
          text: "Progress Link",
          to: "/guidance/navigating/#progress-link"
        },
        {
          level: 2,
          text: "Start Link",
          to: "/guidance/navigating/#start-link"
        },
        {
          level: 2,
          text: "Donate Link",
          to: "/guidance/navigating/#donate-link"
        },
        {
          level: 2,
          text: "Attention Grabbing Link",
          to: "/guidance/navigating/#attention-grabbing-link"
        },
        {
          level: 2,
          text: "Back Link",
          to: "/guidance/navigating/#back-link"
        },
        {
          level: 1,
          text: "Cards",
          to: "/guidance/navigating/#cards"
        },
        {
          level: 2,
          text: "Card",
          to: "/guidance/navigating/#card"
        },
        {
          level: 2,
          text: "Attention Grabbing Card",
          to: "/guidance/navigating/#attention-grabbing-card"
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
          text: "Command",
          to: "/guidance/navigating/#command"
        },
        {
          level: 1,
          text: "Menu",
          to: "/guidance/navigating/#menu"
        },
        {
          level: 1,
          text: "Header",
          to: "/guidance/navigating/#header"
        },
        {
          level: 1,
          text: "Footer",
          to: "/guidance/navigating/#footer"
        }
      ]}
    />
    <Heading>{`Links`}</Heading>
    <Subheading>{`Link`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem
      >{`use a meaningful phrase that makes sense out of context`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Heading>
        <Link href="http://example.org">{`Subheading of section`}</Link>
      </Heading>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/47">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Progress Link`}</Subheading>
    <Paragraph
    >{`Use this component after a summary of content to progress onto more detail.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`use a verb, for example search`}</ListItem>
      <ListItem
      >{`use a meaningful phrase that makes sense out of context`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
      <ListItem
      >{`not use terms like "Read more" and "Find out more"`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <ProgressLink href="http://example.org">{`Search and apply for jobs`}</ProgressLink>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProgressLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/282">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Start Link`}</Subheading>
    <Paragraph
    >{`Use this component to link to the start of a transactional service.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`limit to one on each page`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <StartLink href="http://example.org" />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/StartLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/167">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Donate Link`}</Subheading>
    <Paragraph
    >{`Use this component to link to the service to donate.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`only use the Green colour`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <DonateLink href="http://example.org" />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DonateLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/353">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Attention Grabbing Link`}</Subheading>
    <Paragraph>{`Use this component within featured content.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`use a verb, for example donate`}</ListItem>
      <ListItem>{`not use the Green colour`}</ListItem>
      <ListItem
      >{`not use terms like "Read more" and "Find out more"`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="pink"
        href="http://example.org"
        text="Volunteer with us"
      />
    </div>
    <div className="Pages-example">
      <AttentionGrabbingLink
        colour="black"
        href="http://example.org"
        text="Shop online"
      />
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/47">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Back Link`}</Subheading>
    <Paragraph
    >{`Use this component to link back within a transactional service.`}</Paragraph>
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
    <Heading>{`Cards`}</Heading>
    <Paragraph
    >{`Use these components to provide a summary that links to additional details.`}</Paragraph>
    <Subheading>{`Card`}</Subheading>
    <div className="Pages-example">
      <Card
        href="http://example.org"
        meta="20 October 2019"
        title="Barnardo’s celebrates National Adoption Week"
      >{`This year’s campaign calls on people to welcome an older child into their family.`}</Card>
    </div>
    <div className="Pages-example">
      <Card
        href="http://example.org"
        src="https://donate.barnardos.org.uk/sites/default/files/styles/b_lg/public/uploads/IMG_8550.jpg"
        title="Other ways to donate"
      >{`Find out ways to help support vulnerable children including making one-off or regular donations.`}</Card>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Card">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/91">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Subheading>{`Attention Grabbing Card`}</Subheading>
    <div className="Pages-example">
      <AttentionGrabbingCard
        colour="pink"
        href="http://example.org"
        meta="14 April 2019"
        title="Brighton Marathon"
        text="Sign up"
      >{`Taking in the sights and sounds of the coast, this fantastic 26.2 mile route covers Hove and finishes at the famous Brighton Pier.`}</AttentionGrabbingCard>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingCard">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/401">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Breadcrumbs`}</Heading>
    <Paragraph
    >{`Use this component to help a user identify their current location.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`place it directly above the page title`}</ListItem>
    </UnorderedList>
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Pagination`}</Heading>
    <Paragraph
    >{`Use this component to break large pieces of content across multiple pages.`}</Paragraph>
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
    <Heading>{`Command`}</Heading>
    <Paragraph
    >{`Use this component for interactive triggers that don't submit data.`}</Paragraph>
    <div className="Pages-example">
      <Command>Menu</Command>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Command">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/33">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Menu`}</Heading>
    <Paragraph
    >{`Use this component to navigate between top-level items.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`aim to have the items visible`}</ListItem>
      <ListItem
      >{`avoid collapsing items into a Command on larger viewports`}</ListItem>
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
          paddingBottom: "20rem",
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
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Header`}</Heading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`link the Barnardo's logo to the homepage`}</ListItem>
    </UnorderedList>
    <div className="Pages-example Pages-example--full">
      <div
        style={{
          position: "relative",
          paddingBottom: "3rem"
        }}
      >
        <Header
          menu={{
            items: [
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
            ]
          }}
          search
        />
      </div>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Header">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <Heading>{`Footer`}</Heading>
    <div className="Pages-example Pages-example--full">
      <div
        style={{
          overflow: "hidden",
          position: "relative"
        }}
      >
        <Footer
          items={[
            {
              href: "http://example.org",
              text: "Contact us"
            },
            {
              href: "http://example.org",
              text: "Privacy notice"
            },
            {
              href: "http://example.org",
              text: "Terms & conditions"
            },
            {
              href: "http://example.org",
              text: "Cookie policy"
            }
          ]}
        >{`© Barnardo's 2018`}</Footer>
      </div>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Footer">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/301">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
