import React from "react";
import Helmet from "react-helmet";

import Subheading from "../../components/Subheading";
import Fact from "../../components/Fact";
import SubmitControls from "../../components/SubmitControls";
import Breadcrumbs from "../../components/Breadcrumbs";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import UnorderedListItem from "../../components/UnorderedListItem";
import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import AttentionGrabbingQuote from "../../components/AttentionGrabbingQuote";
import Caption from "../../components/Caption";
import Image from "../../components/Image";
import Title from "../../components/Title";
import Menu from "../../components/Menu";
import UnorderedList from "../../components/UnorderedList";
import Footer from "../../components/Footer";
import SubmitSearchControl from "../../components/SubmitSearchControl";

import "./index.css";
import "../../app.css";

const Example = () => {
  const isJs = true;
  return (
    <div className="Example">
      <Helmet titleTemplate="%s - Barnardo's">
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Vision:300,300i,500,500i"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main className="Example-main">
        <Breadcrumbs
          items={[
            {
              text: "Home",
              to: "/"
            },
            {
              text: "Who we are",
              to: "/"
            }
          ]}
        />
        <Title>{`Our history`}</Title>
        <Paragraph>
          {`Thomas John Barnardo was born in Dublin, Ireland, in 1845. As a young man he moved to London to train as a doctor. When he arrived, he was shocked to find children living in terrible conditions, with no access to education. Poverty and disease were so widespread that one in five children died before their fifth birthday. When a cholera epidemic swept through the East End, leaving 3000 people dead and many orphaned children, the young Barnardo felt an urgent need to help.`}
        </Paragraph>
        <Paragraph>
          {`His first step, in 1867, was to set up a ‘ragged school’ where children could get a free basic education. One evening a boy at the mission, Jim Jarvis, took Barnardo around the East End, showing him children sleeping on roofs and in gutters. What he saw affected him so deeply he decided to abandon his medical training and devote himself to helping children living in poverty.`}
        </Paragraph>

        <Heading>{`Beginnings – the Ragged School`}</Heading>
        <Paragraph>
          {`In 1870, Barnardo opened his first home for boys. As well as putting a
      roof over their heads, the home trained the boys in carpentry, metalwork
      and shoemaking, and found apprenticeships for them.`}
        </Paragraph>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <AttentionGrabbingQuote
            colour="green"
            role="Young person"
            name="James Roberts"
          >{`I just needed a push in the right direction, and a stepping stone to act as a bridge across to adulthood. I finally feel that I'm closer to being happy.`}</AttentionGrabbingQuote>
        </div>
        <Paragraph>
          {`Barnardo’s work was radical. The Victorians saw poverty as shameful, and
      the result of laziness or vice. But Barnardo refused to discriminate
      between the ‘deserving’ and ‘undeserving’ poor. He accepted all children,
      including black and disabled children, and those born outside marriage.`}
        </Paragraph>
        <UnorderedList>
          <UnorderedListItem>{`early support`}</UnorderedListItem>
          <UnorderedListItem>{`family support`}</UnorderedListItem>
          <UnorderedListItem>{`emotional health and wellbeing`}</UnorderedListItem>
          <UnorderedListItem>{`looked-after children`}</UnorderedListItem>
          <UnorderedListItem>{`family support`}</UnorderedListItem>
        </UnorderedList>
        <Paragraph>
          {`To begin with, there was a limit to the number of boys who could stay
      there. But when an 11-year-old boy was found dead — of malnutrition and
      exposure — two days after being told the shelter was full, Barnardo vowed
      never to turn another child away.`}
        </Paragraph>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Caption label="Participants receiving their certificate">
            <Image
              src="https://dummyimage.com/1200x675/bbbbbb/d2d2d2.png&amp;text=16:9"
              alt="A 6:9 dummy image"
            />
          </Caption>
        </div>
        <Paragraph>
          {`Thomas John Barnardo was born in Dublin, Ireland, in 1845. As a young man he moved to London to train as a doctor. When he arrived, he was shocked to find children living in terrible conditions, with no access to education. Poverty and disease were so widespread that one in five children died before their fifth birthday. When a cholera epidemic swept through the East End, leaving 3000 people dead and many orphaned children, the young Barnardo felt an urgent need to help.`}
        </Paragraph>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Fact label="children supported through our school-based programmes">{`23,500`}</Fact>
        </div>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Fact colour="purple" label="had improved self-esteem">{`73%`}</Fact>
        </div>
        <Paragraph>
          {`His first step, in 1867, was to set up a ‘ragged school’ where children could get a free basic education. One evening a boy at the mission, Jim Jarvis, took Barnardo around the East End, showing him children sleeping on roofs and in gutters. What he saw affected him so deeply he decided to abandon his medical training and devote himself to helping children living in poverty.`}
        </Paragraph>
        <Subheading>{"Child migrants"}</Subheading>
        <Paragraph>
          {`Barnardo’s was one of many children’s charities that sent some children to start a new life in Australia or Canada from the late nineteenth century to the 1960s. This was a popular policy, supported by the British government, who believed that the children would benefit from opportunities they wouldn’t have in the UK. We now know that however well-intentioned, it was a deeply misguided policy. The last Barnardo’s child to be migrated was in 1967, to Australia. In 2010 the British government formally apologised for the UK’s role in sending more than 130,000 child migrants to former colonies.`}
        </Paragraph>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <Quote
            colour="orange"
            name="John Smith"
            role="Teacher"
            src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
          >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</Quote>
        </div>
        <Paragraph>
          {`His first step, in 1867, was to set up a ‘ragged school’ where children could get a free basic education. One evening a boy at the mission, Jim Jarvis, took Barnardo around the East End, showing him children sleeping on roofs and in gutters. What he saw affected him so deeply he decided to abandon his medical training and devote himself to helping children living in poverty.`}
        </Paragraph>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <SubmitControls
            controls={[
              {
                invalid: true,
                control: "singlelineText",
                id: "submit-controls-single-line-text-example",
                label: "Name of the meal",
                size: 48,
                validation: "Enter the name of the meal"
              },
              {
                control: "oneOfManyChoice",
                invalid: true,
                hint:
                  "Nut allergies can be dangerous. Only choose 'No' if you're completely sure.",
                id: "submit-controls-one-of-many-choice-example",
                legend: "Does the meal include nuts?",
                name: "submit-controls-one-of-many-choice-example",
                choices: [
                  {
                    label: "Yes",
                    id: "submit-controls-one-of-many-choice-control-example-yes"
                  },
                  {
                    label: "No",
                    id: "submit-controls-one-of-many-choice-control-example-no"
                  },
                  {
                    label: "I'm not sure",
                    id:
                      "submit-controls-one-of-many-choice-control-example-unsure"
                  }
                ],
                validation: "Select whether the meal contains nuts or not"
              },
              {
                control: "anyOfManyChoice",
                id: "submit-controls-any-of-many-choice-control-example",
                name: "submit-controls-any-of-many-choice-control-example",
                legend: "What are the benefits of the meal?",
                choices: [
                  {
                    label: "None",
                    id:
                      "submit-controls-any-of-many-choice-control-example-none"
                  },
                  {
                    label: "Energising",
                    id:
                      "submit-controls-any-of-many-choice-control-example-energising"
                  },
                  {
                    label: "Tasty",
                    id:
                      "submit-controls-any-of-many-choice-control-example-tasty"
                  },
                  {
                    label: "Low cost",
                    id:
                      "submit-controls-any-of-many-choice-control-example-low-cost"
                  }
                ]
              }
            ]}
            invalid
            submit={{
              text: "Continue"
            }}
            validation="You need to fix the following errors to continue:"
          />
        </div>
      </main>
      <div className="Example-submitSearchControl">
        <SubmitSearchControl isJs={isJs} />
      </div>
      <div className="Example-menu">
        <Menu
          isJs={isJs}
          isRevealing
          items={[
            {
              isActive: true,
              text: "Who we are",
              href: "http://example.org",
              items: [
                {
                  isActive: true,
                  text: "Our history",
                  href: "http://example.org"
                },
                {
                  text: "Annual report",
                  href: "http://example.org"
                },
                {
                  text: "How we're funded",
                  href: "http://example.org"
                },
                {
                  text: "Corporate strategy",
                  href: "http://example.org"
                },
                {
                  text: "Our Chief Executive",
                  href: "http://example.org"
                },
                {
                  text: "Our patrons",
                  href: "http://example.org"
                },
                {
                  text: "Our trustees",
                  href: "http://example.org"
                }
              ]
            },
            {
              text: "What we do",
              href: "http://example.org",
              items: [
                {
                  text: "Fostering & adoption",
                  href: "http://example.org"
                },
                {
                  text: "Helping families",
                  href: "http://example.org"
                },
                {
                  text: "Supporting disabled children",
                  href: "http://example.org"
                },
                {
                  text: "Supporting young adults",
                  href: "http://example.org"
                },
                {
                  text: "Protecting children",
                  href: "http://example.org"
                }
              ]
            },
            {
              text: "Fostering & adoption",
              href: "http://example.org",
              items: [
                {
                  text: "Foster a child",
                  href: "http://example.org"
                },
                {
                  text: "Adopt a child",
                  href: "http://example.org"
                }
              ]
            },
            {
              text: "Support us",
              href: "http://example.org",
              items: [
                {
                  text: "Volunteer with us",
                  href: "http://example.org"
                },
                {
                  text: "Raise money for Barnardo's",
                  href: "http://example.org"
                },
                {
                  text: "Events",
                  href: "http://example.org"
                },
                {
                  text: "Barnardo's Lottery",
                  href: "http://example.org"
                }
              ]
            },
            {
              text: "Work with us",
              href: "http://example.org",
              items: [
                {
                  text: "Jobs",
                  href: "http://example.org"
                },
                {
                  text: "Corporate Partnerships",
                  href: "http://example.org"
                },
                {
                  text: "Commission Us",
                  href: "http://example.org"
                }
              ]
            }
          ]}
        />
      </div>
      <div className="Example-footer">
        <Footer>
          <ul className="Example-footerNav">
            <li>{`Policy and Influencing`}</li>
            <li>{`News`}</li>
            <li>{`Jobs`}</li>
            <li>{`Commision Us`}</li>
            <li>{`Former Barnardo's Children`}</li>
            <li>{`Hygiene Pages`}</li>
          </ul>
        </Footer>
      </div>
    </div>
  );
};

export default Example;
