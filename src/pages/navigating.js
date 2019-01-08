import Helmet from "react-helmet";
import React from "react";

import AttentionGrabbingPromo from "../components/AttentionGrabbingPromo";
import AttentionGrabbingLink from "../components/AttentionGrabbingLink";
import BackLink from "../components/BackLink";
import Breadcrumbs from "../components/Breadcrumbs";
import Promo from "../components/Promo";
import Cite from "../components/Cite";
import DonateLink from "../components/DonateLink";
import DesignSystemIndex from "../components/DesignSystemIndex";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Menu from "../components/Menu";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import SignpostLink from "../components/SignpostLink";
import Search from "../components/Search";
import StartLink from "../components/StartLink";
import Subheading from "../components/Subheading";
import Index from "../components/Index";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "./index.css";

const Pages = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Navigating`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Navigating`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Links",
          to: "/navigating/#links"
        },
        {
          level: 2,
          text: "Link",
          to: "/navigating/#link"
        },
        {
          level: 2,
          text: "Signpost Link",
          to: "/navigating/#signpost-link"
        },
        {
          level: 2,
          text: "Start Link",
          to: "/navigating/#start-link"
        },
        {
          level: 2,
          text: "Donate Link",
          to: "/navigating/#donate-link"
        },
        {
          level: 2,
          text: "Attention Grabbing Link",
          to: "/navigating/#attention-grabbing-link"
        },
        {
          level: 2,
          text: "Back Link",
          to: "/navigating/#back-link"
        },
        {
          level: 1,
          text: "Promos",
          to: "/navigating/#promos"
        },
        {
          level: 2,
          text: "Promo",
          to: "/navigating/#promo"
        },
        {
          level: 2,
          text: "Attention Grabbing Promo",
          to: "/navigating/#attention-grabbing-promo"
        },
        {
          level: 1,
          text: "Breadcrumbs",
          to: "/navigating/#breadcrumbs"
        },
        {
          level: 1,
          text: "Index",
          to: "/navigating/#index"
        },
        {
          level: 1,
          text: "Pagination",
          to: "/navigating/#pagination"
        },
        {
          level: 1,
          text: "Menu",
          to: "/navigating/#menu"
        },
        {
          level: 1,
          text: "Search",
          to: "/navigating/#search"
        },
        {
          level: 1,
          text: "Header",
          to: "/navigating/#header"
        },
        {
          level: 1,
          text: "Footer",
          to: "/navigating/#footer"
        }
      ]}
    />
    <Heading>{`Links`}</Heading>
    <Subheading>{`Link`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use a meaningful phrase that makes sense out of context`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <Paragraph>
        {`This is a paragraph, and it includes even more text to give a good
            representation of a more `}
        <Link href="http://example.org">{`average length paragraph`}</Link>
        {`.
            That way you can see more than one line wrapping.`}
      </Paragraph>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Link">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/47">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Signpost Link`}</Subheading>
    <Paragraph>{`Use this component after a summary of content to signpost onto more detail.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`use a verb, for example search`}</ListItem>
      <ListItem>{`use a meaningful phrase that makes sense out of context`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
      <ListItem>{`not use terms like "Read more" and "Find out more"`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <SignpostLink href="http://example.org">{`Search and apply for jobs`}</SignpostLink>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SignpostLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/282">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Start Link`}</Subheading>
    <Paragraph>{`Use this component to link to the start of a transactional service.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`limit to one on each page`}</ListItem>
      <ListItem>{`only use the Green colour`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <StartLink href="http://example.org" />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/StartLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/167">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Donate Link`}</Subheading>
    <Paragraph>{`Use this component to link to the service to donate.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only use the Green colour`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <DonateLink href="http://example.org" />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DonateLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/353">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Attention Grabbing Link`}</Subheading>
    <Paragraph>{`Use this component within featured content.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`limit the number on each page`}</ListItem>
      <ListItem>{`use sentence case`}</ListItem>
      <ListItem>{`use a verb, for example donate`}</ListItem>
      <ListItem>{`not use the Green colour`}</ListItem>
      <ListItem>{`not use terms like "Read more" and "Find out more"`}</ListItem>
    </BulletedList>
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
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/47">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Back Link`}</Subheading>
    <Paragraph>{`Use this component to link back within a transactional service.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only use it once on each page`}</ListItem>
      <ListItem>{`place it as the first interactive element`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <BackLink href="http://example.org" />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BackLink">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/166">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Promos`}</Heading>
    <Paragraph>{`Use these components to provide a summary that links to additional details.`}</Paragraph>
    <Subheading>{`Promo`}</Subheading>
    <div className="Pages-example">
      <Promo
        href="http://example.org"
        meta="20 October 2019"
        title="Barnardo’s celebrates National Adoption Week"
      >{`This year’s campaign calls on people to welcome an older child into their family.`}</Promo>
    </div>
    <div className="Pages-example">
      <Promo
        href="http://example.org"
        src="https://donate.barnardos.org.uk/sites/default/files/styles/b_lg/public/uploads/IMG_8550.jpg"
        title="Other ways to donate"
      >{`Find out ways to help support vulnerable children including making one-off or regular donations.`}</Promo>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Promo">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/91">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Attention Grabbing Promo`}</Subheading>
    <div className="Pages-example">
      <AttentionGrabbingPromo
        colour="pink"
        href="http://example.org"
        meta="14 April 2019"
        title="Brighton Marathon"
        text="Sign up"
      >{`Taking in the sights and sounds of the coast, this fantastic 26.2 mile route covers Hove and finishes at the famous Brighton Pier.`}</AttentionGrabbingPromo>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/AttentionGrabbingPromo">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/401">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Breadcrumbs`}</Heading>
    <Paragraph>{`Use this component to help a user identify their current location.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`place it directly above the page title`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <Breadcrumbs
        items={[
          {
            text: "Home",
            to: "/"
          },
          {
            text: "What we do",
            to: "/"
          },
          {
            text: "Supporting young people",
            to: "/"
          }
        ]}
      />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Index`}</Heading>
    <Paragraph>{`Use this component to navigate within a page or section of pages.`}</Paragraph>
    <div className="Pages-example">
      <Index
        items={[
          {
            level: 1,
            text: "Who can adopt?",
            to: "/"
          },
          {
            level: 2,
            text: "If you have children",
            to: "/"
          },
          {
            level: 2,
            text: "If you have a partner",
            to: "/"
          },
          {
            level: 1,
            text: "Types of adoption",
            to: "/"
          }
        ]}
      />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Index">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/251">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Pagination`}</Heading>
    <Paragraph>{`Use this component to break large pieces of content across multiple pages.`}</Paragraph>
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
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Pagination">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/250">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Menu`}</Heading>
    <Paragraph>{`Use this component to navigate to top and secondary level items.`}</Paragraph>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`aim to have the items visible`}</ListItem>
      <ListItem>{`avoid collapsing items into a Command on larger viewports`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <div
        style={{
          paddingBottom: "8rem",
          position: "relative"
        }}
      >
        <Menu
          items={[
            {
              text: "About us",
              to: "/",
              items: [
                {
                  text: "Our history",
                  to: "/"
                },
                {
                  text: "Annual report",
                  to: "/"
                },
                {
                  text: "How we're funded",
                  to: "/"
                }
              ]
            },
            {
              isActive: true,
              text: "What we do",
              to: "/",
              items: [
                {
                  isActive: true,
                  text: "Fostering & adoption",
                  to: "/"
                },
                {
                  text: "Supporting young adults",
                  to: "/"
                }
              ]
            },
            {
              text: "Work with us",
              to: "/",
              items: [
                {
                  text: "Jobs",
                  to: "/"
                },
                {
                  text: "Commission us",
                  to: "/"
                }
              ]
            }
          ]}
        />
      </div>
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Menu">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Search`}</Heading>
    <div className="Pages-example">
      <Search />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Search">{`code`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Header`}</Heading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`link the Barnardo's logo to the homepage`}</ListItem>
    </BulletedList>
    <div className="Pages-example">
      <Header />
    </div>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Header">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Footer`}</Heading>
    <div className="Pages-example">
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
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Footer">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/301">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Pages;
