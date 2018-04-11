import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Header from "../components/Header";
import HeadingOne from "../components/HeadingOne";
import ListItem from "../components/ListItem";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import SubmitSearchControl from "../components/SubmitSearchControl";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";

import "./index.css";

const Pages = () => (
  <div className="Pages">
    <Helmet>
      <title>{`WayFinding`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <Title>{`WayFinding`}</Title>
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
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/Navigation">{`code`}</a>
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
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">{`code`}</a>
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
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/SubmitSearchControl">{`code`}</a>
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
        />
      </div>
    </div>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/tree/master/src/components/Header">{`code`}</a>
      {` on GitHub.`}
    </Paragraph>
    <Paragraph>
      {`View `}
      <a href="https://github.com/barnardos/design-system/issues/2">{`research`}</a>
      {` on GitHub.`}
    </Paragraph>
  </div>
);

export default Pages;
