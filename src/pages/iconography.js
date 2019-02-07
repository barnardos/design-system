import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import BulletedList from "../components/BulletedList";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Iconography`}</title>
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
      <Content>
        <Topic>{`Assets`}</Topic>
        <Title>{`Iconography`}</Title>
        <Paragraph>{`When using iconography you should:`}</Paragraph>
        <BulletedList>
          <ListItem>{`choose a flat graphic style`}</ListItem>
          <ListItem>
            {`use the `}
            <GatsbyLink
              className="Link"
              to="/colour/#brand-colours"
            >{`brand colours`}</GatsbyLink>
          </ListItem>
          <ListItem>{`avoid relying on icons to convey important information`}</ListItem>
        </BulletedList>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/226">{`iconography research`}</Link>
          {` on GitHub.`}
        </Cite>
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
