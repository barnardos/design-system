import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import Code from "../components/Code";
import Content from "../components/Content";
import ContentHeader from "../components/ContentHeader";
import ContentWithMenu from "../components/ContentWithMenu";
import DesignSystemContentsMenu from "../components/DesignSystemContentsMenu";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Figures from "../components/Figures";
import Heading from "../components/Heading";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Topic from "../components/Topic";
import TypeFigures from "../components/TypeFigures";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Typography`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Main>
      <ContentWithMenu>
        <ContentHeader>
          <Topic>{`Design standards`}</Topic>
          <Title>{`Typography`}</Title>
        </ContentHeader>
        <DesignSystemContentsMenu
          items={[
            {
              level: 1,
              text: "Type scale",
              to: "/typography/#type-scale"
            },
            {
              level: 1,
              text: "Line height",
              to: "/typography/#line-height"
            },
            {
              level: 1,
              text: "Line length",
              to: "/typography/#line-length"
            },
            {
              level: 1,
              text: "Brand font",
              to: "/typography/#brand-font"
            },
            {
              level: 1,
              text: "Body copy",
              to: "/typography/#body-copy"
            }
          ]}
        />
        <Content>
          <Paragraph>{`You should use:`}</Paragraph>
          <BulletedList>
            <ListItem>{`a base size of 1rem (roughly 16px) for body copy`}</ListItem>
            <ListItem>{`exponents of 1.125 for other type sizes (major second type scale)`}</ListItem>
          </BulletedList>
          <Paragraph>
            {`Typography is subject to the `}
            <GatsbyLink to="/viewport-scale/">{`viewport scale`}</GatsbyLink>
            {`.`}
          </Paragraph>
          <Heading>{`Type scale`}</Heading>
          <Figures>
            <TypeFigures />
          </Figures>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/blob/master/src/custom-properties.css#L5-L22">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Heading>{`Line height`}</Heading>
          <Paragraph>{`You should use multiples of 0.25rem (roughly 4px).`}</Paragraph>
          <Heading>{`Line length`}</Heading>
          <Paragraph>{`The optimal line length of text is around:`}</Paragraph>
          <BulletedList>
            <ListItem>{`15–40 characters for short lines`}</ListItem>
            <ListItem>{`40–95 characters for body copy`}</ListItem>
          </BulletedList>
          <Heading>{`Brand font`}</Heading>
          <Paragraph>{`You should use Proxima Nova.`}</Paragraph>
          <Paragraph>{`You should only use the weights:`}</Paragraph>
          <BulletedList>
            <ListItem>{`semi-bold`}</ListItem>
            <ListItem>{`light`}</ListItem>
          </BulletedList>
          <Paragraph>
            {`Use "`}
            <Code>{`djy7snj`}</Code>
            {`" for the `}
            <Link href="https://helpx.adobe.com/uk/fonts/using/embed-codes.html">
              {`Adobe Fonts embed code`}
            </Link>
            {`. This code is valid for all of Barnardo's products.`}
          </Paragraph>
          <Heading>{`Body copy`}</Heading>
          <Paragraph>
            {`You should use the `}
            <Link href="https://www.w3.org/TR/css-fonts-4/#system-ui-def">
              {`system-ui`}
            </Link>
            {` generic font family.`}
          </Paragraph>
          <Cite>
            {`View `}
            <Link href="https://github.com/barnardos/design-system/tree/master/src/custom-properties.css">{`code`}</Link>
            {` on GitHub.`}
          </Cite>
          <Pagination
            previous={{
              to: "/colour",
              label: "Colour"
            }}
            next={{
              to: "/spacing-and-layout",
              label: "Spacing and layout"
            }}
          />
        </Content>
      </ContentWithMenu>
    </Main>
  </DesignSystemLayout>
);

export default Page;
