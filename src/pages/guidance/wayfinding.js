import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import HeadingOne from "../../components/HeadingOne";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Navigation from "../../components/Navigation";
import Paragraph from "../../components/Paragraph";
import SubmitSearchControl from "../../components/SubmitSearchControl";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Wayfinding`}</title>
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
    <Title>{`Wayfinding`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Navigation",
          to: "#navigation"
        },
        {
          level: 1,
          text: "Breadcrumbs",
          to: "#breadcrumbs"
        },
        {
          level: 1,
          text: "SubmitSearchControl",
          to: "#submitsearchcontrol"
        },
        {
          level: 1,
          text: "Header",
          to: "#header"
        }
      ]}
    />
    <Paragraph>{`Use the components below for wayfinding.`}</Paragraph>
    <HeadingOne>{`Navigation`}</HeadingOne>
    <Paragraph
    >{`Use this component to switch between top-level categories easily. When using this component you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`aim to have the items visible at all times`}</ListItem>
      <ListItem>{`reveal the navigation if this is not possible`}</ListItem>
    </UnorderedList>
    <div className="Pages-example">
      <Navigation
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
        <Navigation
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
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Navigation">{`code`}</Link>
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
    <HeadingOne>{`SubmitSearchControl`}</HeadingOne>
    <div className="Pages-example">
      <div
        style={{
          paddingBottom: "4rem",
          position: "relative"
        }}
      >
        <SubmitSearchControl />
      </div>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SubmitSearchControl">{`code`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Header`}</HeadingOne>
    <div className="Pages-example Pages-example--full">
      <div
        style={{
          position: "relative",
          paddingBottom: "3rem"
        }}
      >
        <Header
          navigation={{
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
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/2">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
