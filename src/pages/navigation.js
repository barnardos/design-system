import Helmet from "react-helmet";
import React from "react";

import ProminentLink from "../components/ProminentLink";
import ProminentPromo from "../components/ProminentPromo";
import BackLink from "../components/BackLink";
import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import Content from "../components/Content";
import ContentHeader from "../components/ContentHeader";
import ContentWithMenu from "../components/ContentWithMenu";
import ContentsMenu from "../components/ContentsMenu";
import DesignSystemLayout from "../components/DesignSystemLayout";
import DonateLink from "../components/DonateLink";
import Example from "../components/Example";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Menu from "../components/Menu";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Promo from "../components/Promo";
import Search from "../components/Search";
import SignpostLink from "../components/SignpostLink";
import SkipLink from "../components/SkipLink";
import StartLink from "../components/StartLink";
import Subheading from "../components/Subheading";
import Title from "../components/Title";
import Main from "../components/Main";
import Topic from "../components/Topic";

export const indexItems = [
  {
    level: 1,
    text: "Links",
    href: "/navigation/#links"
  },
  {
    level: 2,
    text: "Link",
    href: "/navigation/#link"
  },
  {
    level: 2,
    text: "Signpost Link",
    href: "/navigation/#signpost-link"
  },
  {
    level: 2,
    text: "Start Link",
    href: "/navigation/#start-link"
  },
  {
    level: 2,
    text: "Donate Link",
    href: "/navigation/#donate-link"
  },
  {
    level: 2,
    text: "Prominent Link",
    href: "/navigation/#prominent-link"
  },
  {
    level: 2,
    text: "Back Link",
    href: "/navigation/#back-link"
  },
  {
    level: 2,
    text: "Skip Link",
    href: "/navigation/#skip-link"
  },
  {
    level: 1,
    text: "Promos",
    href: "/navigation/#promos"
  },
  {
    level: 2,
    text: "Promo",
    href: "/navigation/#promo"
  },
  {
    level: 2,
    text: "Prominent Promo",
    href: "/navigation/#prominent-promo"
  },
  {
    level: 1,
    text: "Breadcrumbs",
    href: "/navigation/#breadcrumbs"
  },
  {
    level: 1,
    text: "Pagination",
    href: "/navigation/#pagination"
  },
  {
    level: 1,
    text: "Menu",
    href: "/navigation/#menu"
  },
  {
    level: 1,
    text: "Contents Menu",
    href: "/navigation/#contents-menu"
  },
  {
    level: 1,
    text: "Search",
    href: "/navigation/#search"
  },
  {
    level: 1,
    text: "Header",
    href: "/navigation/#header"
  },
  {
    level: 1,
    text: "Footer",
    href: "/navigation/#footer"
  }
];

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Navigation`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        }
      ]}
    />
    <Main>
      <ContentWithMenu>
        <ContentHeader>
          <Topic>{`Components`}</Topic>
          <Title>{`Navigation`}</Title>
        </ContentHeader>
        <ContentsMenu items={indexItems} />
        <Content>
          <Heading>{`Links`}</Heading>
          <Subheading>{`Link`}</Subheading>
          <Paragraph>{`When using this component you should use a meaningful phrase that makes sense out of context.`}</Paragraph>
          <Example>
            <Paragraph>
              {`This is a paragraph, and it includes even more text to give a good
            representation of a more `}
              <Link href="#">{`average length paragraph`}</Link>
              {`.
            That way you can see more than one line wrapping.`}
            </Paragraph>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Link">{`Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/47">{`Link research`}</Link>
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
          <Example>
            <SignpostLink href="#">{`Search and apply for jobs`}</SignpostLink>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/SignpostLink">{`Signpost Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/282">{`Signpost Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Start Link`}</Subheading>
          <Paragraph>{`Use this component to link to the start of a transactional service.`}</Paragraph>
          <Paragraph>{`When using this component you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`limit to one on each page`}</ListItem>
            <ListItem>{`only use the Green colour`}</ListItem>
          </BulletedList>
          <Example>
            <StartLink href="#" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/StartLink">{`Start Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/167">{`Start Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Donate Link`}</Subheading>
          <Paragraph>{`Use this component to link to the service to donate.`}</Paragraph>
          <Paragraph>{`When using this component you should only use the Green colour.`}</Paragraph>
          <Example>
            <DonateLink href="#" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DonateLink">{`Donate Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/353">{`Donate Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Prominent Link`}</Subheading>
          <Paragraph>{`Use this component within featured content.`}</Paragraph>
          <Paragraph>{`When using this component you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`limit the number on each page`}</ListItem>
            <ListItem>{`use sentence case`}</ListItem>
            <ListItem>{`use a verb, for example donate`}</ListItem>
            <ListItem>{`not use the Green colour`}</ListItem>
            <ListItem>{`not use terms like "Read more" and "Find out more"`}</ListItem>
          </BulletedList>
          <Example>
            <ProminentLink colour="pink" href="#" text="Volunteer with us" />
          </Example>
          <Example>
            <ProminentLink colour="black" href="#" text="Shop online" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentLink">{`Prominent Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/47">{`Prominent Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Back Link`}</Subheading>
          <Paragraph>{`Use this component to link back within a transactional service.`}</Paragraph>
          <Paragraph>{`When using this component you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`only use it once on each page`}</ListItem>
            <ListItem>{`place it as the first interactive element`}</ListItem>
          </BulletedList>
          <Example>
            <BackLink href="#" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/BackLink">{`Back Link code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/166">{`Back Link research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Skip Link`}</Subheading>
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
          <Heading>{`Promos`}</Heading>
          <Paragraph>{`Use these components to provide a summary that links to additional details.`}</Paragraph>
          <Subheading>{`Promo`}</Subheading>
          <Example>
            <Promo
              href="#"
              meta="20 October 2019"
              title="Barnardo’s celebrates National Adoption Week"
            >{`This year’s campaign calls on people to welcome an older child into their family.`}</Promo>
          </Example>
          <Example>
            <Promo
              href="#"
              src="https://donate.barnardos.org.uk/sites/default/files/styles/b_lg/public/uploads/IMG_8550.jpg"
              title="Other ways to donate"
            >{`Find out ways to help support vulnerable children including making one-off or regular donations.`}</Promo>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Promo">{`Promo code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/91">{`Promo research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Subheading>{`Prominent Promo`}</Subheading>
          <Example>
            <ProminentPromo
              colour="pink"
              href="#"
              meta="14 April 2019"
              title="Brighton Marathon"
              text="Sign up"
            >{`Taking in the sights and sounds of the coast, this fantastic 26.2 mile route covers Hove and finishes at the famous Brighton Pier.`}</ProminentPromo>
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ProminentPromo">{`Prominent Promo code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/401">{`Prominent Promo research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Breadcrumbs`}</Heading>
          <Paragraph>{`Use this component to help a user identify their current location.`}</Paragraph>
          <Paragraph>{`When using this component you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`place it directly above the page title`}</ListItem>
            <ListItem>{`only use to represent individual pages`}</ListItem>
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
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Breadcrumbs">{`Breadcrumbs code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/2">{`Breadcrumbs research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Pagination`}</Heading>
          <Paragraph>{`Use this component to break large pieces of content across multiple pages.`}</Paragraph>
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
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Pagination">{`Pagination code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/250">{`Pagination research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Menu`}</Heading>
          <Paragraph>{`Use this component to navigate to top and secondary level items.`}</Paragraph>
          <Paragraph>{`When using this component you should:`}</Paragraph>
          <BulletedList>
            <ListItem>{`aim to have the items visible`}</ListItem>
            <ListItem>{`avoid collapsing items into a Command on larger viewports`}</ListItem>
          </BulletedList>
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
                    text: "About us",
                    href: "#",
                    items: [
                      {
                        text: "Our history",
                        href: "#"
                      },
                      {
                        text: "Annual report",
                        href: "#"
                      },
                      {
                        text: "How we're funded",
                        href: "#"
                      }
                    ]
                  },
                  {
                    isActive: true,
                    text: "What we do",
                    href: "#",
                    items: [
                      {
                        isActive: true,
                        text: "Fostering & adoption",
                        href: "#"
                      },
                      {
                        text: "Supporting young adults",
                        href: "#"
                      }
                    ]
                  },
                  {
                    text: "Work with us",
                    href: "#",
                    items: [
                      {
                        text: "Jobs",
                        href: "#"
                      },
                      {
                        text: "Commission us",
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
          <Heading>{`Contents Menu`}</Heading>
          <Paragraph>{`Use this component to navigate within a page or section of pages.`}</Paragraph>
          <Example>
            <ContentsMenu
              items={[
                {
                  level: 1,
                  text: "Who can adopt?",
                  href: "#"
                },
                {
                  level: 2,
                  text: "If you have children",
                  href: "#"
                },
                {
                  level: 2,
                  text: "If you have a partner",
                  href: "#"
                },
                {
                  level: 1,
                  text: "Types of adoption",
                  href: "#"
                }
              ]}
            />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ContentsMenu">{`Contents Menu code`}</Link>
            {` and `}
            <Link href="https://github.com/barnardos/design-system/issues/251">{`Contents Menu research`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Search`}</Heading>
          <Example>
            <Search id="example-search" />
          </Example>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Search">{`Search code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Header`}</Heading>
          <Paragraph>{`When using this component you should link the Barnardo's logo to the homepage.`}</Paragraph>
          <Example>
            <Header />
          </Example>
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
                        text: "About us",
                        href: "#",
                        items: [
                          {
                            text: "Our history",
                            href: "#"
                          },
                          {
                            text: "Annual report",
                            href: "#"
                          },
                          {
                            text: "How we're funded",
                            href: "#"
                          }
                        ]
                      },
                      {
                        isActive: true,
                        text: "What we do",
                        href: "#",
                        items: [
                          {
                            isActive: true,
                            text: "Fostering & adoption",
                            href: "#"
                          },
                          {
                            text: "Supporting young adults",
                            href: "#"
                          }
                        ]
                      },
                      {
                        text: "Work with us",
                        href: "#",
                        items: [
                          {
                            text: "Jobs",
                            href: "#"
                          },
                          {
                            text: "Commission us",
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
          <Heading>{`Footer`}</Heading>
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
      </ContentWithMenu>
    </Main>
  </DesignSystemLayout>
);

export default Page;
