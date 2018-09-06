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
import PullQuote from "../../components/PullQuote";
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
          text: "PullQuote",
          to: "/guidance/displaying-information/#pullquote"
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
    <HeadingOne>{`PullQuote`}</HeadingOne>
    <Paragraph>{`Use this component to add a pull quote.`}</Paragraph>
    <div className="Pages-example">
      <PullQuote
        name="John Smith"
        role="Teacher"
      >{`The family support worker is able to engage and build positive relationships with families who previously kept their distance from school.`}</PullQuote>
    </div>
    <div className="Pages-example">
      <PullQuote
        colour="pink"
        role="Child"
      >{`I learned we are all beautiful in our own ways. I felt reassured.`}</PullQuote>
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
