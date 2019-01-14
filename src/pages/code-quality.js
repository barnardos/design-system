import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Code quality`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Code quality`}</Title>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`format your code with `}
        <Link href="https://prettier.io/">{`Prettier`}</Link>
        {` (default settings)`}
      </ListItem>
      <ListItem>
        {`lint your JavaScript with `}
        <Link href="https://github.com/barnardos/eslint-config-barnardos">{`ESLint`}</Link>
        {` (recommended config)`}
      </ListItem>
      <ListItem>
        {`lint your CSS with `}
        <Link href="https://stylelint.io/">{`stylelint`}</Link>
        {` (`}
        <Link href="https://github.com/barnardos/stylelint-config-barnardos">{`stylelint-config-barnardos`}</Link>
        {`)`}
      </ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/183">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
