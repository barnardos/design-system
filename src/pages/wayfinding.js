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
  <div>
    <Helmet>
      <title>{`WayFinding`}</title>
    </Helmet>
    <GatsbyLink className="Pages-home" to="/">{`Home`}</GatsbyLink>
    <div>
      <div className="Pages-title">
        <Title>{`WayFinding`}</Title>
      </div>
      <div className="Pages-paragraph">
        <Paragraph>{`Use the components below for wayfinding.`}</Paragraph>
      </div>
      <div className="Pages-headingOne">
        <HeadingOne>{`Navigation`}</HeadingOne>
      </div>
      <div className="Pages-paragraph">
        <Paragraph
        >{`Use this component to switch between top-level categories easily. When using this component you should:`}</Paragraph>
      </div>
      <div className="Pages-unorderedList">
        <UnorderedList>
          <ListItem>{`aim to have the items visible at all times`}</ListItem>
          <ListItem>{`reveal the navigation if this is not possible`}</ListItem>
        </UnorderedList>
      </div>
      <div className="Pages-example">
        <Navigation
          items={[
            {
              text: "About us",
              href: "http://example.org"
            },
            {
              text: "Volunteer",
              href: "http://example.org"
            },
            {
              text: "Services",
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
                text: "About us",
                href: "http://example.org"
              },
              {
                text: "Volunteer",
                href: "http://example.org"
              },
              {
                text: "Services",
                href: "http://example.org"
              },
              {
                text: "Mission",
                href: "http://example.org"
              },
              {
                text: "Commission us",
                href: "http://example.org"
              }
            ]}
          />
        </div>
      </div>
      <div className="Pages-headingOne">
        <HeadingOne>{`Breadcrumbs`}</HeadingOne>
      </div>
      <div className="Pages-example">
        <Breadcrumbs
          items={[
            {
              text: "Home",
              to: "/"
            },
            {
              text: "Services",
              to: "/"
            }
          ]}
        />
      </div>
      <div className="Pages-headingOne">
        <HeadingOne>{`SubmitSearchControl`}</HeadingOne>
      </div>
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
      <div className="Pages-headingOne">
        <HeadingOne>{`Header`}</HeadingOne>
      </div>
    </div>
    <div className="Pages-example Pages-example--full">
      <div
        style={{
          position: "relative"
        }}
      >
        <Header
          navigation={{
            items: [
              {
                text: "About us",
                href: "http://example.org"
              },
              {
                text: "Help us",
                href: "http://example.org"
              },
              {
                text: "Services",
                href: "http://example.org"
              }
            ]
          }}
        />
      </div>
    </div>
    <div className="Pages-example Pages-example--full">
      <div
        style={{
          position: "relative"
        }}
      >
        <Header
          navigation={{
            items: [
              {
                text: "About us",
                href: "http://example.org"
              },
              {
                text: "Help us",
                href: "http://example.org"
              },
              {
                text: "Services",
                href: "http://example.org"
              }
            ]
          }}
          links={[
            {
              text: "Shop",
              href: "http://example.org"
            },
            {
              text: "Volunteer",
              href: "http://example.org"
            }
          ]}
        />
      </div>
    </div>
  </div>
);

export default Pages;
