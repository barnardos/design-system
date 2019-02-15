import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Main from "../components/Main";
import Content from "../components/Content";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Performance`}</title>
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
      <Content>
        <Topic>{`Development standards`}</Topic>
        <Title>{`Performance`}</Title>
        <Paragraph>
          {`You should pass the performance checks in `}
          <Link href="https://developers.google.com/web/tools/lighthouse/">{`Lighthouse`}</Link>
          {`. `}
        </Paragraph>
        <Cite>
          {`View `}
          <Link href="https://github.com/barnardos/design-system/issues/451">{`performance research`}</Link>
          {` on GitHub.`}
        </Cite>
        <Pagination
          previous={{
            href: "/future-proof-code",
            label: "Future-proof code"
          }}
        />
      </Content>
    </Main>
  </DesignSystemLayout>
);

export default Page;
