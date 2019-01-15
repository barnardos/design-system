import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Preventing spam`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Preventing spam`}</Title>
    <Paragraph>{`You could try:`}</Paragraph>
    <BulletedList>
      <ListItem>{`rate and connection limiting`}</ListItem>
      <ListItem>{`using honey pots`}</ListItem>
      <ListItem>{`transaction monitoring`}</ListItem>
    </BulletedList>
    <Paragraph>{`Avoid using CAPTCHAs, as they cause usability an accessibility issues.`}</Paragraph>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/411">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
