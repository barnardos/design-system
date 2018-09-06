import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Figure from "../../components/Figure";
import HeadingOne from "../../components/HeadingOne";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import Link from "../../components/Link";
import ListItem from "../../components/ListItem";
import Paragraph from "../../components/Paragraph";
import Quote from "../../components/Quote";
import TableOfContents from "../../components/TableOfContents";
import Title from "../../components/Title";
import UnorderedList from "../../components/UnorderedList";

import "../../app.css";
import "../index.css";

const Pages = () => (
  <Layout type="twoThirds">
    <Helmet>
      <title>{`Displaying information`}</title>
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
    <Title>{`Displaying information`}</Title>
    <TableOfContents
      items={[
        {
          level: 1,
          text: "Figure",
          to: "/guidance/displaying-information/#figure"
        },
        {
          level: 1,
          text: "Quote",
          to: "/guidance/displaying-information/#quote"
        }
      ]}
    />
    <Paragraph>{`When displaying information you should:`}</Paragraph>
    <UnorderedList>
      <ListItem>{`provide a meaningful content hierarchy`}</ListItem>
    </UnorderedList>
    <HeadingOne>{`Figure`}</HeadingOne>
    <Paragraph
    >{`Use this component to add a caption, for example to images and videos.`}</Paragraph>
    <div className="Pages-example">
      <Figure caption="Participants receiving their certificate">
        <Image
          src="https://dummyimage.com/1200x675/bbbbbb/d2d2d2.png&amp;text=16:9"
          alt="A 6:9 dummy image"
        />
      </Figure>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Figure">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/300">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
    <HeadingOne>{`Quote`}</HeadingOne>
    <Paragraph
    >{`Use this component for quotes, for example an excerpt from an article or quotation from a person.`}</Paragraph>
    <div className="Pages-example">
      <Quote
      >{`Parents needed more support with their emotional wellbeing, boundaries, behaviour, home and money.`}</Quote>
    </div>
    <div className="Pages-example">
      <Quote
        colour="pink"
        role="Young person"
      >{`Someone believed in me once and now it’s time for me to do the same.`}</Quote>
    </div>
    <div className="Pages-example">
      <Quote
        colour="orange"
        name="John Smith"
        role="Teacher"
        src="https://dummyimage.com/480x480/bbbbbb/d2d2d2.png&amp;text=1:1"
      >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</Quote>
    </div>
    <Paragraph>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/Figure">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/300">{`research`}</Link>
      {` on GitHub.`}
    </Paragraph>
  </Layout>
);

export default Pages;
