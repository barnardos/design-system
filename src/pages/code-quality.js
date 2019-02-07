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
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

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
    <Main>
      <Content>
        {" "}
        <Topic>{`Development standards`}</Topic>
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
            <Link href="https://eslint.org/">{`ESLint`}</Link>
            {` (`}
            <Link href="https://github.com/barnardos/eslint-config-barnardos">{`eslint-config-barnardos`}</Link>
            {`)`}
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
          <Link href="https://github.com/barnardos/design-system/issues/183">{`code quality research`}</Link>
          {` on GitHub.`}
        </Cite>
        <Pagination
          next={{
            to: "/future-proof-code",
            label: "Future-proof code"
          }}
        />
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
