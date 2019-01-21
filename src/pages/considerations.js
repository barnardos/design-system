import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Considerations`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Accessibility standards`}</Topic>
    <Title>{`Considerations`}</Title>
    <Paragraph>
      {`When considering accessibility, follow the principle `}
      <GatsbyLink
        className="Link"
        to="/principles/#be-inclusive"
      >{`'be inclusive'`}</GatsbyLink>
      {`.`}
    </Paragraph>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`use accessibility tools to test your work, for example `}
        <Link href="https://www.deque.com/axe/">{`aXe`}</Link>
      </ListItem>
      <ListItem>{`make page titles unique and descriptive`}</ListItem>
      <ListItem>{`allow users to navigate only with a keyboard`}</ListItem>
      <ListItem>{`enable the viewport to be zoomed to at least 200%`}</ListItem>
      <ListItem>{`avoid relying on colour to convey important information`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/168">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Pagination
      next={{
        to: "/viewport-scale",
        label: "Viewport scale"
      }}
    />
  </DesignSystemLayout>
);

export default Page;
