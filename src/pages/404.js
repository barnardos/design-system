import React from "react";

import Link from "../components/Link";
import Main from "../components/Main";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

export default () => (
  <Page title="Page not found">
    <Main>
      <Title>Page not found</Title>
      <Paragraph>
        If you entered a web address please check it was correct.
      </Paragraph>
      <Paragraph>
        You can also visit the{" "}
        <Link href="/">Barnardo’s Design System homepage</Link> to find the
        information you need.
      </Paragraph>
    </Main>
  </Page>
);
