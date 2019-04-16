import React from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Cite from "../../components/Cite";
import Link from "../../components/Link";
import Main from "../../components/Main";
import Page from "../../components/Page";
import Pagination from "../../components/Pagination";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Topic from "../../components/Topic";
import TopicMenu from "../../components/TopicMenu";

export const items = [
  {
    text: "Code quality",
    href: "/standards/code-quality"
  },
  {
    text: "Future-proof code",
    href: "/standards/future-proof-code"
  },
  {
    text: "Performance",
    href: "/standards/performance"
  }
];

export default () => (
  <Page title="Performance">
    <Breadcrumbs
      items={[
        {
          text: "Home",
          href: "/"
        },
        {
          text: "Standards",
          href: "/standards/"
        }
      ]}
    />
    <Main>
      <Topic>Development</Topic>
      <Title>Performance</Title>
      <TopicMenu items={items} />
      <Paragraph>
        {`You should pass the performance checks in `}
        <Link href="https://developers.google.com/web/tools/lighthouse/">
          Lighthouse
        </Link>
        {`. `}
      </Paragraph>
      <Cite>
        View{" "}
        <Link href="https://github.com/barnardos/design-system/issues/451">
          performance research
        </Link>{" "}
        on GitHub.
      </Cite>
      <Pagination
        previous={{
          href: "/standards/future-proof-code",
          label: "Future-proof code"
        }}
      />
    </Main>
  </Page>
);
