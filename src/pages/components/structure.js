import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Content from "../../components/Content";
import ContentsMenu from "../../components/ContentsMenu";
import Contents from "../../components/Contents";
import Page from "../../components/Page";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SkipLink from "../../components/SkipLink";
import Example from "../../components/Example";
import Menu from "../../components/Menu";
import Search from "../../components/Search";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Code from "../../components/Code";
import Preformatted from "../../components/Preformatted";

export const indexItems = [
  {
    level: 1,
    text: "Site",
    href: "/components/structure/#site"
  },
  {
    level: 1,
    text: "Layout",
    href: "/components/structure/#layout"
  },
  {
    level: 1,
    text: "Skip Link",
    href: "/components/structure/#skip-link"
  },
  {
    level: 1,
    text: "Menu",
    href: "/components/structure/#menu"
  },
  {
    level: 1,
    text: "Search",
    href: "/components/structure/#search"
  },
  {
    level: 1,
    text: "Header",
    href: "/components/structure/#header"
  },
  {
    level: 1,
    text: "Breadcrumbs",
    href: "/components/structure/#breadcrumbs"
  },
  {
    level: 1,
    text: "Main",
    href: "/components/structure/#main"
  },
  {
    level: 1,
    text: "Footer",
    href: "/components/structure/#footer"
  }
];

const structureForFigure = `<Site>
  <Layout>
    <SkipLink />
    <Header>
      <Search />
      <Menu />
    </Header>
    <Breadcrumbs />
    <Main>..</Main>
    <Footer />
  </Layout>
</Site>`;

export default () => (
  <Page>
    <Helmet>
      <title>{`Structure`}</title>
    </Helmet>
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
      <Title>{`Structure`}</Title>
      <Contents>
        <ContentsMenu items={indexItems} />
        <Content>
          <Figures>
            <Figure caption="The relationship between the structure components">
              <Preformatted>
                <Code>{structureForFigure}</Code>
              </Preformatted>
            </Figure>
          </Figures>
          <Heading>{`Site`}</Heading>
          <Paragraph>{`Use this component to:`}</Paragraph>
          <BulletedList>
            <ListItem>{`set the page title and description`}</ListItem>
            <ListItem>
              {`load the `}
              <Link href="/standards/typography/#brand-font">{`brand font`}</Link>
            </ListItem>
            <ListItem>
              {`import the `}
              <Link href="/standards/viewport-scale/">{`viewport scale`}</Link>
            </ListItem>
            <ListItem>{`normalise CSS styles`}</ListItem>
          </BulletedList>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Site">{`Site code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Layout`}</Heading>
          <Paragraph>{`Use this component to:`}</Paragraph>
          <BulletedList>
            <ListItem>{`add space around the page`}</ListItem>
            <ListItem>{`limit the width of the page`}</ListItem>
          </BulletedList>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Layout">{`Layout code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Skip Link`}</Heading>
          <Paragraph>{`Use this component to skip to the main content.`}</Paragraph>
          <Example>
            <SkipLink />
            <Cite>{`Focus component to reveal.`}</Cite>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SkipLink">{`Skip Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/479">{`Skip Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Menu`}</Heading>
          <Paragraph>{`Use this component to navigate to top and secondary level items.`}</Paragraph>
          <Paragraph>{`When using this component you should aim to have the items visible on all viewport sizes.`}</Paragraph>
          <Example>
            <div
              style={{
                paddingBottom: "8rem",
                position: "relative"
              }}
            >
              <Menu
                items={[
                  {
                    text: "Breakfast",
                    href: "#",
                    items: [
                      {
                        text: "Cereal",
                        href: "#"
                      },
                      {
                        text: "Fruit",
                        href: "#"
                      },
                      {
                        text: "Tea",
                        href: "#"
                      }
                    ]
                  },
                  {
                    isActive: true,
                    text: "Lunch",
                    href: "#",
                    items: [
                      {
                        isActive: true,
                        text: "Sandwich",
                        href: "#"
                      },
                      {
                        text: "Juice",
                        href: "#"
                      }
                    ]
                  },
                  {
                    text: "Dinner",
                    href: "#",
                    items: [
                      {
                        text: "Pasta",
                        href: "#"
                      },
                      {
                        text: "Salad",
                        href: "#"
                      }
                    ]
                  }
                ]}
              />
            </div>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Menu">{`Menu code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/2">{`Menu research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Search`}</Heading>
          <Paragraph>{`Use this component for searches.`}</Paragraph>
          <Example>
            <Search id="example-search" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Search">
              {`Search code`}
            </Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Header`}</Heading>
          <Paragraph>{`Use this component to display the Barnardo's logo and optional Search and Menu.`}</Paragraph>
          <Example>
            <div
              style={{
                paddingBottom: "8rem",
                position: "relative"
              }}
            >
              <Header
                search
                menu={
                  <Menu
                    items={[
                      {
                        text: "Breakfast",
                        href: "#",
                        items: [
                          {
                            text: "Cereal",
                            href: "#"
                          },
                          {
                            text: "Fruit",
                            href: "#"
                          },
                          {
                            text: "Tea",
                            href: "#"
                          }
                        ]
                      },
                      {
                        isActive: true,
                        text: "Lunch",
                        href: "#",
                        items: [
                          {
                            isActive: true,
                            text: "Sandwich",
                            href: "#"
                          },
                          {
                            text: "Juice",
                            href: "#"
                          }
                        ]
                      },
                      {
                        text: "Dinner",
                        href: "#",
                        items: [
                          {
                            text: "Pasta",
                            href: "#"
                          },
                          {
                            text: "Salad",
                            href: "#"
                          }
                        ]
                      }
                    ]}
                  />
                }
              />
            </div>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Header">{`Header code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/2">{`Header research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Breadcrumbs`}</Heading>
          <Paragraph>{`Use this component to help a user identify their current location.`}</Paragraph>
          <Paragraph>{`When using this component you should only represent individual pages.`}</Paragraph>
          <Example>
            <Breadcrumbs
              items={[
                {
                  text: "Home",
                  href: "#"
                },
                {
                  text: "What we do",
                  href: "#"
                },
                {
                  text: "Supporting young people",
                  href: "#"
                }
              ]}
            />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">{`Breadcrumbs code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/2">{`Breadcrumbs research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Main`}</Heading>
          <Paragraph>{`Use this component for the main content of a page.`}</Paragraph>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Main">{`Main code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Footer`}</Heading>
          <Paragraph>{`Use this component for the copyright notice and optional links.`}</Paragraph>
          <Example>
            <Footer
              items={[
                {
                  href: "#",
                  text: "Contact us"
                },
                {
                  href: "#",
                  text: "Privacy notice"
                },
                {
                  href: "#",
                  text: "Terms & conditions"
                },
                {
                  href: "#",
                  text: "Cookie policy"
                }
              ]}
            />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Footer">{`Footer code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/301">{`Footer research`}</Link>
            {` on GitHub.`}
          </Cite>
        </Content>
      </Contents>
    </Main>
  </Page>
);
