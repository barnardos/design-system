import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import BulletedList from "../../components/BulletedList";
import Cite from "../../components/Cite";
import Code from "../../components/Code";
import CodeExample from "../../components/CodeExample"
import Content from "../../components/Content";
import Contents from "../../components/Contents";
import ContentsMenu from "../../components/ContentsMenu";
import Example from "../../components/Example";
import Figure from "../../components/Figure";
import Figures from "../../components/Figures";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Main from "../../components/Main";
import Menu from "../../components/Menu";
import Page from "../../components/Page";
import Paragraph from "../../components/Paragraph";
import Preformatted from "../../components/Preformatted";
import Search from "../../components/Search";
import SkipLink from "../../components/SkipLink";
import Title from "../../components/Title";

export const items = [
  {
    text: "Site",
    href: "/components/structure/#site"
  },
  {
    text: "Layout",
    href: "/components/structure/#layout"
  },
  {
    text: "Skip Link",
    href: "/components/structure/#skip-link"
  },
  {
    text: "Menu",
    href: "/components/structure/#menu"
  },
  {
    text: "Search",
    href: "/components/structure/#search"
  },
  {
    text: "Header",
    href: "/components/structure/#header"
  },
  {
    text: "Breadcrumbs",
    href: "/components/structure/#breadcrumbs"
  },
  {
    text: "Main",
    href: "/components/structure/#main"
  },
  {
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

export default () => {
  const menu = (<Menu
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
  />);

  return (
    <Page title="Structure">
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
        <Title>Structure</Title>
        <Contents>
          <ContentsMenu items={items} />
          <Content>
            <Figures>
              <Figure caption="The relationship between the structure components">
                <Preformatted>
                  <Code>{structureForFigure}</Code>
                </Preformatted>
              </Figure>
            </Figures>
            <Heading>Site</Heading>
            <Paragraph>Use this component to:</Paragraph>
            <BulletedList>
              <ListItem>set the page title and description</ListItem>
              <ListItem>
                load the{" "}
                <Link href="/standards/typography/#brand-font">brand font</Link>
              </ListItem>
              <ListItem>
                import the{" "}
                <Link href="/standards/viewport-scale/">viewport scale</Link>
              </ListItem>
              <ListItem>normalise CSS styles</ListItem>
            </BulletedList>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Site">
                Site code
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Layout</Heading>
            <Paragraph>Use this component to:</Paragraph>
            <BulletedList>
              <ListItem>add space around the page</ListItem>
              <ListItem>limit the width of the page</ListItem>
            </BulletedList>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Layout">
                Layout code
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Skip Link</Heading>
            <Paragraph>Use this component to skip to the main content.</Paragraph>
            <Example>
              <SkipLink />
              <Cite>Focus component to reveal.</Cite>
            </Example>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SkipLink">
                Skip Link code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/479">
                Skip Link research
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Menu</Heading>
            <Paragraph>
              Use this component to navigate to top and secondary level items.
            </Paragraph>
            <Paragraph>You should:</Paragraph>
            <BulletedList>
              <ListItem>
                aim to have the items visible on all viewport sizes
              </ListItem>
            </BulletedList>
            <Example>
              <div
                style={{
                  paddingBottom: "8rem",
                  position: "relative"
                }}
              >
                {menu}
              </div>
            </Example>
            <CodeExample>
              {menu}
            </CodeExample>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Menu">
                Menu code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/2">
                Menu research
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Search</Heading>
            <Paragraph>Use this component for searches.</Paragraph>
            <Example>
              <Search id="example-search" />
            </Example>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Search">
                Search code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/454">
                Search research
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Header</Heading>
            <Paragraph>
              Use this component to display the Barnardo’s logo and optional
              Search and Menu.
            </Paragraph>
            <Example>
              <div
                style={{
                  paddingBottom: "8rem",
                  position: "relative"
                }}
              >
                <Header
                  search={<Search />}
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
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Header">
                Header code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/2">
                Header research
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Breadcrumbs</Heading>
            <Paragraph>
              Use this component to help a user identify their current location.
            </Paragraph>
            <Paragraph>You should:</Paragraph>
            <BulletedList>
              <ListItem>only represent individual pages</ListItem>
            </BulletedList>
            <Paragraph>You should avoid:</Paragraph>
            <BulletedList>
              <ListItem>displaying the current page</ListItem>
            </BulletedList>
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
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">
                Breadcrumbs code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/2">
                Breadcrumbs research
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Main</Heading>
            <Paragraph>
              Use this component for the main content of a page.
            </Paragraph>
            <Cite>
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Main">
                Main code
              </Link>{" "}
              on GitHub.
            </Cite>
            <Heading>Footer</Heading>
            <Paragraph>
              Use this component for the copyright notice and optional links.
            </Paragraph>
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
              View{" "}
              <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Footer">
                Footer code
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/barnardos/design-system/issues/301">
                Footer research
              </Link>{" "}
              on GitHub.
            </Cite>
          </Content>
        </Contents>
      </Main>
    </Page>);
};
